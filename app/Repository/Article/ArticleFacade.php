<?php

namespace App\Repository\Article;
use \Illuminate\Support\Facades\Facade;
class ArticleFacade extends Facade
{
    protected static function getFacadeAccessor()
    {
        return 'App\Repository\Article\ArticleService';
    }
}
