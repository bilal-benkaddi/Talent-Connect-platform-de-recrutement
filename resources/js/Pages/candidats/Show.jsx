import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link, Head } from '@inertiajs/react';
import { Card, Col, Row, Container } from "react-bootstrap";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";

const Show = ({ auth, candidat, profile }) => {
    return (
        <AuthenticatedLayout user={auth.user}>
            <Head title={`Candidat ${candidat.nom}`} />
            <div className="py-12">
                <Container className="mt-5">
                    <h1>Candidat: {candidat.nom}</h1>
                    {profile ? (
                        <Row className="mt-4">
                            <Col md={4}>
                                <Card>
                                    <Card.Img
                                        variant="top"
                                        src={`/storage/${profile.photo}`}
                                        alt="Profile Photo"
                                    />
                                    <Card.Body>
                                        <Card.Title>
                                            Personal Information
                                        </Card.Title>
                                        <Card.Text>
                                            <strong>CIN:</strong> {profile.cin}
                                        </Card.Text>
                                        <Card.Text>
                                            <strong>Niveau Etude:</strong>{" "}
                                            {profile.niveau_etude}
                                        </Card.Text>
                                    </Card.Body>
                                </Card>
                            </Col>
                            <Col md={8}>
                                <Card className="mb-4">
                                    <Card.Body>
                                        <Card.Title>Certificate</Card.Title>
                                        <Card.Text>
                                            <strong>Name:</strong>{" "}
                                            {profile.nom_certificate}
                                        </Card.Text>
                                        <Card.Text>
                                            <strong>Date Obtention:</strong>{" "}
                                            {
                                                profile.date_obtenation_certificate
                                            }
                                        </Card.Text>
                                    </Card.Body>
                                </Card>
                                <Card className="mb-4">
                                    <Card.Body>
                                        <Card.Title>Competence</Card.Title>
                                        <Card.Text>
                                            {profile.competance}
                                        </Card.Text>
                                    </Card.Body>
                                </Card>
                                <Card className="mb-4">
                                    <Card.Body>
                                        <Card.Title>Diploma</Card.Title>
                                        <Card.Text>
                                            <strong>Diploma:</strong>{" "}
                                            {profile.diplome}
                                        </Card.Text>
                                        <Card.Text>
                                            <strong>Etablissement:</strong>{" "}
                                            {profile.etablissement}
                                        </Card.Text>
                                        <Card.Text>
                                            <strong>Date Obtention:</strong>{" "}
                                            {profile.date_obtenation_diplome}
                                        </Card.Text>
                                    </Card.Body>
                                </Card>
                                <Card className="mb-4">
                                    <Card.Body>
                                        <Card.Title>Experience</Card.Title>
                                        <Card.Text>
                                            <strong>Date Debut:</strong>{" "}
                                            {profile.date_debut_experience}
                                        </Card.Text>
                                        <Card.Text>
                                            <strong>Date Fin:</strong>{" "}
                                            {profile.date_fin_experience}
                                        </Card.Text>
                                        <Card.Text>
                                            <strong>Description:</strong>{" "}
                                            {profile.description_experience}
                                        </Card.Text>
                                    </Card.Body>
                                </Card>
                                <Card className="mb-4">
                                    <Card.Body>
                                        <Card.Title>Language</Card.Title>
                                        <Card.Text>
                                            <strong>Langue:</strong>{" "}
                                            {profile.langue}
                                        </Card.Text>
                                        <Card.Text>
                                            <strong>Niveau:</strong>{" "}
                                            {profile.niveau_langue}
                                        </Card.Text>
                                    </Card.Body>
                                </Card>
                            </Col>
                        </Row>
                    ) : (
                        <p>
                            Profile information is not available for this
                            candidate.
                        </p>
                    )}
                </Container>
            </div>
        </AuthenticatedLayout>
    );
};

export default Show;
