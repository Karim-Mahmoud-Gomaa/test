<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Repository\User\UserFacade as User;
use App\Repository\Category\CategoryFacade as Category;
use App\Repository\Article\ArticleFacade as Article;

class PublicController extends Controller
{
    public $successStatus = 200;
    /**
    * Display a listing of the resource.
    *
    * @return \Illuminate\Http\Response
    */
    public function home(Request $request)
    {
        $success['users']=User::count();
        $success['categories']=Category::count();
        $success['articles']=Article::count();
        
        return response()->json(['success' => $success], $this->successStatus);
    }
}
