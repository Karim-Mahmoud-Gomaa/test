<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Repository\Category\CategoryFacade as Category;
use App\Models\Category as CategoryModel;

class CategoriesController extends Controller
{
    public $successStatus = 200;
    /**
    * Display a listing of the resource.
    *
    * @return \Illuminate\Http\Response
    */
    public function index(Request $request)
    {
        $success['categories']=(isset($request->paginate))?
        Category::index(['id','name'],[],[],0):
        Category::index(['*'],[],['articles_count']);
        return response()->json(['success' => $success], $this->successStatus);
    }

    public function store(Request $request)
    {
        $request->validate(['name'=>'required|max:255']);
        $success=Category::create($request);
        return response()->json(['success' => $success], $this->successStatus);
    }
    
    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\OrderDetail  $category
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request,CategoryModel $category)
    {
        $request->validate(['name'=>'required|max:255']);
        $success=Category::update($category->id,$request);
        return response()->json(['success' => $success], $this->successStatus);
    }
    
    /**
    * Remove the specified resource from storage.
    *
    * @param  \App\OrderDetail  $category
    * @return \Illuminate\Http\Response
    */
    public function destroy(CategoryModel $category)
    {
        $success=Category::delete($category->id);
        return response()->json(['success' => $success], $this->successStatus);
    }

    public function allCategories(Request $request)
    {
        $success['categories']=Category::index(['id','name'],[],[],0);
        return response()->json(['success' => $success], $this->successStatus);
    }
    
}
