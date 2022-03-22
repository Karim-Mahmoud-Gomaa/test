{!! CodeHelper::PHPSOL() !!}
namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class {{$model->name}} extends Model
{
    protected $table = '{{CodeHelper::plural(CodeHelper::snake($model->name))}}';
    protected $guarded = [];
    @php
    $timestamps=false;
    foreach ($model->table->columns as $column){
        if ($column->name=='created_at'){
            $timestamps=true;
        }
    }
    @endphp
    @if (!$timestamps)
    public $timestamps =false;  
    @endif

    // //////////////////////////////////////////////Relations
    @foreach ($model->table->columns as $column)
    @if(str_contains($column->name,'_id'))
    public function {{str_replace("_id","",$column->name)}}()
    {
        return $this->belongsTo({{Str::ucfirst(str_replace("_id","",$column->name))}}::class,'{{$column->name}}');
    }
    @endif
    @endforeach
    @if(count($options->relations))
    @foreach ($options->relations as $key=>$relation)
    public function {{Str::snake(Str::plural(str_replace($model->name,"",$relation)))}}()
    {
        return $this->belongsToMany({{str_replace($model->name,"",$relation)}}::class,'{{Str::snake(Str::plural($relation))}}');
    }
    @endforeach
    @endif
}
