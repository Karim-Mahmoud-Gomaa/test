<?php

namespace App\Repository\Category;
use \Illuminate\Support\Facades\Facade;
class CategoryFacade extends Facade
{
    protected static function getFacadeAccessor()
    {
        return 'App\Repository\Category\CategoryService';
    }
}