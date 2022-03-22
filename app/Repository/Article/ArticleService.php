<?php

namespace App\Repository\Article;

use \Illuminate\Support\Facades\Facade;
use App\Repository\Article\ArticleRepositoryInterface;
use Illuminate\Contracts\Pagination\LengthAwarePaginator;
use Illuminate\Http\Request;
use App\Models\Article;

class ArticleService extends Facade
{
    protected $ArticleRepository;
    public function __construct(ArticleRepositoryInterface $ArticleRepository)
    {
        $this->ArticleRepository = $ArticleRepository;
    }
    
    public function find(int $id,array $columns=['*'],array $relations=[],array $appends=[]):Article{
        return $this->ArticleRepository->find($id,$columns,$relations,$appends);
    }
    
    public function index(array $columns=['*'],array $relations=[],array $appends=[],int $paginate=10,?string $search=null):LengthAwarePaginator{        
        return $this->ArticleRepository->index($columns,$relations,$appends,$paginate,$search);
    }
    public function create(Request $request):int{
        return $this->ArticleRepository->create($request);
    }
    public function update(int $id,Request $request):bool{
        return $this->ArticleRepository->update($id,$request);
    }
    public function delete(int $id):bool{
        return $this->ArticleRepository->delete($id);
    }
    
    public function count():int{
        return $this->ArticleRepository->count();
    }
    
    
}