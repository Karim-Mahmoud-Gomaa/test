<?php

namespace App\Repository\Article;

use App\Models\Article;
use App\Repository\Article\ArticleRepositoryInterface;
use Illuminate\Contracts\Pagination\LengthAwarePaginator;
use Illuminate\Database\Eloquent\Collection;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Http\Request;
use File;

class ArticleRepository implements ArticleRepositoryInterface
{
    // use AuthArticleRepository;
    /**
    * @var  Model
    */
    protected $model;
    
    /**
    * BaseRepository constructor.
    *
    * @param  Model $model
    */
    public function __construct(Article $model)
    {
        $this->model = $model;
    }

    public function find(int $id,array $columns=['*'],array $relations=[],array $appends=[]):Article{
        return $this->model->select($columns)->with($relations)->find($id)->append($appends);
    }

    public function index(array $columns=['*'],array $relations=[],array $appends=[],int $paginate=10,?string $search=null):LengthAwarePaginator{
        $data= $this->model->select($columns)->with($relations)
        ->when(isset($search),function($q) use($search){
            $q->where('title','like','%'.$search.'%');
        })
        ->orderBy('created_at','desc')->paginate($paginate);
        if($appends){foreach ($data as $value) {$value->append($appends);}}
        return $data;
    }
    
    public function byCategory(int $category_id):Collection{
        return $this->model->where('category_id',$category_id)
        ->with(['category','user:id,name,email'])
        ->orderBy('created_at','desc')->get();
    }
    
    public function create(Request $request):int{
        $model=$this->model->create([
            'category_id'=>$request->category_id,
            'user_id'=>$request->user()->id,
            'title'=>$request->title,
            'content'=>$request->content,
        ]);
        return $model->id; 
    }
    
    public function update(int $id,Request $request):bool{
        $model=$this->model->find($id);
        if ($request->image_name&&$model->image) {
            File::delete(public_path("/assets/images/articles").'/'.$model->image);
        }
        
        return ($model->update([
            'category_id'=>($request->category_id)?$request->category_id:$model->category_id,
            'content'=>($request->content)?$request->content:$model->content,
            'title'=>($request->title)?$request->title:$model->title,
            'image'=>($request->image_name)?$request->image_name:$model->image,
            ]))?1:0;
        }
        public function delete(int $id):bool{
            $model=$this->model->find($id);
            return ($model->delete())?1:0;
        }
        
        public function addView(int $id):bool{
            $model=$this->model->find($id);
            return $model->update(['views'=>$model->views+1]);
        }
        
        public function count():int{
            return $this->model->count();
        }
    }