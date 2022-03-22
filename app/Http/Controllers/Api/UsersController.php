<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\User as UserModel;
use App\Repository\User\UserFacade as User;
class UsersController extends Controller
{
    public $successStatus = 200;
    /**
    * Display a listing of the resource.
    *
    * @return \Illuminate\Http\Response
    */
    public function index(Request $request)
    {
        $success['users']=User::index(['*'],[],['articles_count']);
        return response()->json(['success' => $success], $this->successStatus);
    }
    public function update(UserModel $user,Request $request)
    {
        $request->validate([
            'name'=>'required|max:255',
            'email'=>'required|email|unique:users,email,'.$user->id,
            'password'=>'nullable|confirmed|min:8',
        ]);
        User::update($user->id,$request);
        return response()->json(['success' => 'done'], $this->successStatus);
    }
    
    public function store(Request $request)
    {
        $request->validate([
            'name'=>'required|max:255',
            'email'=>'required|email|unique:users',
            'password'=>'required|confirmed|min:8',
        ]);
        $success=User::create($request);
        return response()->json(['success' => $success], $this->successStatus);
    }
        
    /**
    * Remove the specified resource from storage.
    *
    * @param  \App\OrderDetail  $user
    * @return \Illuminate\Http\Response
    */
    public function destroy(UserModel $user)
    {
        $success=User::delete($user->id);
        return response()->json(['success' => $success], $this->successStatus);
    }
}
