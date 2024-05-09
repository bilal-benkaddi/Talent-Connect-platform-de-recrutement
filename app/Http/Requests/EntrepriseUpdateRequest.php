<?php

namespace App\Http\Requests;

use App\Models\Entreprise;
use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Validation\Rule;

class EntrepriseUpdateRequest extends FormRequest
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
                Rule::unique(Entreprise::class)->ignore(auth('entreprise')->id()),
            ],
        ];
    }
}
