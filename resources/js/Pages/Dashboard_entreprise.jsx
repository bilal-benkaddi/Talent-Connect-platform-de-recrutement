import AuthenticatedLayout from "@/Layouts/AuthenticatedLayoutEntreprises";
import { Head, Link } from "@inertiajs/react";
import "bootstrap/dist/css/bootstrap.min.css";
import Container from "react-bootstrap/Container";
import Button from 'react-bootstrap/Button';
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export default function Dashboard({ entreprise }) {
    return (
        <AuthenticatedLayout
            entreprise={entreprise}
            header={
                <h2 className="font-semibold text-xl text-gray-800 leading-tight">
                    Dashboard
                </h2>
            }
        >
            <Head title="Dashboard" />

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="p-6 text-gray-900">
                            hello {entreprise.email}!
                        </div>
                        <div className="p-6 text-gray-900">
                            You're logged in!
                        </div>
                        <Container>
                            <Row>
                                <Col>
                                    <Link href={route("offres.create")}>
                                    <Button variant="outline-primary">Add New Offer</Button>
                                    </Link>
                                </Col>
                                <Col>
                                    <Link href={route("offres.index")}>
                                    <Button variant="outline-success">Show All Offers</Button>
                                        
                                    </Link>
                                </Col>
                            </Row>
                        </Container>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
