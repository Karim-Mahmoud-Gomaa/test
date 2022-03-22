{!! CodeHelper::PHPSOL() !!}

namespace App\Repository\{{$model->name}};
use \Illuminate\Support\Facades\Facade;
class {{$model->name}}Facade extends Facade
{
    protected static function getFacadeAccessor()
    {
        return 'App\Repository\{{$model->name}}\{{$model->name}}Service';
    }
}
