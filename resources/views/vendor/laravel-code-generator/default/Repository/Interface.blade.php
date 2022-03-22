{!! CodeHelper::PHPSOL() !!}

namespace App\Repository\{{$model->name}};
use Illuminate\Database\Eloquent\Collection;
use Illuminate\Contracts\Pagination\LengthAwarePaginator;
use App\Models\{{$model->name}};
use Illuminate\Http\Request;

interface {{$model->name}}RepositoryInterface {
    public function find(int $id,array $columns=['*'],array $relations=[],array $appends=[]):{{$model->name}};
    public function index(array $columns=['*'],array $relations=[],array $appends=[],int $paginate=10);
    public function create(Request $request):int;
    public function update(int $id,Request $request):bool;
    public function delete(int $id):bool;
}