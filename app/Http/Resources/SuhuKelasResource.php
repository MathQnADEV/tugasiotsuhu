<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class SuhuKelasResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */
    public function toArray(Request $request)
    {
        return parent::toArray($request);

        // return [
        //     'id' => $this->id,
        //     'kelas' => $this->kelas,
        //     'suhu' => $this->suhu,
        //     'kelembapan' => $this->kelembapan,
        // ];

    }
}
