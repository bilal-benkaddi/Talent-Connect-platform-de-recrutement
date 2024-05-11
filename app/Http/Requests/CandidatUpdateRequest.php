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
        return true;
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
            'prenom' => ['required', 'string', 'max:255'],
            'date_de_naissance' => ['required', 'date'],
            'image' => ['nullable', 'string', 'max:255'],
            'telephone' => ['nullable', 'string', 'max:255'],
            'Adresse_postale' => ['nullable', 'string', 'max:255'],
        ];
    }
}
