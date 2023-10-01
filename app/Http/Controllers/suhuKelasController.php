<?php

namespace App\Http\Controllers;


use App\Http\Requests\StoreSuhuKelasRequest;
use App\Http\Requests\UpdateSuhuKelasRequest;
use App\Http\Resources\SuhuKelasResource;
use App\Models\suhukelas;

class suhuKelasController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        // $data = SuhuKelas::all();
        // ntah paginate ini coy
        // return SuhuKelasResource::collection(SuhuKelas::all()->paginate());
        return SuhuKelasResource::collection(suhukelas::all());
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreSuhuKelasRequest $request)
    {
        $validatedData = $request->validated();
        $result = suhukelas::create($validatedData);

        return new SuhuKelasResource($result);
    }

    /**
     * Display the specified resource.
     */
    public function show($id)
    {
        // if (!$suhukelas) {
        //     return response()->json(['message' => 'Data not found'], 404);
        // }
        $suhukelas = SuhuKelas::findOrFail($id);
        return new SuhuKelasResource($suhukelas);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateSuhuKelasRequest $request, $id)
    {
        $validatedData = $request->validated();

        // Melakukan update data SuhuKelas berdasarkan ID
        $affectedRows = SuhuKelas::where('id', $id)->update($validatedData);

        if ($affectedRows > 0) {
            // Data berhasil diupdate, ambil data yang sudah diupdate
            $suhuKelas = SuhuKelas::find($id);

            // Kembalikan data yang sudah diupdate dalam bentuk SuhuKelasResource
            return new SuhuKelasResource($suhuKelas);
        } else {
            // Data tidak ditemukan untuk ID yang diberikan
            return response()->json(['message' => 'Data not found'], 404);
        }
    }
    // public function update(UpdateSuhuKelasRequest $request, suhukelas $suhuKelas)
    // {
    //     $validatedData = $request->validated();
    //     $suhuKelas->update($validatedData);

    //     return new SuhuKelasResource($suhuKelas);
    // }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy($id)
    {
        $deletedRows = SuhuKelas::destroy($id);
        if ($deletedRows > 0) {
            // Data berhasil dihapus
            return response('', status: 204);
        } else {
            // Data tidak ditemukan untuk ID yang diberikan
            return response()->json(['message' => 'Data not found'], 404);
        }
        // return response('', status: 204);
    }
}
