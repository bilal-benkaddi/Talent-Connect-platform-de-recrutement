import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Head, Link } from "@inertiajs/react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayoutCandidats";

const ShowCandidature = ({ candidature, offre ,candidat}) => {
    console.log("offre:", offre);
    console.log("candidature:", candidature);

    return (
        <AuthenticatedLayout candidat={candidat}>
            <Head title="Détails de la candidature" />

            <div className="container mt-4">
                <h1>Détails de la candidature</h1>
                <div className="card mt-4">
                    <div className="card-body">
                        <h5 className="card-title">Candidature</h5>
                        <p className="card-text"><strong>ID:</strong> {candidature.id}</p>
                        <p className="card-text"><strong>Date de Soumission:</strong> {candidature.date_de_soumission}</p>
                        <p className="card-text"><strong>Statut:</strong> {candidature.statut}</p>
                        <p className="card-text"><strong>CV:</strong> <a href={`/storage/${candidature.CV}`} target="_blank">Voir le CV</a></p>
                        <p className="card-text"><strong>Lettre de Motivation:</strong> <a href={`/storage/${candidature.lettre_de_motivation}`} target="_blank">Voir la Lettre de Motivation</a></p>
                    </div>
                </div>

                <div className="card mt-4">
                    <div className="card-body">
                        <h5 className="card-title">Offre</h5>
                        <p className="card-text"><strong>ID:</strong> {offre.id}</p>
                        <p className="card-text"><strong>Titre:</strong> {offre.titre}</p>
                        <p className="card-text"><strong>Domaine:</strong> {offre.domaine}</p>
                        <p className="card-text"><strong>Niveau d'Étude:</strong> {offre.niveau_etude}</p>
                        <p className="card-text"><strong>Expérience:</strong> {offre.experience}</p>
                        <p className="card-text"><strong>Nombre de Postes:</strong> {offre.nombre_poste}</p>
                        <p className="card-text"><strong>Lieu:</strong> {offre.lieu}</p>
                        <p className="card-text"><strong>Description:</strong> {offre.description}</p>
                        <p className="card-text"><strong>Date de Publication:</strong> {offre.date_Publication}</p>
                        <p className="card-text"><strong>Date Limite de Candidature:</strong> {offre.date_limite_candidature}</p>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
};

export default ShowCandidature;
