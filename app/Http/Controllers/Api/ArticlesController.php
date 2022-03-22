<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Repository\Article\ArticleFacade as Article;
use App\Repository\Category\CategoryFacade as Category;
use App\Models\Article as ArticleModel;
use Image;

class ArticlesController extends Controller
{
    public $successStatus = 200;
    public function index(Request $request)
    {
        $success['articles']=Article::index(['*'],['category','user'],[],10,$request->searsh);
        return response()->json(['success' => $success], $this->successStatus);
    }
    
    public function store(Request $request)
    {
        $request->validate([
            'category_id'=>'required|exists:categories,id',
            'title'=>'required|max:255',
            'content'=>'required',
        ]);
        $success=Article::create($request);
        return response()->json(['success' => $success], $this->successStatus);
    }
    
    
    public function edit(ArticleModel $article)
    {
        $success['article']=Article::find($article->id,['*'],['category']);
        $success['categories']=Category::index(['id','name'],[],[],0);
        return response()->json(['success' => $success], $this->successStatus);
    }
    
    public function show(ArticleModel $article)
    {
        $success['article']=Article::find($article->id,['*'],['category']);
        return response()->json(['success' => $success], $this->successStatus);
    }
    
    /**
    * Update the specified resource in storage.
    *
    * @param    \Illuminate\Http\Request  $request
    * @param    \App\OrderDetail  $article
    * @return  \Illuminate\Http\Response
    */
    public function update(Request $request,ArticleModel $article)
    {
        $request->validate([
            'category_id'=>'required|exists:categories,id',
            'title'=>'required|max:255',
            'content'=>'required',
        ]);
        $success=Article::update($article->id,$request);
        return response()->json(['success' => $success], $this->successStatus);
    }
    
    /**
    * Remove the specified resource from storage.
    *
    * @param    \App\OrderDetail  $article
    * @return  \Illuminate\Http\Response
    */
    public function destroy(ArticleModel $article)
    {
        $success=Article::delete($article->id);
        return response()->json(['success' => $success], $this->successStatus);
    }
    public function addView(Request $request)
    {
        $request->validate([
            'article_id'=>'required|exists:articles,id',
        ]);
        $success=Article::addView($request->article_id);
        return response()->json(['success' => $success], $this->successStatus);
    }
    
    public function byCategory(Request $request)
    {
        $request->validate([
            'category_id'=>'required|exists:categories,id',
        ]);
        $success=Article::byCategory($request->category_id);
        return response()->json(['success' => $success], $this->successStatus);
    }
    
    
    public function saveImage(Request $request)
    {
        $this->validate($request, [
            'image'=>'image|mimes:jpg,jpeg,png,gif,svg'
        ]);
        $file=$request->file('image');
        $name=time().rand(1111,9999);
        $fullName = $name.'.'.$file->getClientOriginalExtension();
        $imgFile = Image::make($file->getRealPath());
        $imgFile->save(public_path("/assets/images/articles").'/'.$fullName);
        $request->merge(['image_name'=>$fullName]);
        
        $success=Article::update($request->article_id,$request);
        return response()->json(['success'=>$success], $this->successStatus);
    }
    
}
