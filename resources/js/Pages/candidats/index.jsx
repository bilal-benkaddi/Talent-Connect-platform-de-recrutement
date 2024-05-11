import React, { useEffect } from "react";
import {
    Card,
    ListGroup,
    ListGroupItem,
    Container,
    Row,
    Col,
} from "react-bootstrap";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayoutCandidats";

const Index = ({ candidats, candidat }) => {
    useEffect(() => {
        console.log("candidats", candidats);
    }, []);

    let rows = [];
    for (let i = 0; i < candidats.length; i += 3) {
        let rowCols = candidats.slice(i, i + 3).map((candidat) => (
            <Col key={candidat.email} sm={4} className="mb-4">
                <Card>
                    <Card.Img variant="top" src={candidat.image} />
                    <Card.Body>
                        <Card.Title>
                            {candidat.nom} {candidat.prenom}
                        </Card.Title>
                    </Card.Body>
                    <ListGroup className="list-group-flush">
                        <ListGroupItem>
                            Date de Naissance: {candidat.date_de_naissance}
                        </ListGroupItem>
                        <ListGroupItem>Email: {candidat.email}</ListGroupItem>
                        <ListGroupItem>
                            Téléphone: {candidat.telephone}
                        </ListGroupItem>
                        <ListGroupItem>
                            Adresse Postale: {candidat.Adresse_postale}
                        </ListGroupItem>
                    </ListGroup>
                </Card>
            </Col>
        ));
        rows.push(<Row key={i}>{rowCols}</Row>);
    }

    return (
        <AuthenticatedLayout
            candidat={candidat}
            header={
                <h2 className="font-semibold text-xl text-gray-800 leading-tight">
                    Candidat index
                </h2>
            }
        >
            <Container>{rows}</Container>
        </AuthenticatedLayout>
    );
};

export default Index;
