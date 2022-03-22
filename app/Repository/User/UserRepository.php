<?php

namespace App\Repository\User;

use App\Models\User;
use App\Repository\User\UserRepositoryInterface;
use App\Repository\User\AuthUserRepositoryInterface;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Collection;
use Illuminate\Support\Facades\Hash;
use Illuminate\Http\Request;
use Illuminate\Contracts\Pagination\LengthAwarePaginator;

class UserRepository implements UserRepositoryInterface
{
   // use AuthUserRepository;
   /**
   * @var Model
   */
   protected $model;
   
   /**
   * BaseRepository constructor.
   *
   * @param Model $model
   */
   public function __construct(User $model)
   {
      $this->model = $model;
   }
   public function find(int $id,array $columns=['*'],array $relations=[],array $appends=[]):User{
      return $this->model->select($columns)->with($relations)->find($id)->append($appends);
   }
 
   public function index(array $columns=['*'],array $relations=[],array $appends=[],int $paginate=10){
      $data= $this->model->select($columns)->with($relations);
      if($paginate>0){$data=$data->paginate($paginate);}else{$data=$data->get();}
      if($appends){foreach ($data as $value) {$value->append($appends);}}
      return $data;
   }
   public function create(Request $request):int{
      $model=$this->model->create(['name'=>$request->name,'email'=>$request->email,
      'password'=>bcrypt(($request->password)?$request->password:$request->email)]);
      return $model->id; 
   }
   public function update(int $id,Request $request):bool{
      $model=$this->model->find($id);
      $model->update(['name'=>$request->name,'email'=>$request->email]);
      if ($request->password) {
         $model->update(['password'=>bcrypt($request->password)]);
      }
      return true; 
   }
   
   public function login(string $email,string $password){
      $auth_user = $this->model->where('email',$email)->first();
      if(isset($auth_user)&&Hash::check($password, $auth_user->password)){
         $tokenResult = $auth_user->createToken('MyApp');
         $success['token'] =  $tokenResult->accessToken;
         $success['user'] =  $auth_user;
         return $success;
      }
      return false;
   }
   public function  logout($model)
   {
      $model->token()->delete();
      return true;
   }
   
   public function delete(int $id):bool{
      
      $model=$this->model->find($id);
      return ($model->delete())?true:false;
   }
   
   public function count():int{
      return $this->model->count();
   }
  
}