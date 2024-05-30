import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button, Card, Col, Row } from "react-bootstrap";
import {Link , Head } from "@inertiajs/react";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";

const Show = ({ user,entreprise, offers }) => {
    return (
        <AuthenticatedLayout
            entreprise={entreprise}
            user={user}
            header={
                <h2 className="font-semibold text-xl text-gray-800 leading-tight">
                    Dashboard
                </h2>
            }
        >
            <Head title={entreprise.nom_Entreprise} />            
            <div className="container mt-5">
                <h1>{entreprise.nom_Entreprise}</h1>
                <Row xs={1} md={3} className="g-4">
                    {offers.map((offer) => (
                        <Col key={offer.id}>
                            <Card>
                                <Card.Body>
                                    <Card.Title>{offer.titre}</Card.Title>
                                    <Card.Text>
                                        <strong>Description:</strong>
                                        {offer.description.substring(0, 25)}...
                                    </Card.Text>
                                    <Card.Text>
                                        <strong>Date de publication :</strong>{" "}
                                        {offer.date_Publication}
                                    </Card.Text>
                                    <Card.Text>
                                        <strong>
                                            Date limite de candidature:
                                        </strong>{" "}
                                        {offer.date_limite_candidature}
                                    </Card.Text>
                                    <Card.Text>
                                        <strong>Salaire:</strong>{" "}
                                        {offer.salaire}
                                    </Card.Text>
                                    <Card.Text>
                                        <strong>Type de contrat:</strong>{" "}
                                        {offer.type_contrat}
                                    </Card.Text>
                                    <Card.Text>
                                        <strong>Lieu:</strong> {offer.lieu}
                                    </Card.Text>
                                </Card.Body>
                                <Link
                                className="btn btn-primary"
                                    variant="primary"
                                    href={route(
                                        "entreprises.candidatures",
                                        offer.id
                                    )}
                                >
                                    View Details
                                </Link>
                            </Card>
                        </Col>
                    ))}
                </Row>
            </div>
        </AuthenticatedLayout>
    );
};

export default Show;
