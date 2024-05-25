import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

const OfferShow = ({ offre, entreprise, candidatures }) => {
    return (
        <Container>
            <Row>
                <Col>
                    <h1>{offre.titre}</h1>
                    <p>{offre.description}</p>
                </Col>
            </Row>
            <Row>
                <Col>
                    <Card>
                        <Card.Body>
                            <Card.Title>Entreprise</Card.Title>
                            <Card.Text>
                                <strong>Nom:</strong>{" "}
                                {entreprise.nom_Entreprise}
                                <br />
                                <strong>Adresse:</strong> {entreprise.adresse}
                                <br />
                                <strong>Ville:</strong> {entreprise.ville}
                                <br />
                                <strong>Pays:</strong> {entreprise.Pays}
                                <br />
                                <strong>Téléphone:</strong>{" "}
                                {entreprise.telephone}
                                <br />
                                <strong>Email:</strong> {entreprise.email}
                                <br />
                                <strong>Site Web:</strong> {entreprise.site_web}
                                <br />
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col>
                    <Card>
                        <Card.Body>
                            <Card.Title>Candidatures</Card.Title>
                            {candidatures.map((candidature) => (
                                <Card key={candidature.id}>
                                    <Card.Body>
                                        <Card.Text>
                                            <strong>Statut:</strong>{" "}
                                            {candidature.statut}
                                            <br />
                                            <strong>
                                                Date de soumission:
                                            </strong>{" "}
                                            {candidature.date_de_soumission}
                                            <br />
                                            <p className="card-text">
                                                <strong>CV:</strong>{" "}
                                                <a
                                                    href={`/storage/${candidature.CV}`}
                                                    target="_blank"
                                                >
                                                    Voir le CV
                                                </a>
                                            </p>
                                            <p className="card-text">
                                                <strong>
                                                    Lettre de Motivation:
                                                </strong>{" "}
                                                <a
                                                    href={`/storage/${candidature.lettre_de_motivation}`}
                                                    target="_blank"
                                                >
                                                    Voir la Lettre de Motivation
                                                </a>
                                            </p>
                                        </Card.Text>
                                    </Card.Body>
                                </Card>
                            ))}
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
};

export default OfferShow;
