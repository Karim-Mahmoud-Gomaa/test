<?php

namespace App\Repository\Category;

use \Illuminate\Support\Facades\Facade;
use App\Repository\Category\CategoryRepositoryInterface;
use Illuminate\Contracts\Pagination\LengthAwarePaginator;
use Illuminate\Http\Request;
use App\Models\Category;

class CategoryService extends Facade
{
    protected $CategoryRepository;
    public function __construct(CategoryRepositoryInterface $CategoryRepository)
    {
        $this->CategoryRepository = $CategoryRepository;
    }
    
    public function find(int $id,array $columns=['*'],array $relations=[],array $appends=[]):Category{
        return $this->CategoryRepository->find($id,$columns,$relations,$appends);
    }
    
    public function index(array $columns=['*'],array $relations=[],array $appends=[],int $paginate=10){        
        return $this->CategoryRepository->index($columns,$relations,$appends,$paginate);
    }

    public function create(Request $request):int{
        return $this->CategoryRepository->create($request);
    }
    
    public function update(int $id,Request $request):bool{
        return $this->CategoryRepository->update($id,$request);
    }

    public function delete(int $id):bool{
        return $this->CategoryRepository->delete($id);
    }

    public function count():int{
        return $this->CategoryRepository->count();
    }
    
    
    
}