<?php

namespace App\Http\Controllers;

use App\Models\User;


use Illuminate\Http\Request;

class UserController extends Controller
{
    public function index() 
    {
        return User::with('tasks')->get();
    }


    public function createUser(Request $request)
    {
        $user = new User();
        $user->name = $request->name;
        $user->email = $request->email;
        $user->password = bcrypt($request->password);
        $user->save();

        return response()->json([
            'user' => $user,
            'message' => 'User created',
            'status' => 201
        ], 201);
    }
}
