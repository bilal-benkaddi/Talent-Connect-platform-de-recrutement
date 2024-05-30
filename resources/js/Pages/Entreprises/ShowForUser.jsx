import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button, Card, Col, Row, Form, Nav } from "react-bootstrap";
import { Link, Head } from '@inertiajs/react';
import { Inertia } from "@inertiajs/inertia";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";

const ShowForUser = ({ auth, offre, candidatures }) => {
    const [status, setStatus] = useState({});
    const [filter, setFilter] = useState('all');

    const handleChange = (id, value) => {
        setStatus((prevStatus) => ({
            ...prevStatus,
            [id]: value,
        }));
    };

    const handleSubmit = (event, id) => {
        event.preventDefault();
        Inertia.post(`/candidatures/${id}/update-status`, {
            status: status[id],
        });
    };

    const filteredCandidatures = candidatures.filter((candidature) => {
        if (filter === 'all') return true;
        return candidature.statut === filter;
    });

    return (
        <AuthenticatedLayout user={auth.user}>
            <Head title="Profile" />
            <div className="py-12">
                <Head title={offre.titre} />
                <div className="container mt-5">
                    <h1>{offre.titre}</h1>

                    <Nav variant="tabs" defaultActiveKey="all" onSelect={(selectedKey) => setFilter(selectedKey)}>
                        <Nav.Item>
                            <Nav.Link eventKey="all">All</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link eventKey="accepted">Accepted</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link eventKey="pending">Pending</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link eventKey="rejected">Rejected</Nav.Link>
                        </Nav.Item>
                    </Nav>

                    {filteredCandidatures.length > 0 ? (
                        <Row xs={1} md={3} className="g-4 mt-4">
                            {filteredCandidatures.map((candidature) => (
                                <Col key={candidature.id}>
                                    <Card>
                                        <Card.Body>
                                            <Card.Title>
                                                Candidature #{candidature.id}
                                            </Card.Title>
                                            <Card.Title>
                                                <Link
                                                    variant="primary"
                                                    href={route(
                                                        "candidats.show",
                                                        candidature.candidat_id
                                                    )}
                                                    className="btn btn-primary"
                                                >
                                                    show Candidat{" "}
                                                    {candidature.candidat_id}
                                                </Link>
                                            </Card.Title>
                                            <Card.Text>
                                                <strong>Statut:</strong>{" "}
                                                {candidature.statut}
                                            </Card.Text>
                                            <Card.Text>
                                                <strong>
                                                    Date de soumission:
                                                </strong>{" "}
                                                {candidature.date_de_soumission}
                                            </Card.Text>
                                            <Card.Text>
                                                <strong>Status:</strong>{" "}
                                                {candidature.statut}
                                            </Card.Text>

                                            <Form
                                                onSubmit={(event) =>
                                                    handleSubmit(
                                                        event,
                                                        candidature.id
                                                    )
                                                }
                                            >
                                                <Form.Group
                                                    controlId={`status-${candidature.id}`}
                                                >
                                                    <Form.Label>
                                                        Status
                                                    </Form.Label>
                                                    <Form.Control
                                                        as="select"
                                                        value={
                                                            status[
                                                                candidature.id
                                                            ] || ""
                                                        }
                                                        onChange={(e) =>
                                                            handleChange(
                                                                candidature.id,
                                                                e.target.value
                                                            )
                                                        }
                                                    >
                                                        <option
                                                            value=""
                                                            disabled
                                                        >
                                                            Select status
                                                        </option>
                                                        <option value="accepted">
                                                            accepted
                                                        </option>
                                                        <option value="pending">
                                                            pending
                                                        </option>
                                                        <option value="rejected">
                                                            rejected
                                                        </option>
                                                    </Form.Control>
                                                </Form.Group>
                                                <Button
                                                    variant="primary"
                                                    type="submit"
                                                    className="btn btn-primary"
                                                >
                                                    Update Status
                                                </Button>
                                            </Form>
                                        </Card.Body>
                                    </Card>
                                </Col>
                            ))}
                        </Row>
                    ) : (
                        <p className="mt-4">No candidatures found .</p>
                    )}
                </div>
            </div>
        </AuthenticatedLayout>
    );
};

export default ShowForUser;
