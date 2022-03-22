<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Category extends Model
{ 
    use HasFactory;
    protected $table = 'categories';
    public $timestamps =false;  
    protected $guarded = [];
    
    //////////////////////////////////////////////Attributes
    public function getArticlesCountAttribute(){
        return Article::where('category_id',$this->id)->count();
    }
    //////////////////////////////////////////////Relations
    public function articles()
    {   
        return $this->hasMany(Article::class,'category_id');
    }
    public static function boot() {
        parent::boot();
        static::deleting(function($model) { 
            foreach($model->articles as $article){
                $article->delete();
            }
        });
    }
}
