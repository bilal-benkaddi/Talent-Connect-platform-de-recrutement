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
            'logo' => ['nullable', 'string', 'max:255'],
            'adresse' => ['nullable', 'string', 'max:255'],
            'code_postal' => ['nullable', 'string', 'max:255'],
            'secteur' => ['nullable', 'string', 'max:255'],
            'ville' => ['nullable', 'string', 'max:255'],
            'Pays' => ['nullable', 'string', 'max:255'],
            'telephone' => ['nullable', 'string', 'max:255'],
            'email' => [
                'required',
                'string',
                'lowercase',
                'email',
                'max:255',
                Rule::unique(Entreprise::class)->ignore(auth('entreprise')->id()),
            ],
            'hr_email' => ['nullable', 'string', 'max:255'],
            'password' => ['nullable', 'string', 'min:8', 'confirmed'],
            'site_web' => ['nullable', 'string', 'max:255'],
            'registre_decommerce' => ['nullable', 'string', 'max:255'],
            'hr_nom' => ['nullable', 'string', 'max:255'],
        ];
    }
}
