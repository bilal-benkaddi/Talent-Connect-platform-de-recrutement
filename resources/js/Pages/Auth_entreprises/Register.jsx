import { useEffect } from "react";
import GuestLayout from "@/Layouts/GuestLayout";
import InputError from "@/Components/InputError";
import InputLabel from "@/Components/InputLabel";
import PrimaryButton from "@/Components/PrimaryButton";
import TextInput from "@/Components/TextInput";
import { Head, Link, useForm } from "@inertiajs/react";

export default function Register() {
    const { data, setData, post, processing, errors, reset } = useForm({
        nom_Entreprise: "",
        logo:null,
        secteur: "",
        adresse: "",
        code_postal: "",
        ville: "",
        Pays: "",
        telephone: "",
        email: "",
        hr_email:"",
        password: "",
        site_web: "",
        registre_decommerce: null,
        hr_nom: "",
    });

    useEffect(() => {
        return () => {
            reset("password", "password_confirmation");
        };
    }, []);

    const submit = (e) => {
        e.preventDefault();

        post(route("entreprises.register"));
    };

    return (
        <GuestLayout>
            <Head title="Register" />

            <form onSubmit={submit}>
                <div>
                    <InputLabel htmlFor="nom_Entreprise" value="Nom Entreprise" />
                    <TextInput
                        id="nom_Entreprise"
                        name="nom_Entreprise"
                        value={data.nom_Entreprise}
                        className="mt-1 block w-full"
                        autoComplete="nom_Entreprise"
                        isFocused={true}
                        onChange={(e) => setData("nom_Entreprise", e.target.value)}
                        required
                    />
                    <InputError message={errors.nom_Entreprise} className="mt-2" />
                </div>

                <div>
                    <InputLabel htmlFor="secteur" value="Secteur" />
                    <TextInput
                        id="secteur"
                        name="secteur"
                        value={data.secteur}
                        className="mt-1 block w-full"
                        autoComplete="secteur"
                        onChange={(e) => setData("secteur", e.target.value)}
                        required
                    />
                    <InputError message={errors.secteur} className="mt-2" />
                </div>

                <div>
                    <InputLabel htmlFor="adresse" value="Adresse" />
                    <TextInput
                        id="adresse"
                        name="adresse"
                        value={data.adresse}
                        className="mt-1 block w-full"
                        autoComplete="adresse"
                        onChange={(e) => setData("adresse", e.target.value)}
                        required
                    />
                    <InputError message={errors.adresse} className="mt-2" />
                </div>

                <div>
                    <InputLabel htmlFor="code_postal" value="Code Postal" />
                    <TextInput
                        id="code_postal"
                        name="code_postal"
                        value={data.code_postal}
                        className="mt-1 block w-full"
                        autoComplete="code_postal"
                        onChange={(e) => setData("code_postal", e.target.value)}
                        required
                    />
                    <InputError message={errors.code_postal} className="mt-2" />
                </div>

                <div>
                    <InputLabel htmlFor="ville" value="Ville" />
                    <TextInput
                        id="ville"
                        name="ville"
                        value={data.ville}
                        className="mt-1 block w-full"
                        autoComplete="ville"
                        onChange={(e) => setData("ville", e.target.value)}
                        required
                    />
                    <InputError message={errors.ville} className="mt-2" />
                </div>

                <div>
                    <InputLabel htmlFor="Pays" value="Pays" />
                    <TextInput
                        id="Pays"
                        name="Pays"
                        value={data.Pays}
                        className="mt-1 block w-full"
                        autoComplete="Pays"
                        onChange={(e) => setData("Pays", e.target.value)}
                        required
                    />
                    <InputError message={errors.Pays} className="mt-2" />
                </div>

                <div>
                    <InputLabel htmlFor="telephone" value="Telephone" />
                    <TextInput
                        id="telephone"
                        name="telephone"
                        value={data.telephone}
                        className="mt-1 block w-full"
                        autoComplete="telephone"
                        onChange={(e) => setData("telephone", e.target.value)}
                        required
                    />
                    <InputError message={errors.telephone} className="mt-2" />
                </div>

                <div>
                    <InputLabel htmlFor="email" value="Email" />
                    <TextInput
                        id="email"
                        name="email"
                        value={data.email}
                        className="mt-1 block w-full"
                        autoComplete="email"
                        onChange={(e) => setData("email", e.target.value)}
                        required
                    />
                    <InputError message={errors.email} className="mt-2" />
                </div>

                <div>
                    <InputLabel htmlFor="hr_email" value="HR Email" />
                    <TextInput
                        id="email"
                        name="hr_email"
                        value={data.hr_email}
                        className="mt-1 block w-full"
                        autoComplete="email"
                        onChange={(e) => setData("hr_email", e.target.value)}
                        required
                    />
                    <InputError message={errors.email} className="mt-2" />
                </div>

                <div>
                    <InputLabel htmlFor="password" value="Password" />
                    <TextInput
                        id="password"
                        type="password"
                        name="password"
                        value={data.password}
                        className="mt-1 block w-full"
                        autoComplete="new-password"
                        onChange={(e) => setData("password", e.target.value)}
                        required
                    />
                    <InputError message={errors.password} className="mt-2" />
                </div>

                <div>
                    <InputLabel htmlFor="site_web" value="Site Web" />
                    <TextInput
                        id="site_web"
                        name="site_web"
                        value={data.site_web}
                        className="mt-1 block w-full"
                        autoComplete="site_web"
                        onChange={(e) => setData("site_web", e.target.value)}
                    />
                    <InputError message={errors.site_web} className="mt-2" />
                </div>

                <div>
                    <InputLabel htmlFor="registre_decommerce" value="Registre de Commerce (PDF)" />
                    <TextInput
                        id="registre_decommerce"
                        type="file"
                        name="registre_decommerce"
                        className="mt-1 block w-full"
                        onChange={(e) => setData("registre_decommerce", e.target.files[0])}
                        required
                    />
                    <InputError message={errors.registre_decommerce} className="mt-2" />
                </div>

                <div>
                    <InputLabel htmlFor="logo" value=" Logo" />
                    <TextInput
                        id="logo"
                        type="file"
                        name="logo"
                        className="mt-1 block w-full"
                        onChange={(e) => setData("logo", e.target.files[0])}
                        required
                    />
                    <InputError message={errors.logo} className="mt-2" />
                </div>

                <div>
                    <InputLabel htmlFor="hr_nom" value="HR Nom" />
                    <TextInput
                        id="hr_nom"
                        name="hr_nom"
                        value={data.hr_nom}
                        className="mt-1 block w-full"
                        autoComplete="hr_nom"
                        onChange={(e) => setData("hr_nom", e.target.value)}
                        required
                    />
                    <InputError message={errors.hr_nom} className="mt-2" />
                </div>
                <div className="flex items-center justify-end mt-4">
                    <Link
                        href={route("entreprises.login")}
                        className="underline text-sm text-gray-600 hover:text-gray-900 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                    >
                        Already registered?
                    </Link>

                    <PrimaryButton className="ms-4" disabled={processing}>
                        Register
                    </PrimaryButton>
                </div>
            </form>
        </GuestLayout>
    );
}
