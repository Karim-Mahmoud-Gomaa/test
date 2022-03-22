<?php

namespace App\Http\Controllers\Web;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Repository\Article\ArticleFacade as Article;
use App\Models\Article as ArticleModel;

class ArticlesController extends Controller
{
    public $successStatus = 200;
    public function index(Request $request)
    {
        $articles=Article::index(['*'],['category','user'],[],12,$request->search)->withQueryString();
        return view('home',compact('articles'));
    }
    
    public function show(ArticleModel $article)
    {
        $article=Article::find($article->id,['*'],['category']);
        return view('article',compact('article'));
    }

    
}
