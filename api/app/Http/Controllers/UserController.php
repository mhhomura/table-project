<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;

class UserController extends Controller
{
    public function index()
    {
        $users =  User::all();
        return response()->json($users);
    }

    public function store(Request $request)
    {
        try {
            $user = new User;
            $user->name = $request->name;
            $user->status = $request->status;
            $user->email = $request->email;
            $user->admission = $request->admission;
            $user->password = '12345678';
            $user->save();
            return response()->json([
                "message" => "Success",
                "data" => []
            ], 201);
        } catch (\Throwable $th) {
            return response()->json([
                "message" => $th
            ], 500);
        }
    }

    public function update(Request $request, $id)
    {
        try {
            $user = User::findOrFail($id);
            $user->name = $request->name;
            $user->status = $request->status;
            $user->email = $request->email;
            $user->admission = $request->admission;
            $user->save();
            return response()->json([
                "message" => "User updated successfully",
                "data" => $user
            ], 200);
        } catch (\Throwable $th) {
            return response()->json([
                "message" => $th->getMessage()
            ], 500);
        }
    }

    public function show($id)
    {
        try {
            $user = User::find($id);
            if (!empty($user)) {
                return response()->json([
                    "message" => "Success",
                    "data" => $user
                ], 201);
            } else {
                return response()->json([
                    "message" => "Not Found",
                    "data" => []
                ], 404);
            }
        } catch (\Throwable $th) {
            return response()->json([
                "message" => $th
            ], 500);
        }
    }

    public function destroy($id)
    {
        try {
            if (User::where('id', $id)->exists()) {
                $user = User::find($id);
                $user->delete();

                return response()->json([
                    "message" => "Success",
                ], 202);
            } else {
            }
        } catch (\Throwable $th) {
            return response()->json([
                "message" => $th
            ], 500);
        }
    }
}
