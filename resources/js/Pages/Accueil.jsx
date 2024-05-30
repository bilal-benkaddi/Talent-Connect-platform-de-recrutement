import React from "react";
import { Link, Head } from "@inertiajs/react";
import { Container, Row, Col, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

const Accueil = () => {
    return (
        <>
            <Head title="Accueil" />
            <div className="min-vh-100 d-flex justify-content-center align-items-center bg-light">
                <Container>
                    <Row className="mb-5">
                        <Col>
                            <h1 className="display-4 text-center text-primary">Bienvenue sur Talent Connect</h1>
                            <p className="lead text-center">La plateforme de recrutement ultime pour les entreprises et les candidats.</p>
                        </Col>
                    </Row>
                    <Row className="mb-5">
                        <Col>
                            <h2 className="text-center">Trouvez les meilleures opportunités</h2>
                            <p className="text-center">
                                Parcourez les offres d'emploi des entreprises les plus innovantes et postulez en quelques clics.
                            </p>
                        </Col>
                        <Col>
                            <h2 className="text-center">Trouvez les meilleurs talents</h2>
                            <p className="text-center">
                                Consultez les profils détaillés des candidats et contactez-les directement pour des opportunités de collaboration.
                            </p>
                        </Col>
                    </Row>
                    <Row>
                        <Col className="text-center">
                            <p className="text-muted">Vous êtes un candidat ou une entreprise ?</p>
                            <p>
                                <Link href={route("welcome.candidat")} className="me-3 btn btn-primary">Espace Candidats</Link>
                                <Link href={route("welcome.entreprise")} className="btn btn-secondary">Espace Entreprises</Link>
                            </p>
                        </Col>
                    </Row>
                </Container>
            </div>
        </>
    );
};

export default Accueil;
