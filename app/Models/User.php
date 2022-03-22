<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Laravel\Passport\HasApiTokens;

class User extends Authenticatable
{
    use HasApiTokens, HasFactory, Notifiable;
    
    protected $hidden = ['password','remember_token'];
    protected $guarded = [];
    //////////////////////////////////////////////Attributes
    public function getArticlesCountAttribute(){
        return Article::where('user_id',$this->id)->count();
    }
    //////////////////////////////////////////////Relations
    public function articles()
    {   
        return $this->hasMany(Article::class,'user_id');
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
