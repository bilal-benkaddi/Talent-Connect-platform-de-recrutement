import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";

import { Card, Col, Row } from 'react-bootstrap';
import { Head } from '@inertiajs/react';

const Show = ({ entreprise, offers }) => {
    return (
        <>
            <Head title={entreprise.nom_Entreprise} />
            <div className="container mt-5">
                <h1>{entreprise.nom_Entreprise}</h1>
                <Row xs={1} md={3} className="g-4">
                    {offers.map((offer) => (
                        <Col key={offer.id}>
                            <Card>
                                <Card.Body>
                                    <Card.Title>{offer.titre}</Card.Title>
                                    <Card.Text>{offer.description}</Card.Text>
                                    <Card.Text>
                                        <strong>Date de publication:</strong> {offer.date_Publication}
                                    </Card.Text>
                                    <Card.Text>
                                        <strong>Date limite de candidature:</strong> {offer.date_limite_candidature}
                                    </Card.Text>
                                    <Card.Text>
                                        <strong>Salaire:</strong> {offer.salaire}
                                    </Card.Text>
                                    <Card.Text>
                                        <strong>Type de contrat:</strong> {offer.type_contrat}
                                    </Card.Text>
                                    <Card.Text>
                                        <strong>Lieu:</strong> {offer.lieu}
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                    ))}
                </Row>
            </div>
        </>
    );
};

export default Show;
