import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link, Head } from "@inertiajs/react";
import { Card, Button } from "react-bootstrap";

const Welcome = ({ auth, entreprises }) => {
    return (
        <>
            <Head title="Welcome" />
            <div className="relative sm:flex sm:justify-center sm:items-center min-h-screen bg-dots-darker bg-center bg-gray-100 dark:bg-dots-lighter dark:bg-gray-900 selection:bg-red-500 selection:text-white">
                <div className="sm:fixed sm:top-0 sm:right-0 p-6 text-end">
                    {auth.user ? (
                        <Link
                            href={route("dashboard")}
                            className="font-semibold text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white focus:outline focus:outline-2 focus:rounded-sm focus:outline-red-500"
                        >
                            Dashboard user
                        </Link>
                    ) : (
                        <>
                        </>
                    )}
                </div>

                <div className="container py-5">
                    <div className="row">
                        {auth.user ? (
                            entreprises.map((entreprise) => (
                                <div key={entreprise.id} className="col-md-4 mb-4">
                                    <Card className="h-100 shadow">
                                        <Card.Img
                                            variant="top"
                                            src={entreprise.logo}
                                            alt={entreprise.nom_Entreprise}
                                            className="card-img-top"
                                        />
                                        <Card.Body>
                                            <Card.Title className="fw-bold">
                                                {entreprise.nom_Entreprise}
                                            </Card.Title>
                                            <Card.Text>
                                                <strong>Secteur:</strong>{" "}
                                                {entreprise.secteur}
                                            </Card.Text>
                                            <Card.Text>
                                                <strong>Adresse:</strong>{" "}
                                                {entreprise.adresse}, {entreprise.code_postal} {entreprise.ville}, {entreprise.Pays}
                                            </Card.Text>
                                            <Card.Text>
                                                <strong>Téléphone:</strong>{" "}
                                                {entreprise.telephone}
                                            </Card.Text>
                                            <Card.Text>
                                                <strong>Email:</strong>{" "}
                                                {entreprise.email}
                                            </Card.Text>
                                            <Card.Text>
                                                <strong>HR Email:</strong>{" "}
                                                {entreprise.hr_email}
                                            </Card.Text>
                                            <Card.Text>
                                                <strong>Site Web:</strong>{" "}
                                                <a href={entreprise.site_web} target="_blank">{entreprise.site_web}</a>
                                            </Card.Text>
                                            <Card.Text>
                                                <strong>HR Nom:</strong>{" "}
                                                {entreprise.hr_nom}
                                            </Card.Text>
                                            <Button
                                                variant="primary"
                                                href={route("entreprises.show", entreprise.id)}
                                            >
                                                Voir les détails
                                            </Button>
                                        </Card.Body>
                                    </Card>
                                </div>
                            ))
                        ) : (
                            <div className="col text-center">
                                <p className="fs-5">Connectez-vous pour accéder à votre tableau de bord.</p>
                                <Link
                                    href={route("login")}
                                    className="btn btn-primary me-2"
                                >
                                    Connexion
                                </Link>
                                <Link
                                    href={route("register")}
                                    className="btn btn-outline-primary"
                                >
                                    Inscription
                                </Link>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </>
    );
};

export default Welcome;
