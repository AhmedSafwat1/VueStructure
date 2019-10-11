<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class HomeController extends Controller
{
    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function __construct()
    {
//        $this->middleware('auth');
    }

    /**
     * Show the application dashboard.
     *
     * @return \Illuminate\Contracts\Support\Renderable
     */
    public function index()
    {
        return view('welcome');
    }

    public function test(Request $request){
        return response()->json(['name'=>'safwat']);
    }

    public function test2(Request $request){
        $users   = [

            ['firstName'=>"safwat",'lastName'=>"ali"],
            ['firstName'=>"safwat2",'lastName'=>"ali2"],
        ];

        return response()->json(['data'=>$users]);
    }
}
