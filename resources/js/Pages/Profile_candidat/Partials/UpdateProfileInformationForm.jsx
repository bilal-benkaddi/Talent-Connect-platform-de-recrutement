import React, { useEffect } from "react";
import InputError from "@/Components/InputError";
import InputLabel from "@/Components/InputLabel";
import PrimaryButton from "@/Components/PrimaryButton";
import TextInput from "@/Components/TextInput";
import { Transition } from "@headlessui/react";
import { Link, useForm, usePage } from "@inertiajs/react";

export default function UpdateProfileInformation({
    mustVerifyEmail,
    status,
    className = "",
}) {
    const user = usePage().props.candidat;

    const { data, setData, patch, errors, processing, recentlySuccessful } =
        useForm({
            name: user.nom,
            prenom: user.prenom,
            date_de_naissance: user.date_de_naissance,
            email: user.email,
            image: user.image,
            telephone: user.telephone,
            Adresse_postale: user.Adresse_postale,
        });

    const submit = (e) => {
        e.preventDefault();

        patch(route("candidats.profile.update"));
    };

    return (
        <section className={className}>
            <header>
                <h2 className="text-lg font-medium text-gray-900">
                    Profile Information
                </h2>

                <p className="mt-1 text-sm text-gray-600">
                    Update your account's profile information and email address.
                </p>
            </header>

            <form onSubmit={submit} className="mt-6 space-y-6">
                <div>
                    <InputLabel htmlFor="name" value="Name" />

                    <TextInput
                        id="name"
                        className="mt-1 block w-full"
                        value={data.name}
                        onChange={(e) => setData("name", e.target.value)}
                        required
                        isFocused
                        autoComplete="name"
                    />

                    <InputError className="mt-2" message={errors.name} />
                </div>

                <div>
                    <InputLabel htmlFor="email" value="Email" />

                    <TextInput
                        id="email"
                        type="email"
                        className="mt-1 block w-full"
                        value={data.email}
                        onChange={(e) => setData("email", e.target.value)}
                        required
                        autoComplete="username"
                    />

                    <InputError className="mt-2" message={errors.email} />
                </div>

                {mustVerifyEmail && user.email_verified_at === null && (
                    <div>
                        <p className="text-sm mt-2 text-gray-800">
                            Your email address is unverified.
                            <Link
                                href={route("candidats.verification.send")}
                                method="post"
                                as="button"
                                className="underline text-sm text-gray-600 hover:text-gray-900 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                            >
                                Click here to re-send the verification email.
                            </Link>
                        </p>

                        {status === "verification-link-sent" && (
                            <div className="mt-2 font-medium text-sm text-green-600">
                                A new verification link has been sent to your
                                email address.
                            </div>
                        )}
                    </div>
                )}

                <div>
                    <label
                        htmlFor="prenom"
                        className="block text-sm font-medium text-gray-700"
                    >
                        Prénom
                    </label>
                    <input
                        id="prenom"
                        type="text"
                        className="mt-1 block w-full shadow-sm sm:text-sm focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 rounded-md"
                        value={data.prenom}
                        onChange={(e) => setData("prenom", e.target.value)}
                        required
                    />
                    {errors.prenom && (
                        <p className="mt-2 text-sm text-red-600">
                            {errors.prenom}
                        </p>
                    )}
                </div>

                <div>
                    <label
                        htmlFor="date_de_naissance"
                        className="block text-sm font-medium text-gray-700"
                    >
                        Date de Naissance
                    </label>
                    <input
                        id="date_de_naissance"
                        type="date"
                        className="mt-1 block w-full shadow-sm sm:text-sm focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 rounded-md"
                        value={data.date_de_naissance}
                        onChange={(e) =>
                            setData("date_de_naissance", e.target.value)
                        }
                        required
                    />
                    {errors.date_de_naissance && (
                        <p className="mt-2 text-sm text-red-600">
                            {errors.date_de_naissance}
                        </p>
                    )}
                </div>

                <div>
                    <label
                        htmlFor="email"
                        className="block text-sm font-medium text-gray-700"
                    >
                        Email
                    </label>
                    <input
                        id="email"
                        type="email"
                        className="mt-1 block w-full shadow-sm sm:text-sm focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 rounded-md"
                        value={data.email}
                        onChange={(e) => setData("email", e.target.value)}
                        required
                    />
                    {errors.email && (
                        <p className="mt-2 text-sm text-red-600">
                            {errors.email}
                        </p>
                    )}
                </div>

                <div>
                    <label
                        htmlFor="image"
                        className="block text-sm font-medium text-gray-700"
                    >
                        Image
                    </label>
                    <input
                        id="image"
                        type="text"
                        className="mt-1 block w-full shadow-sm sm:text-sm focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 rounded-md"
                        value={data.image}
                        onChange={(e) => setData("image", e.target.value)}
                        required
                    />
                    {errors.image && (
                        <p className="mt-2 text-sm text-red-600">
                            {errors.image}
                        </p>
                    )}
                </div>

                <div>
                    <label
                        htmlFor="telephone"
                        className="block text-sm font-medium text-gray-700"
                    >
                        Téléphone
                    </label>
                    <input
                        id="telephone"
                        type="tel"
                        className="mt-1 block w-full shadow-sm sm:text-sm focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 rounded-md"
                        value={data.telephone}
                        onChange={(e) => setData("telephone", e.target.value)}
                        required
                    />
                    {errors.telephone && (
                        <p className="mt-2 text-sm text-red-600">
                            {errors.telephone}
                        </p>
                    )}
                </div>

                <div>
                    <label
                        htmlFor="Adresse_postale"
                        className="block text-sm font-medium text-gray-700"
                    >
                        Adresse Postale
                    </label>
                    <input
                        id="Adresse_postale"
                        type="text"
                        className="mt-1 block w-full shadow-sm sm:text-sm focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 rounded-md"
                        value={data.Adresse_postale}
                        onChange={(e) =>
                            setData("Adresse_postale", e.target.value)
                        }
                        required
                    />
                    {errors.Adresse_postale && (
                        <p className="mt-2 text-sm text-red-600">
                            {errors.Adresse_postale}
                        </p>
                    )}
                </div>

                {mustVerifyEmail && user.email_verified_at === null && (
                    <div>
                        <p className="text-sm mt-2 text-gray-800">
                            Your email address is unverified.
                            <Link
                                href={route("candidats.verification.send")}
                                method="post"
                                as="button"
                                className="underline text-sm text-gray-600 hover:text-gray-900 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                            >
                                Click here to re-send the verification email.
                            </Link>
                        </p>

                        {status === "verification-link-sent" && (
                            <div className="mt-2 font-medium text-sm text-green-600">
                                A new verification link has been sent to your
                                email address.
                            </div>
                        )}
                    </div>
                )}

                <div className="flex items-center gap-4">
                    <PrimaryButton disabled={processing}>Save</PrimaryButton>

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
