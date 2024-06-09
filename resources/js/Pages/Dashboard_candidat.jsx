import AuthenticatedLayout from "@/Layouts/AuthenticatedLayoutCandidats";
import { Head, Link } from "@inertiajs/react";
import { useState } from "react";
import { Container, Row, Col, Card, Button, Nav } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

export default function Dashboard({ candidat, candidatures }) {
    const [filter, setFilter] = useState("all");

    const filteredCandidatures = candidatures.filter((candidature) => {
        if (filter === "all") return true;
        return candidature.statut === filter;
    });

    return (
        <AuthenticatedLayout candidat={candidat} >
            <Head title="Dashboard" />

            <Container className="bg-white">
                <Row className="justify-content-center">
                    <Col lg={8}>
                        <h1 className="text-center">Your Candidatures</h1>
                    </Col>
                </Row>

                <Nav variant="tabs" defaultActiveKey="all"  className=" justify-content-start bg-white">
                    <Nav.Item>
                        <Nav.Link 
                            eventKey="all" 
                            active={filter === "all"} 
                            onClick={() => setFilter("all")}
                        >
                            All
                        </Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link 
                            eventKey="pending" 
                            active={filter === "pending"} 
                            onClick={() => setFilter("pending")}
                        >
                            Pending
                        </Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link 
                            eventKey="accepted" 
                            active={filter === "accepted"} 
                            onClick={() => setFilter("accepted")}
                        >
                            Accepted
                        </Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link 
                            eventKey="rejected" 
                            active={filter === "rejected"} 
                            onClick={() => setFilter("rejected")}
                        >
                            Rejected
                        </Nav.Link>
                    </Nav.Item>
                </Nav>

                <Row  className="bg-white">
                    {filteredCandidatures.length > 0 ? (
                        filteredCandidatures.map((candidature) => (
                            <Col key={candidature.id} sm={12} md={6} lg={4} className="bg-white">
                                <Card className={`h-100 bg-${getStatusColor(candidature.statut)} text-white`}>
                                    <Card.Body>
                                        <Card.Title>
                                            Date de soumission: {new Date(candidature.date_de_soumission).toLocaleDateString()}
                                        </Card.Title>
                                        <Card.Text>
                                            Date de réponse: {new Date(candidature.updated_at).toLocaleDateString()}
                                        </Card.Text>
                                        <Card.Text>
                                            Statut: {candidature.statut}
                                        </Card.Text>
                                        <Button variant="light" as={Link} href={route("candidatures.show", candidature.id)}>
                                            Détails de la candidature
                                        </Button>
                                    </Card.Body>
                                </Card>
                            </Col>
                        ))
                    ) : (
                        <Col>
                            <p className="text-center">No candidatures available.</p>
                        </Col>
                    )}
                </Row>
            </Container>
        </AuthenticatedLayout>
    );
}

function getStatusColor(status) {
    switch (status) {
        case 'accepted':
            return 'info'; // light blue
        case 'rejected':
            return 'danger'; // red
        case 'pending':
            return 'warning'; // yellow
        default:
            return 'light'; // gray
    }
}
