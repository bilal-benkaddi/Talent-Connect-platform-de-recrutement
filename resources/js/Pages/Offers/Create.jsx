import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Inertia } from "@inertiajs/inertia";
import { Head, Link, usePage } from "@inertiajs/react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayoutEntreprises";

const CreateOfferForm = ({ entreprise }) => {
    const { errors } = usePage().props;
    const [values, setValues] = useState({
        titre: "",
        domaine: "",
        niveau_etude: "",
        experience: "",
        nombre_poste: "",
        secteur_activite: "",
        type_emploi: "",
        lieu: "",
        description: "",
        date_Publication: "",
        date_limite_candidature: "",
        salaire: "",
        type_contrat: "",
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setValues((prevValues) => ({
            ...prevValues,
            [name]: value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        Inertia.post(route("offres.store"), values);
    };

    return (
        <AuthenticatedLayout
            entreprise={entreprise}
            header={
                <h2 className="font-semibold text-xl text-gray-800 leading-tight">
                    Create offer
                </h2>
            }
        >
            <Head title="Dashboard" />

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <Form onSubmit={handleSubmit}>
                        <Form.Group controlId="titre">
                            <Form.Label>Titre</Form.Label>
                            <Form.Control
                                type="text"
                                name="titre"
                                defaultValue={values.titre}
                                onChange={handleChange}
                                isInvalid={!!errors.titre}
                            />
                            {errors.titre && <Form.Control.Feedback type="invalid">{errors.titre}</Form.Control.Feedback>}
                        </Form.Group>
                        <Form.Group controlId="domaine">
                            <Form.Label>Domaine</Form.Label>
                            <Form.Control
                                type="text"
                                name="domaine"
                                defaultValue={values.domaine}
                                onChange={handleChange}
                                isInvalid={!!errors.domaine}
                            />
                            {errors.domaine && <Form.Control.Feedback type="invalid">{errors.domaine}</Form.Control.Feedback>}
                        </Form.Group>
                        <Form.Group controlId="niveau_etude">
                            <Form.Label>Niveau d'Étude</Form.Label>
                            <Form.Control
                                type="text"
                                name="niveau_etude"
                                defaultValue={values.niveau_etude}
                                onChange={handleChange}
                                isInvalid={!!errors.niveau_etude}
                            />
                            {errors.niveau_etude && <Form.Control.Feedback type="invalid">{errors.niveau_etude}</Form.Control.Feedback>}
                        </Form.Group>
                        <Form.Group controlId="experience">
                            <Form.Label>Expérience</Form.Label>
                            <Form.Control
                                type="text"
                                name="experience"
                                defaultValue={values.experience}
                                onChange={handleChange}
                                isInvalid={!!errors.experience}
                            />
                            {errors.experience && <Form.Control.Feedback type="invalid">{errors.experience}</Form.Control.Feedback>}
                        </Form.Group>
                        <Form.Group controlId="nombre_poste">
                            <Form.Label>Nombre de Postes</Form.Label>
                            <Form.Control
                                type="number"
                                name="nombre_poste"
                                defaultValue={values.nombre_poste}
                                onChange={handleChange}
                                isInvalid={!!errors.nombre_poste}
                            />
                            {errors.nombre_poste && <Form.Control.Feedback type="invalid">{errors.nombre_poste}</Form.Control.Feedback>}
                        </Form.Group>
                        <Form.Group controlId="secteur_activite">
                            <Form.Label>Secteur d'Activité</Form.Label>
                            <Form.Control
                                type="text"
                                name="secteur_activite"
                                defaultValue={values.secteur_activite}
                                onChange={handleChange}
                                isInvalid={!!errors.secteur_activite}
                            />
                            {errors.secteur_activite && <Form.Control.Feedback type="invalid">{errors.secteur_activite}</Form.Control.Feedback>}
                        </Form.Group>
                        <Form.Group controlId="type_emploi">
                            <Form.Label>Type d'Emploi</Form.Label>
                            <Form.Control
                                type="text"
                                name="type_emploi"
                                defaultValue={values.type_emploi}
                                onChange={handleChange}
                                isInvalid={!!errors.type_emploi}
                            />
                            {errors.type_emploi && <Form.Control.Feedback type="invalid">{errors.type_emploi}</Form.Control.Feedback>}
                        </Form.Group>
                        <Form.Group controlId="lieu">
                            <Form.Label>Lieu</Form.Label>
                            <Form.Control
                                type="text"
                                name="lieu"
                                defaultValue={values.lieu}
                                onChange={handleChange}
                                isInvalid={!!errors.lieu}
                            />
                            {errors.lieu && <Form.Control.Feedback type="invalid">{errors.lieu}</Form.Control.Feedback>}
                        </Form.Group>
                        <Form.Group controlId="description">
                            <Form.Label>Description</Form.Label>
                            <Form.Control
                                as="textarea"
                                rows={3}
                                name="description"
                                defaultValue={values.description}
                                onChange={handleChange}
                                isInvalid={!!errors.description}
                            />
                            {errors.description && <Form.Control.Feedback type="invalid">{errors.description}</Form.Control.Feedback>}
                        </Form.Group>
                        <Form.Group controlId="date_Publication">
                            <Form.Label>Date de Publication</Form.Label>
                            <Form.Control
                                type="date"
                                name="date_Publication"
                                defaultValue={values.date_Publication}
                                onChange={handleChange}
                                isInvalid={!!errors.date_Publication}
                            />
                            {errors.date_Publication && <Form.Control.Feedback type="invalid">{errors.date_Publication}</Form.Control.Feedback>}
                        </Form.Group>
                        <Form.Group controlId="date_limite_candidature">
                            <Form.Label>Date Limite de Candidature</Form.Label>
                            <Form.Control
                                type="date"
                                name="date_limite_candidature"
                                defaultValue={values.date_limite_candidature}
                                onChange={handleChange}
                                isInvalid={!!errors.date_limite_candidature}
                            />
                            {errors.date_limite_candidature && <Form.Control.Feedback type="invalid">{errors.date_limite_candidature}</Form.Control.Feedback>}
                        </Form.Group>
                        <Form.Group controlId="salaire">
                            <Form.Label>Salaire</Form.Label>
                            <Form.Control
                                type="number"
                                name="salaire"
                                defaultValue={values.salaire}
                                onChange={handleChange}
                                isInvalid={!!errors.salaire}
                            />
                            {errors.salaire && <Form.Control.Feedback type="invalid">{errors.salaire}</Form.Control.Feedback>}
                        </Form.Group>
                        <Form.Group controlId="type_contrat">
                            <Form.Label>Type de Contrat</Form.Label>
                            <Form.Control
                                type="text"
                                name="type_contrat"
                                defaultValue={values.type_contrat}
                                onChange={handleChange}
                                isInvalid={!!errors.type_contrat}
                            />
                            {errors.type_contrat && <Form.Control.Feedback type="invalid">{errors.type_contrat}</Form.Control.Feedback>}
                        </Form.Group>
                        <Button variant="primary" type="submit">
                            Submit
                        </Button>
                        <Link
                            href={route("offres.index")}
                            className="btn btn-secondary ml-2"
                        >
                            Cancel
                        </Link>
                    </Form>
                </div>
            </div>
        </AuthenticatedLayout>
    );
};

export default CreateOfferForm;
