import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import { Card, Col, Row } from 'react-bootstrap';
import { Head } from '@inertiajs/react';

const ShowForUser = ({ offre, candidatures }) => {
    return (
        <>
            <Head title={offre.titre} />
            <div className="container mt-5">
                <h1>{offre.titre}</h1>
                {candidatures.length > 0 ? (
                    <Row xs={1} md={3} className="g-4">
                        {candidatures.map((candidature) => (
                            <Col key={candidature.id}>
                                <Card>
                                    <Card.Body>
                                        <Card.Title>Candidature #{candidature.id}</Card.Title>
                                        <Card.Text>
                                            <strong>Statut:</strong> {candidature.statut}
                                        </Card.Text>
                                        <Card.Text>
                                            <strong>Date de soumission:</strong> {candidature.date_de_soumission}
                                        </Card.Text>
                                    </Card.Body>
                                </Card>
                            </Col>
                        ))}
                    </Row>
                ) : (
                    <p>No candidatures found for this offer.</p>
                )}
            </div>
        </>
    );
};

export default ShowForUser;
