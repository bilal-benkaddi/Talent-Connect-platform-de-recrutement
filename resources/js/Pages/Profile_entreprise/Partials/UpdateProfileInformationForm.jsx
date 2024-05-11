import React from "react";
import { Transition } from '@headlessui/react';
import { Link, useForm, usePage } from '@inertiajs/react';

export default function UpdateProfileInformation({ mustVerifyEmail, status, className = '' }) {
    const entreprise = usePage().props.entreprise;

    const { data, setData, patch, errors, processing, recentlySuccessful } = useForm({
        name : entreprise.nom_Entreprise,
        logo: entreprise.logo,
        adresse: entreprise.adresse,
        code_postal: entreprise.code_postal,
        secteur: entreprise.secteur,
        ville: entreprise.ville,
        Pays: entreprise.Pays,
        telephone: entreprise.telephone,
        email: entreprise.email,
        hr_email: entreprise.hr_email,
        site_web: entreprise.site_web,
        registre_decommerce: entreprise.registre_decommerce,
        hr_nom: entreprise.hr_nom,
    });

    const submit = (e) => {
        e.preventDefault();
        patch(route('entreprises.profile.update'));
    };

    return (
        <section className={className}>
            <header>
                <h2 className="text-lg font-medium text-gray-900">Profile Information</h2>
                <p className="mt-1 text-sm text-gray-600">
                    Update your account's profile information and email address.
                </p>
            </header>
            <form onSubmit={submit} className="mt-6 space-y-6">
                <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                        Nom de l'entreprise
                    </label>
                    <input
                        id="name"
                        type="text"
                        className="mt-1 block w-full shadow-sm sm:text-sm focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 rounded-md"
                        value={data.name}
                        onChange={(e) => setData('name', e.target.value)}
                        required
                    />
                    {errors.name && <p className="mt-2 text-sm text-red-600">{errors.name}</p>}
                </div>
                <div>
                    <label htmlFor="logo" className="block text-sm font-medium text-gray-700">
                        Logo
                    </label>
                    <input
                        id="logo"
                        type="text"
                        className="mt-1 block w-full shadow-sm sm:text-sm focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 rounded-md"
                        value={data.logo}
                        onChange={(e) => setData('logo', e.target.value)}
                    />
                    {errors.logo && <p className="mt-2 text-sm text-red-600">{errors.logo}</p>}
                </div>
                <div>
                    <label htmlFor="adresse" className="block text-sm font-medium text-gray-700">
                        Adresse
                    </label>
                    <input
                        id="adresse"
                        type="text"
                        className="mt-1 block w-full shadow-sm sm:text-sm focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 rounded-md"
                        value={data.adresse}
                        onChange={(e) => setData('adresse', e.target.value)}
                    />
                    {errors.adresse && <p className="mt-2 text-sm text-red-600">{errors.adresse}</p>}
                </div>
                <div>
                    <label htmlFor="code_postal" className="block text-sm font-medium text-gray-700">
                        Code Postal
                    </label>
                    <input
                        id="code_postal"
                        type="text"
                        className="mt-1 block w-full shadow-sm sm:text-sm focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 rounded-md"
                        value={data.code_postal}
                        onChange={(e) => setData('code_postal', e.target.value)}
                    />
                    {errors.code_postal && <p className="mt-2 text-sm text-red-600">{errors.code_postal}</p>}
                </div>
                <div>
                    <label htmlFor="secteur" className="block text-sm font-medium text-gray-700">
                        Secteur
                    </label>
                    <input
                        id="secteur"
                        type="text"
                        className="mt-1 block w-full shadow-sm sm:text-sm focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 rounded-md"
                        value={data.secteur}
                        onChange={(e) => setData('secteur', e.target.value)}
                    />
                    {errors.secteur && <p className="mt-2 text-sm text-red-600">{errors.secteur}</p>}
                </div>
                <div>
                    <label htmlFor="ville" className="block text-sm font-medium text-gray-700">
                        Ville
                    </label>
                    <input
                        id="ville"
                        type="text"
                        className="mt-1 block w-full shadow-sm sm:text-sm focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 rounded-md"
                        value={data.ville}
                        onChange={(e) => setData('ville', e.target.value)}
                    />
                    {errors.ville && <p className="mt-2 text-sm text-red-600">{errors.ville}</p>}
                </div>
                <div>
                    <label htmlFor="Pays" className="block text-sm font-medium text-gray-700">
                        Pays
                    </label>
                    <input
                        id="Pays"
                        type="text"
                        className="mt-1 block w-full shadow-sm sm:text-sm focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 rounded-md"
                        value={data.Pays}
                        onChange={(e) => setData('Pays', e.target.value)}
                    />
                    {errors.Pays && <p className="mt-2 text-sm text-red-600">{errors.Pays}</p>}
                </div>
                <div>
                    <label htmlFor="telephone" className="block text-sm font-medium text-gray-700">
                        Téléphone
                    </label>
                    <input
                        id="telephone"
                        type="text"
                        className="mt-1 block w-full shadow-sm sm:text-sm focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 rounded-md"
                        value={data.telephone}
                        onChange={(e) => setData('telephone', e.target.value)}
                    />
                    {errors.telephone && <p className="mt-2 text-sm text-red-600">{errors.telephone}</p>}
                </div>
                <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                        Email
                    </label>
                    <input
                        id="email"
                        type="email"
                        className="mt-1 block w-full shadow-sm sm:text-sm focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 rounded-md"
                        value={data.email}
                        onChange={(e) => setData('email', e.target.value)}
                        required
                    />
                    {errors.email && <p className="mt-2 text-sm text-red-600">{errors.email}</p>}
                </div>
                <div>
                    <label htmlFor="hr_email" className="block text-sm font-medium text-gray-700">
                        HR Email
                    </label>
                    <input
                        id="hr_email"
                        type="email"
                        className="mt-1 block w-full shadow-sm sm:text-sm focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 rounded-md"
                        value={data.hr_email}
                        onChange={(e) => setData('hr_email', e.target.value)}
                    />
                    {errors.hr_email && <p className="mt-2 text-sm text-red-600">{errors.hr_email}</p>}
                </div>
                <div>
                    <label htmlFor="site_web" className="block text-sm font-medium text-gray-700">
                        Site Web
                    </label>
                    <input
                        id="site_web"
                        type="text"
                        className="mt-1 block w-full shadow-sm sm:text-sm focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 rounded-md"
                        value={data.site_web}
                        onChange={(e) => setData('site_web', e.target.value)}
                    />
                    {errors.site_web && <p className="mt-2 text-sm text-red-600">{errors.site_web}</p>}
                </div>
                <div>
                    <label htmlFor="registre_decommerce" className="block text-sm font-medium text-gray-700">
                        Registre de Commerce
                    </label>
                    <input
                        id="registre_decommerce"
                        type="text"
                        className="mt-1 block w-full shadow-sm sm:text-sm focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 rounded-md"
                        value={data.registre_decommerce}
                        onChange={(e) => setData('registre_decommerce', e.target.value)}
                    />
                    {errors.registre_decommerce && <p className="mt-2 text-sm text-red-600">{errors.registre_decommerce}</p>}
                </div>
                <div>
                    <label htmlFor="hr_nom" className="block text-sm font-medium text-gray-700">
                        HR Nom
                    </label>
                    <input
                        id="hr_nom"
                        type="text"
                        className="mt-1 block w-full shadow-sm sm:text-sm focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 rounded-md"
                        value={data.hr_nom}
                        onChange={(e) => setData('hr_nom', e.target.value)}
                    />
                    {errors.hr_nom && <p className="mt-2 text-sm text-red-600">{errors.hr_nom}</p>}
                </div>
                <div className="flex items-center gap-4">
                    <button
                        type="submit"
                        className="inline-flex justify-center px-4 py-2 text-sm font-medium text-white bg-indigo-600 border border-transparent rounded-md shadow-sm disabled:opacity-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                        disabled={processing}
                    >
                        Save
                    </button>
                    <Transition
                        show={recentlySuccessful}
                        enter="transition ease-in-out"
                        enterFrom="opacity-0"
                        leave="transition ease-in-out"
                        leaveTo="opacity-0"
                    >
                        <p className="text-sm text-gray-600">Saved.</p>
                    </Transition>
                </div>
            </form>
        </section>
    );
}
