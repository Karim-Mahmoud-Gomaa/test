{!! CodeHelper::PHPSOL() !!}

namespace App\Repository\{{$model->name}};

use \Illuminate\Support\Facades\Facade;
use App\Repository\{{$model->name}}\{{$model->name}}RepositoryInterface;
use Illuminate\Contracts\Pagination\LengthAwarePaginator;
use Illuminate\Http\Request;

class {{$model->name}}Service extends Facade
{
    protected ${{$model->name}}Repository;
    public function __construct({{$model->name}}RepositoryInterface ${{$model->name}}Repository)
    {
        $this->{{$model->name}}Repository = ${{$model->name}}Repository;
    }
    
    public function find(int $id,array $columns=['*'],array $relations=[],array $appends=[]){
        return $this->{{$model->name}}Repository->find($id,$columns,$relations,$appends);
    }
    
    public function index(array $columns=['*'],array $relations=[],array $appends=[],int $paginate=10){        
        return $this->{{$model->name}}Repository->index($columns,$relations,$appends,$paginate);
    }
    public function create(Request $request):int{
        return $this->{{$model->name}}Repository->create($request);
    }
    public function update(int $id,Request $request):bool{
        return $this->{{$model->name}}Repository->update($id,$request);
    }
    public function delete(int $id):bool{
        return $this->{{$model->name}}Repository->delete($id);
    }
    
    
    
}