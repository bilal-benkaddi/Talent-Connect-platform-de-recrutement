import { Link, Head } from "@inertiajs/react";
import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import ListGroup from "react-bootstrap/ListGroup";
import Translate from "./Translater";

export default function Welcome({ candidat, offers }) {
    const [currentDate, setCurrentDate] = useState(new Date());
    const [searchDomaine, setSearchDomaine] = useState("");
    const [showClosedOffers, setShowClosedOffers] = useState(false);

    const handleSearch = (e) => {
        setSearchDomaine(e.target.value);
    };

    const handleFilterByDomaine = (domaine) => {
        setSearchDomaine(domaine);
    };

    const handleToggleClosedOffers = () => {
        setShowClosedOffers(!showClosedOffers);
    };

    const uniqueDomaines = [...new Set(offers.map((offer) => offer.domaine))];

    const filteredOffers = offers
        .filter((offer) =>
            offer.domaine.toLowerCase().includes(searchDomaine.toLowerCase())
        )
        .filter(
            (offer) =>
                showClosedOffers ||
                new Date(offer.date_limite_candidature) > currentDate
        );

    return (
        <>
            <Head title="Welcome" />
            <Container fluid>
                <Row>
                    {candidat ? (
                        <Col
                            md={3}
                            className="p-3 m-1 position-sticky h-100 bg-light"
                            style={{ top: 0 }}
                        >
                            <Form.Group controlId="searchDomaine">
                                <Form.Label>Search by Domaine</Form.Label><br/>
                                <small>Enter domaine if you not udse translate</small>
                                <Form.Control
                                    type="text"
                                    placeholder="Enter domaine if you not udse translate"
                                    value={searchDomaine}
                                    onChange={handleSearch}
                                />
                            </Form.Group>
                            <ListGroup className="mt-4">
                                {uniqueDomaines.map((domaine, index) => (
                                    <ListGroup.Item
                                        key={index}
                                        action
                                        onClick={() =>
                                            handleFilterByDomaine(domaine)
                                        }
                                        className={
                                            searchDomaine === domaine
                                                ? "active"
                                                : ""
                                        }
                                    >
                                        {domaine}
                                    </ListGroup.Item>
                                ))}
                            </ListGroup>
                            <Form.Check
                                type="switch"
                                id="toggleClosedOffers"
                                label="Show Closed Offers"
                                className="mt-3"
                                checked={showClosedOffers}
                                onChange={handleToggleClosedOffers}
                            />
                            <Translate></Translate>
                        </Col>
                    ) : (
                        <></>
                    )}
                    <Col className="p-4">
                        <div className="text-end mb-4">
                            {candidat ? (
                                <Link
                                    href={route("candidats.dashboard")}
                                    className="btn btn-link text-decoration-none"
                                >
                                    Dashboard candidat
                                </Link>
                            ) : (
                                <div className="col-12 text-center">
                                    <h1 className="mb-4 display-4 text-primary">
                                        Welcome to Talent Connect
                                    </h1>
                                    <div className="mb-5 lead">
                                        <p>
                                            Talent Connect is your premier
                                            platform for finding the perfect job
                                            opportunities. Whether you're a
                                            seasoned professional or just
                                            starting out, we have the right
                                            tools and connections to help you
                                            succeed in your career journey.
                                        </p>
                                    </div>
                                    <div className="mb-4 text-muted">
                                        <p>
                                            Join thousands of candidates who
                                            have found their dream jobs through
                                            our platform. Our user-friendly
                                            interface and powerful search
                                            capabilities make job hunting
                                            effortless and efficient.
                                        </p>
                                    </div>
                                    <div className="mb-4">
                                        <p>
                                            <strong>
                                                Why Choose Talent Connect?
                                            </strong>
                                        </p>
                                        <ul className="list-unstyled mb-4">
                                            <li className="mb-2">
                                                <i className="bi bi-check-circle-fill text-success me-2"></i>
                                                Personalized job recommendations
                                                based on your profile and
                                                preferences.
                                            </li>
                                            <li className="mb-2">
                                                <i className="bi bi-check-circle-fill text-success me-2"></i>
                                                Access to exclusive job listings
                                                from top companies.
                                            </li>
                                            <li className="mb-2">
                                                <i className="bi bi-check-circle-fill text-success me-2"></i>
                                                Career resources and tips to
                                                help you stand out in the job
                                                market.
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="d-flex justify-content-center">
                                        <Link
                                            href={route("candidats.login")}
                                            className="btn btn-primary me-3 btn-lg"
                                        >
                                            Log in
                                        </Link>
                                        <Link
                                            href={route("candidats.register")}
                                            className="btn btn-secondary btn-lg"
                                        >
                                            Register
                                        </Link>
                                    </div>
                                </div>
                            )}
                        </div>

                        <Row xs={1} md={3} className="g-4">
                            {filteredOffers.map((offer) => {
                                const offerDeadline = new Date(
                                    offer.date_limite_candidature
                                );
                                const differenceInDays = Math.floor(
                                    (offerDeadline - currentDate) /
                                        (1000 * 60 * 60 * 24)
                                );

                                return (
                                    <Col key={offer.id}>
                                        <Card className="h-100 shadow-sm border-0">
                                            <Card.Body>
                                                <Card.Title className="text-primary">
                                                    {offer.titre}
                                                </Card.Title>
                                                <Card.Subtitle className="mb-2 text-muted">
                                                    Entreprise:{" "}
                                                    {offer.entreprise
                                                        ? offer.entreprise
                                                              .nom_Entreprise
                                                        : "N/A"}
                                                </Card.Subtitle>
                                                <Card.Text as="div">
                                                    <p>
                                                        <strong>
                                                            Domaine:
                                                        </strong>{" "}
                                                        {offer.domaine}
                                                    </p>
                                                    <p>
                                                        <strong>
                                                            Niveau d'Étude:
                                                        </strong>{" "}
                                                        {offer.niveau_etude}
                                                    </p>
                                                    <p>
                                                        <strong>
                                                            Expérience:
                                                        </strong>{" "}
                                                        {offer.experience}
                                                    </p>
                                                    <p>
                                                        <strong>
                                                            Nombre de Postes:
                                                        </strong>{" "}
                                                        {offer.nombre_poste}
                                                    </p>
                                                    <p>
                                                        <strong>
                                                            Secteur d'Activité:
                                                        </strong>{" "}
                                                        {offer.secteur_activite}
                                                    </p>
                                                    <p>
                                                        <strong>
                                                            Type d'Emploi:
                                                        </strong>{" "}
                                                        {offer.type_emploi}
                                                    </p>
                                                    <p>
                                                        <strong>Lieu:</strong>{" "}
                                                        {offer.lieu}
                                                    </p>
                                                    <p>
                                                        <strong>
                                                            Description:
                                                        </strong>{" "}
                                                        {offer.description.substring(
                                                            0,
                                                            20
                                                        )}
                                                        ...
                                                    </p>
                                                    <p>
                                                        <strong>
                                                            Date de Publication:
                                                        </strong>{" "}
                                                        {offer.date_Publication}
                                                    </p>
                                                    <p>
                                                        <strong>
                                                            Date Limite de
                                                            Candidature:
                                                        </strong>{" "}
                                                        {
                                                            offer.date_limite_candidature
                                                        }
                                                    </p>
                                                    <p>
                                                        <strong>
                                                            Salaire:
                                                        </strong>{" "}
                                                        {offer.salaire}
                                                    </p>
                                                    <p>
                                                        <strong>
                                                            Type de Contrat:
                                                        </strong>{" "}
                                                        {offer.type_contrat}
                                                    </p>
                                                </Card.Text>
                                                {differenceInDays < 0 ? (
                                                    <span className="text-danger">
                                                        Offer closed
                                                    </span>
                                                ) : (
                                                    <div className="d-grid gap-2">
                                                        <span className="text-success">
                                                            {differenceInDays ===
                                                            1
                                                                ? `left ${differenceInDays} day to close offer.`
                                                                : `left ${differenceInDays} days to close offer.`}
                                                        </span>
                                                        <Link
                                                            className="btn btn-warning"
                                                            href={route(
                                                                "candidatures.create",
                                                                offer.id
                                                            )}
                                                        >
                                                            Candidature create
                                                        </Link>
                                                    </div>
                                                )}
                                            </Card.Body>
                                        </Card>
                                    </Col>
                                );
                            })}
                        </Row>
                    </Col>
                </Row>
            </Container>

            <style>{`
                .bg-light {
                    background-color: #f8f9fa !important;
                }
                .bg-white {
                    background-color: #ffffff !important;
                }
                .border-end {
                    border-right: 1px solid #dee2e6 !important;
                }
                .btn-link {
                    color: #007bff;
                }
                .btn-link:hover {
                    color: #0056b3;
                    text-decoration: underline;
                }
                .list-group-item.active {
                    background-color: #007bff;
                    border-color: #007bff;
                }
                .list-group-item {
                    cursor: pointer;
                }
                .card-title {
                    color: #343a40;
                }
                .card-body {
                    background-color: #f8f9fa;
                    border-radius: 0.25rem;
                    border: 1px solid #e3e6ea;
                }
                .card {
                    transition: transform 0.2s;
                }
                .card:hover {
                    transform: scale(1.05);
                }
                .text-primary {
                    color: #007bff !important;
                }
                .text-muted {
                    color: #6c757d !important;
                }
                .text-success {
                    color: #28a745 !important;
                }
                .text-danger {
                    color: #dc3545 !important;
                }
                .shadow-sm {
                    box-shadow: 0 .125rem .25rem rgba(0, 0, 0, .075) !important;
                }
                .border-0
{
border: 0 !important;
}
.btn-warning {
background-color: #ffc107;
border-color: #ffc107;
color: #212529;
}
.btn-warning
{
background-color: #ffbb00;
border-color: #ffbb00;
color: #212529;
}
.btn-primary {
background-color: #007bff;
border-color: #007bff;
color: #fff;
}
.btn-primary
{
background-color: #0056b3;
border-color: #0056b3;
color: #fff;
}
.btn-secondary {
background-color: #6c757d;
border-color: #6c757d;
color: #fff;
}
.btn-secondary
{
background-color: #5a6268;
border-color: #545b62;
color: #fff;
}
.lead {
font-size: 1.25rem;
}
`}</style>
        </>
    );
}
