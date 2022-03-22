<?php
namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use File;

class Article extends Model
{
    protected $table = 'articles';
    protected $appends = ['image_path'];
    protected $guarded = [];

    //////////////////////////////////////////////Attributes
    public function getImagePathAttribute(){
        return '/assets/images/articles';
    }
    // //////////////////////////////////////////////Relations
    public function user()
    {
        return $this->belongsTo(User::class,'user_id');
    }
    public function category()
    {
        return $this->belongsTo(Category::class,'category_id');
    }
    public static function boot() {
        parent::boot();
        static::deleting(function($model) { 
            // dd($model->image);
            File::delete(public_path("/assets/images/articles").'/'.$model->image);
        });
    }
}
