import { Link, Head } from "@inertiajs/react";
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Card from "react-bootstrap/Card";
import { useState } from "react";
import { Inertia } from "@inertiajs/inertia";

export default function Welcome({ entreprise, offers }) {
    const [currentDate, setCurrentDate] = useState(new Date());

    const deleteOffer = (id) => {
        Inertia.delete(route("offres.destroy", id));
    };

    const closeOffer = (id) => {
        Inertia.post(route("entreprises.close", id));
    };

    return (
        <>
            <Head title="Welcome" />
            <div className="relative sm:flex sm:justify-center sm:items-center min-h-screen bg-dots-darker bg-center bg-gray-100 dark:bg-dots-lighter dark:bg-gray-900 selection:bg-red-500 selection:text-white">
                <div className="sm:fixed sm:top-0 sm:right-0 p-6 text-end z-3">
                    {entreprise ? (
                        <Link
                            href={route("entreprises.dashboard")}
                            className="font-semibold text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white focus:outline focus:outline-2 focus:rounded-sm focus:outline-red-500"
                        >
                            Dashboard entreprises
                        </Link>
                    ) : (
                        <>
                            <Link
                                href={route("entreprises.login")}
                                className="font-semibold text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white focus:outline focus:outline-2 focus:rounded-sm focus:outline-red-500"
                            >
                                Log in
                            </Link>

                            <Link
                                href={route("entreprises.register")}
                                className="ms-4 font-semibold text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white focus:outline focus:outline-2 focus:rounded-sm focus:outline-red-500"
                            >
                                Register
                            </Link>
                        </>
                    )}
                </div>

                {offers !== null ? (
                    <div className="py-12">
                        <h2 className="font-semibold text-xl text-gray-800 leading-tight">
                            Your offers:
                        </h2>
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
                                                    <Card.Title>
                                                        {offer.titre}
                                                    </Card.Title>
                                                    <Card.Subtitle className="mb-2 text-muted">
                                                        Entreprise:
                                                        {offer.entreprise
                                                            ? offer.entreprise
                                                                  .nom_Entreprise
                                                            : "N/A"}
                                                    </Card.Subtitle>
                                                    <Card.Text>
                                                        <strong>
                                                            Domaine:
                                                        </strong>
                                                        {offer.domaine}
                                                        <br />
                                                        <strong>
                                                            Niveau d'Étude:
                                                        </strong>
                                                        {offer.niveau_etude}
                                                        <br />
                                                        <strong>
                                                            Expérience:
                                                        </strong>
                                                        {offer.experience}
                                                        <br />
                                                        <strong>
                                                            Nombre de Postes:
                                                        </strong>
                                                        {offer.nombre_poste}
                                                        <br />
                                                        <strong>
                                                            Secteur d'Activité:
                                                        </strong>
                                                        {offer.secteur_activite}
                                                        <br />
                                                        <strong>
                                                            Type d'Emploi:
                                                        </strong>
                                                        {offer.type_emploi}
                                                        <br />
                                                        <strong>Lieu:</strong>
                                                        {offer.lieu}
                                                        <br />
                                                        <strong>
                                                            Description:
                                                        </strong>
                                                        {offer.description.substring(
                                                            0,
                                                            25
                                                        )}
                                                        ...
                                                        <br />
                                                        <strong>
                                                            Date de Publication:
                                                        </strong>
                                                        {offer.date_Publication}
                                                        <br />
                                                        <strong>
                                                            Date Limite de
                                                            Candidature:
                                                        </strong>
                                                        {
                                                            offer.date_limite_candidature
                                                        }
                                                        <br />
                                                        <strong>
                                                            Salaire:
                                                        </strong>
                                                        {offer.salaire}
                                                        <br />
                                                        <strong>
                                                            Type de Contrat:
                                                        </strong>
                                                        {offer.type_contrat}
                                                        <br />
                                                        {differenceInDays <
                                                        0 ? (
                                                            <h4 className="text-danger">
                                                                Offer closed
                                                            </h4>
                                                        ) : (
                                                            <div className="d-grid gap-2">
                                                                <span className="text-success">
                                                                    {
                                                                        differenceInDays
                                                                    }
                                                                    {differenceInDays ===
                                                                    1
                                                                        ? " day "
                                                                        : " days "}
                                                                    left to
                                                                    apply
                                                                </span>
                                                                <button
                                                                    onClick={() => {
                                                                        closeOffer(
                                                                            offer.id
                                                                        );
                                                                    }}
                                                                    className="btn btn-warning"
                                                                >
                                                                    Close Offer
                                                                </button>
                                                            </div>
                                                        )}
                                                    </Card.Text>
                                                    <div className="d-grid gap-2">
                                                        <Link
                                                            href={route(
                                                                "offres.edit",
                                                                offer.id
                                                            )}
                                                            className="btn btn-primary"
                                                        >
                                                            Edit
                                                        </Link>
                                                        <button
                                                            className="btn btn-danger"
                                                            onClick={() => {
                                                                deleteOffer(
                                                                    offer.id
                                                                );
                                                            }}
                                                        >
                                                            Delete
                                                        </button>
                                                    </div>
                                                </Card.Body>
                                            </Card>
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                    </div>
                ) : (
                    <></>
                )}
            </div>
        </>
    );
}
