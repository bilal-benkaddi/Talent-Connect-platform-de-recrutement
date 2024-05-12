import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Inertia } from "@inertiajs/inertia";
import { Head, Link } from "@inertiajs/react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayoutEntreprises";

const EditOfferForm = ({ entreprise, offre }) => {
    const [values, setValues] = useState({
        entreprise_id: offre.entreprise_id,
        titre: offre.titre,
        domaine: offre.domaine,
        niveau_etude: offre.niveau_etude,
        experience: offre.experience,
        nombre_poste: offre.nombre_poste,
        secteur_activite: offre.secteur_activite,
        type_emploi: offre.type_emploi,
        lieu: offre.lieu,
        description: offre.description,
        date_Publication: offre.date_Publication,
        date_limite_candidature: offre.date_limite_candidature,
        salaire: offre.salaire,
        type_contrat: offre.type_contrat,
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
        Inertia.put(route("offres.update", offre.id), values);
    };

    return (
        <AuthenticatedLayout
            entreprise={entreprise}
            header={
                <h2 className="font-semibold text-xl text-gray-800 leading-tight">
                    Edit offer {values.titre}
                </h2>
            }
        >
            <Head title="Dashboard" />

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <Form onSubmit={handleSubmit}>
                        <Form.Group controlId="entreprise_id">
                            <Form.Label>Entreprise ID</Form.Label>
                            <Form.Control
                                type="hidden"
                                name="entreprise_id"
                                value={values.entreprise_id}
                                onChange={handleChange}
                            />
                        </Form.Group>
                        <Form.Group controlId="titre">
                            <Form.Label>Titre</Form.Label>
                            <Form.Control
                                type="text"
                                name="titre"
                                value={values.titre}
                                onChange={handleChange}
                            />
                        </Form.Group>
                        <Form.Group controlId="domaine">
                            <Form.Label>Domaine</Form.Label>
                            <Form.Control
                                type="text"
                                name="domaine"
                                value={values.domaine}
                                onChange={handleChange}
                            />
                        </Form.Group>
                        <Form.Group controlId="niveau_etude">
                            <Form.Label>Niveau d'Étude</Form.Label>
                            <Form.Control
                                type="text"
                                name="niveau_etude"
                                value={values.niveau_etude}
                                onChange={handleChange}
                            />
                        </Form.Group>
                        <Form.Group controlId="experience">
                            <Form.Label>Expérience</Form.Label>
                            <Form.Control
                                type="text"
                                name="experience"
                                value={values.experience}
                                onChange={handleChange}
                            />
                        </Form.Group>
                        <Form.Group controlId="nombre_poste">
                            <Form.Label>Nombre de Postes</Form.Label>
                            <Form.Control
                                type="number"
                                name="nombre_poste"
                                value={values.nombre_poste}
                                onChange={handleChange}
                            />
                        </Form.Group>
                        <Form.Group controlId="secteur_activite">
                            <Form.Label>Secteur d'Activité</Form.Label>
                            <Form.Control
                                type="text"
                                name="secteur_activite"
                                value={values.secteur_activite}
                                onChange={handleChange}
                            />
                        </Form.Group>
                        <Form.Group controlId="type_emploi">
                            <Form.Label>Type d'Emploi</Form.Label>
                            <Form.Control
                                type="text"
                                name="type_emploi"
                                value={values.type_emploi}
                                onChange={handleChange}
                            />
                        </Form.Group>
                        <Form.Group controlId="lieu">
                            <Form.Label>Lieu</Form.Label>
                            <Form.Control
                                type="text"
                                name="lieu"
                                value={values.lieu}
                                onChange={handleChange}
                            />
                        </Form.Group>
                        <Form.Group controlId="description">
                            <Form.Label>Description</Form.Label>
                            <Form.Control
                                as="textarea"
                                rows={3}
                                name="description"
                                value={values.description}
                                onChange={handleChange}
                            />
                        </Form.Group>
                        <Form.Group controlId="date_Publication">
                            <Form.Label>Date de Publication</Form.Label>
                            <Form.Control
                                type="date"
                                name="date_Publication"
                                value={values.date_Publication}
                                onChange={handleChange}
                            />
                        </Form.Group>
                        <Form.Group controlId="date_limite_candidature">
                            <Form.Label>Date Limite de Candidature</Form.Label>
                            <Form.Control
                                type="date"
                                name="date_limite_candidature"
                                value={values.date_limite_candidature}
                                onChange={handleChange}
                            />
                        </Form.Group>
                        <Form.Group controlId="salaire">
                            <Form.Label>Salaire</Form.Label>
                            <Form.Control
                                type="number"
                                name="salaire"
                                value={values.salaire}
                                onChange={handleChange}
                            />
                        </Form.Group>
                        <Form.Group controlId="type_contrat">
                            <Form.Label>Type de Contrat</Form.Label>
                            <Form.Control
                                type="text"
                                name="type_contrat"
                                value={values.type_contrat}
                                onChange={handleChange}
                            />
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

export default EditOfferForm;
