<?php
namespace App\Console\Commands;
use Illuminate\Console\Command;
use Illuminate\Support\Facades\Artisan;
use VictorYoalli\LaravelCodeGenerator\Facades\CodeGenerator;
use VictorYoalli\LaravelCodeGenerator\Facades\ModelLoader;
use VictorYoalli\LaravelCodeGenerator\Structure\Model;
use Illuminate\Support\Str;
class CodeGeneratorCommand extends Command
{
    /**
    * The name and signature of the console command.
    *
    * @var string
    */
    protected $signature = 'code:generator {model : Model(s) separated by commas: i.e: \'User, Post, Section\' } ' .
    '{relations="" : Creates Model Repository} ' .
    '{--m|model : Model files} ' .
    '{--a|api : Creates API Controller} ' .
    '{--r|routes : Display Routes} ' .
    '{--p|repository : Creates Model Repository} ' .
    '{--x|vue : Creates Model Vue} ' .
    '{--A|all : All Files}' .
    '{--F|force : Overwrite files if exists}';
    protected $description = 'Multiple files generation';
    /**
    * Execute the console command.
    *
    * @return mixed
    */
    public function handle()
    {
        // $model=$this->argument('model');
        // dd(Str::plural(Str::snake($model)));
        $force = $this->option('force');
        //Options
        $api = $this->option('api');
        $model = $this->option('model');
        $routes = $this->option('routes');
        $repository = $this->option('repository');
        $vue = $this->option('vue');
        $relations = (($this->argument('relations')!='""')?explode(",",$this->argument('relations')):[]);
        $all = $this->option('all');
        $theme = "default";
        // dd($relations);
        
        if ($all) {
            $api = $routes = $model =$repository = $all;
        }
        $options = compact(['model','routes','api','repository','relations','vue']);
        $namespace = rtrim("App\Models", '\\');
        if ($options['model']) {
            Artisan::call("make:model M/{$this->argument('model')}");
            $m = ModelLoader::load("{$namespace}\\M\\{$this->argument('model')}");
        }else{
            Artisan::call("make:model {$this->argument('model')}");
            $m = ModelLoader::load("{$namespace}\\{$this->argument('model')}");
        }
        $this->generate($m, $options, $theme, $force);
    }
    public function generate(Model $m, $options, $theme, $force)
    {
       
        // dd("");
        //////////////////////////////////////
        $option = (object) $options;
        $this->info('🚀 Starting code generation');
        $this->newLine();
        if ($option->model) {
            $this->printif('Model File', CodeGenerator::generate($m, $theme . '/Models/Model', "app/Models/{$m->name}.php", $force, $options));
            $m = ModelLoader::load("App\\Models\\{$m->name}");
        }
        if ($option->api) {
            $this->printif('API Controller', CodeGenerator::generate($m, $theme . '/Http/Controllers/API/ModelController', "app/Http/Controllers/API/".Str::plural($m->name)."Controller.php", $force, $options));
        }
        if ($option->repository) {
            $this->printif('Model Facade', CodeGenerator::generate($m, $theme . '/Repository/Facade', "app/Repository/{$m->name}/{$m->name}Facade.php", $force, $options));
            $this->printif('Model Interface', CodeGenerator::generate($m, $theme . '/Repository/Interface', "app/Repository/{$m->name}/{$m->name}RepositoryInterface.php", $force, $options));
            $this->printif('Model Service', CodeGenerator::generate($m, $theme . '/Repository/Service', "app/Repository/{$m->name}/{$m->name}Service.php", $force, $options));
            $this->printif('Model Repository', CodeGenerator::generate($m, $theme . '/Repository/Repository', "app/Repository/{$m->name}/{$m->name}Repository.php", $force, $options));
        }
        if ($option->vue) {
            $this->printif('vue Index', CodeGenerator::generate($m, $theme . '/Vue/Index', "resources/js/pages/".Str::plural($m->name)."/Index.vue", $force, $options));
            $this->printif('vue Add Model', CodeGenerator::generate($m, $theme . '/Vue/Add', "resources/js/components/modals/".Str::snake($m->name)."/add.vue", $force, $options));
        }
        if ($option->routes) {
            $path='routes\api.php';
            $where='#auth:api';
            $exist="resource('".Str::slug(Str::plural($m->name))."'";
            $line="\t\tRoute::resource('".Str::slug(Str::plural($m->name))."', App\Http\Controllers\API\\".Str::plural($m->name)."Controller::class);";
            $this->addLine($path, $where, $exist, $line);
        }
        if ($option->repository) {
            $path='app\Providers\EventServiceProvider.php';
            $where='#bind:Repository';
            $exist="'App\Repository\\".$m->name."\\".$m->name."RepositoryInterface'";
            $line="\t\t".'$'."this->app->bind('App\Repository\\".$m->name."\\".$m->name."RepositoryInterface','App\Repository\\".$m->name."\\".$m->name."Repository');";
            $this->addLine($path, $where, $exist, $line);
        }
        if ($option->vue) {
            $path='resources\js\routes\index.js';
            $where='#Vue:Routes';
            $exist="path:'/".Str::plural(Str::snake($m->name))."'";
            $line="\t\t{path:'/".Str::plural(Str::snake($m->name))."',name: '".Str::plural(Str::snake($m->name))."',component:()=>import('../pages/".Str::plural($m->name)."/Index'),meta:{title: '".Str::plural($m->name)."',middleware: [auth, checkAuth]} },";
            $this->addLine($path, $where, $exist, $line);
            // $this->newLine(1);
            // $this->line('<fg=cyan>'.CodeGenerator::generate($m, $theme . '/vueRoutes', null, $force, $options).'</>');
        }
        $this->newLine();
        $this->info('🎉 Finished!');
    }
    public function printif($type, $filename)
    {
        $text = empty($filename) ? '<fg=red> ✖ </> '. $type . '<fg=yellow> already exists </>' : '<fg=green>✔</> <fg=default>' . $filename . '<fg=magenta> created. </>';
        $this->line($text);
    }
    public function addLine($path,$where,$exist,$line)
    {
        // dd($path,$where,$exist,$line);
        $filename = base_path($path);
        $search = $where;
        $insert = $line ;
        $replace = $search. "\n". $insert;
        $file_contents=file_get_contents($filename);
        if (strpos($file_contents, $exist) == false) {
            file_put_contents($filename, str_replace($search, $replace, $file_contents));
            // dd('Done');
            $text = '<fg=green>✔</> <fg=default> Line In "'.$path.'" <fg=magenta> created. </>';
        }else{
            $text = '<fg=red> ✖ </> Line In "'.$path.'" <fg=yellow> already exists </>';
        }
        $this->line($text);
    }
}
