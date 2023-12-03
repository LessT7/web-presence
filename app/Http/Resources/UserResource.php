<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use App\Http\Resources\PositionResource;
use Illuminate\Http\Resources\Json\JsonResource;

class UserResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */
    public function toArray(Request $request): array
    {
        return [
            'nik' => $this->nik,
            'name' => $this->name,
            'email' => $this->email,
            'positions' => $this->whenLoaded('positions', function () {
                return new PositionResource($this->positions);
            }),
        ];
    }
}
