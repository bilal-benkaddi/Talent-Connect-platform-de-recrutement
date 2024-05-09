<?php

namespace App\Http\Requests;

use App\Models\Candidat;
use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Validation\Rule;

class CandidatUpdateRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return true; // You can add your authorization logic here if needed
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        return [
            'name' => ['required', 'string', 'max:255'],
            'email' => [
                'required',
                'string',
                'lowercase',
                'email',
                'max:255',
                Rule::unique(Candidat::class)->ignore(auth('candidat')->id()),
            ],
        ];
    }
}
