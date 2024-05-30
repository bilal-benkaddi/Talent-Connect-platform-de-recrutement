import React from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayoutEntreprises";
import { Link } from '@inertiajs/react';

const OfferShow = ({ offre, entreprise, candidatures }) => {
    return (
        <AuthenticatedLayout entreprise={entreprise}>
            <Container className="my-4">
                <Row className="mb-4">
                    <Col>
                        <h1 className="display-4">{offre.titre}</h1>
                        <p className="lead">{offre.description}</p>
                    </Col>
                </Row>
                <Row>
                    <Col md={6}>
                        <Card className="mb-4">
                            <Card.Header>
                                <Card.Title>Entreprise</Card.Title>
                            </Card.Header>
                            <Card.Body>
                                <Card.Text>
                                    <strong>Nom:</strong> {entreprise.nom_Entreprise}
                                    <br />
                                    <strong>Adresse:</strong> {entreprise.adresse}
                                    <br />
                                    <strong>Ville:</strong> {entreprise.ville}
                                    <br />
                                    <strong>Pays:</strong> {entreprise.Pays}
                                    <br />
                                    <strong>Téléphone:</strong> {entreprise.telephone}
                                    <br />
                                    <strong>Email:</strong> {entreprise.email}
                                    <br />
                                    <strong>Site Web:</strong> {entreprise.site_web}
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col md={6}>
                        <Card className="mb-4">
                            <Card.Header>
                                <Card.Title>Candidatures</Card.Title>
                            </Card.Header>
                            <Card.Body>
                                {candidatures.length > 0 ? (
                                    candidatures.map((candidature) => (
                                        <Card key={candidature.id} className="mb-3">
                                            <Card.Body>
                                                <Card.Text>
                                                    <strong>Statut:</strong> {candidature.statut}
                                                    <br />
                                                    <Link
                                                        variant="primary"
                                                        href={route("candidats.show", candidature.candidat_id)}
                                                        className="btn btn-primary my-2"
                                                    >
                                                        Show Candidat {candidature.candidat_id}
                                                    </Link>
                                                    <br />
                                                    <strong>Date de soumission:</strong> {candidature.date_de_soumission}
                                                    <br />
                                                    <p className="card-text">
                                                        <strong>CV:</strong>{" "}
                                                        <a href={`/storage/${candidature.CV}`} target="_blank">
                                                            Voir le CV
                                                        </a>
                                                    </p>
                                                    <p className="card-text">
                                                        <strong>Status:</strong> {candidature.statut}
                                                    </p>
                                                    <p className="card-text">
                                                        <strong>Lettre de Motivation:</strong>{" "}
                                                        <a href={`/storage/${candidature.lettre_de_motivation}`} target="_blank">
                                                            Voir la Lettre de Motivation
                                                        </a>
                                                    </p>
                                                </Card.Text>
                                            </Card.Body>
                                        </Card>
                                    ))
                                ) : (
                                    <p className="text-muted">Aucune candidature reçue pour cette offre.</p>
                                )}
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </AuthenticatedLayout>
    );
};

export default OfferShow;
