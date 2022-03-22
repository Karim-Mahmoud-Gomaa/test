<?php

namespace App\Repository\Category;

use App\Models\Category;
use App\Repository\Category\CategoryRepositoryInterface;
use Illuminate\Contracts\Pagination\LengthAwarePaginator;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Collection;
use Illuminate\Http\Request;

class CategoryRepository implements CategoryRepositoryInterface
{
   // use AuthCategoryRepository;
   /**
   * @var Model
   */
   protected $model;
   
   /**
   * BaseRepository constructor.
   *
   * @param Model $model
   */
   public function __construct(Category $model)
   {
      $this->model = $model;
   }
   public function find(int $id,array $columns=['*'],array $relations=[],array $appends=[]):Category{
      return $this->model->select($columns)->with($relations)->find($id)->append($appends);
   }
 
   public function index(array $columns=['*'],array $relations=[],array $appends=[],int $paginate=10){
      $data= $this->model->select($columns)->with($relations);
      if($paginate>0){$data=$data->paginate($paginate);}else{$data=$data->get();}
      if($appends){foreach ($data as $value) {$value->append($appends);}}
      return $data;
   }

   public function create(Request $request):int{
      $model=$this->model->create(['name'=>$request->name]);
      return $model->id; 
   }

   public function update(int $id,Request $request):bool{
      $model=$this->model->find($id);
      return ($model->update(['name'=>$request->name]))?true:false;
   }

   public function delete(int $id):bool{
      $model=$this->model->find($id);
      return ($model->delete())?true:false;
   }
      
   public function count():int{
      return $this->model->count();
   }
}