<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Http\Controllers\UtilController;
use App\Models\Service;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Mail;

class ServiceController extends Controller
{
    //
    public function store()
    {
        $data = request()->all();

        Service::create($data);

        return response()->json([
            'message' => UtilController::message('Service successfully created', 'success')
        ]);
    }

    /**
     * Show the specified resource for editing.
     *
     * @param  int  $id
     * @return \Illuminate\Http\JsonResponse
     */
    public function edit($id): JsonResponse
    {
        // Find the service or return a 404 error if it doesn't exist
        $service = Service::findOrFail($id);

        // Return the service data as a JSON response
        return response()->json([
            'success' => true,
            'data' => $service,
        ], 200);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\JsonResponse
     */
    public function update(Request $request, $id): JsonResponse
    {
        // Validate the request
        $validatedData = $request->validate([
            'name' => 'required|string|max:255',
            'description' => 'required|string',
            'body' => 'required|string',
            'link' => 'required|string',
        ]);

        // Find the service or return a 404 error if it doesn't exist
        $service = Service::findOrFail($id);

        // Update the service with validated data
        $service->update($validatedData);

        // Return the updated service data as a JSON response
        return response()->json([
            'success' => true,
            'message' => 'Service updated successfully',
            'data' => $service,
        ], 200);
    }
}
