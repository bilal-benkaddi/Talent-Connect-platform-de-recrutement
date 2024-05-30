import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Head, Link } from "@inertiajs/react";
import Card from "react-bootstrap/Card";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayoutCandidats";
import { useState } from "react";
import { Inertia } from "@inertiajs/inertia";

const OfferTable = ({ offers, candidat }) => {
    const [currentDate, setCurrentDate] = useState(new Date());
    const candidature = (id) => {
        Inertia.get(route("candidatures.create",id));
    };
    return (
        <AuthenticatedLayout
            candidat={candidat}
            header={
                <h2 className="font-semibold text-xl text-gray-800 leading-tight">
                    All offers :
                </h2>
            }
        >
            <Head title="Dashboard" />

            <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                <div className="row row-cols-1 row-cols-md-3 g-4">
                    {offers.map((offer) => {
                        const offerDeadline = new Date(
                            offer.date_limite_candidature
                        );
                        const differenceInDays = Math.floor(
                            (offerDeadline - currentDate) /
                                (1000 * 60 * 60 * 24)
                        );

                        return (
                            <div key={offer.id} className="col">
                                <Card className="h-100">
                                    <Card.Body>
                                        <Card.Title>{offer.titre}</Card.Title>
                                        <Card.Subtitle className="mb-2 text-muted">
                                            Entreprise:
                                            {offer.entreprise
                                                ? offer.entreprise
                                                      .nom_Entreprise
                                                : "N/A"}
                                        </Card.Subtitle>
                                        <Card.Text>
                                            <strong>Domaine:</strong>
                                            {offer.domaine}
                                            <br />
                                            <strong>Niveau d'Étude:</strong>
                                            {offer.niveau_etude}
                                            <br />
                                            <strong>Expérience:</strong>
                                            {offer.experience}
                                            <br />
                                            <strong>Nombre de Postes:</strong>
                                            {offer.nombre_poste}
                                            <br />
                                            <strong>Secteur d'Activité:</strong>
                                            {offer.secteur_activite}
                                            <br />
                                            <strong>Type d'Emploi:</strong>
                                            {offer.type_emploi}
                                            <br />
                                            <strong>Lieu:</strong>
                                            {offer.lieu}
                                            <br />
                                            <strong>Description:</strong>
                                            {offer.description}
                                            <br />
                                            <strong>
                                                Date de Publication:
                                            </strong>
                                            {offer.date_Publication}
                                            <br />
                                            <strong>
                                                Date Limite de Candidature:
                                            </strong>
                                            {offer.date_limite_candidature}
                                            <br />
                                            <strong>Salaire:</strong>
                                            {offer.salaire}
                                            <br />
                                            <strong>Type de Contrat:</strong>
                                            {offer.type_contrat}
                                            <br />
                                        </Card.Text>
                                        {differenceInDays < 0 ? (
                                            <span className="text-danger">
                                                Offer closed
                                            </span>
                                        ) : (
                                            <div className="d-grid gap-2">
                                                <span className="text-success">
                                                    left {differenceInDays}
                                                    {differenceInDays == 1
                                                        ? " day "
                                                        : " days "}
                                                    to close offer .
                                                </span>
                                                <Link
                                                    href={route(
                                                        "candidatures.create",
                                                        offer.id
                                                    )}
                                                >
                                                    candidature create
                                                </Link>
                                                <button
                                                    onClick={() => {
                                                        candidature(offer.id);
                                                    }}
                                                    className="btn btn-warning"
                                                >
                                                    add Offer to candidature
                                                </button>
                                            </div>
                                        )}
                                    </Card.Body>
                                </Card>
                            </div>
                        );
                    })}
                </div>
            </div>
        </AuthenticatedLayout>
    );
};

export default OfferTable;
