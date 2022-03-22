<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Repository\User\UserFacade as User;
// use Illuminate\Support\Facades\Artisan;
// use Mike42\Escpos\PrintConnectors\FilePrintConnector;
// use Mike42\Escpos\PrintConnectors\WindowsPrintConnector;
// use Mike42\Escpos\Printer;
// use Mike42\Escpos\Escpos;

class AuthController extends Controller
{
    public $successStatus = 200;
    
    public function login(Request $request)
    { 
        $request->validate(['email' => 'required','password' => 'required|min:8']);
        $success = User::login($request->email,$request->password);
        if ($success) {
            return response()->json(['success' => $success], $this->successStatus);
        }
        return response()->json(["error" => "Your Email/Password is wrong.."], 401);
    }
    public function user(Request $request)
    {
        $success['user']=$request->user();
        return response()->json(['success' => $success], 200);
    }
    public function logout(Request $request)
    {
        User::logout($request->user());
        return response()->json(['success' => 'done'], 200);
    }
}
