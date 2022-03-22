<?php

namespace App\Repository\Article;
use Illuminate\Contracts\Pagination\LengthAwarePaginator;
use Illuminate\Database\Eloquent\Collection;
use App\Models\Article;
use Illuminate\Http\Request;

interface ArticleRepositoryInterface {
    public function find(int $id,array $columns=['*'],array $relations=[],array $appends=[]):Article;
    public function index(array $columns=['*'],array $relations=[],array $appends=[],int $paginate=10,?string $search=null):LengthAwarePaginator;
    public function create(Request $request):int;
    public function update(int $id,Request $request):bool;
    public function delete(int $id):bool;
    public function byCategory(int $category_id):Collection;
    public function addView(int $id):bool;
    public function count():int;
}