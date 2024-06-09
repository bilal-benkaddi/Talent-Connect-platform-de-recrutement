import React, { useEffect } from 'react';
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayoutEntreprises";
import { Head, Link } from "@inertiajs/react";
import "bootstrap/dist/css/bootstrap.min.css";
import Container from "react-bootstrap/Container";
import Button from 'react-bootstrap/Button';
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Chart from 'chart.js/auto'; // Import Chart.js

export default function Dashboard({ entreprise, offresCount, offres }) {
    useEffect(() => {
        if (offres.length > 0) {
            const xyValues = offres.map(offre => ({ x: offre.id, y: offre.candidatures_count }));
            const ctx = document.getElementById('myChart');
            new Chart(ctx, {
                type: "scatter",
                data: {
                    datasets: [{
                        pointRadius: 4,
                        pointBackgroundColor: "rgb(0,0,255)",
                        data: xyValues
                    }]
                },
                options: {
                    plugins: {
                        legend: { display: false }
                    },
                    scales: {
                        x: {
                            type: 'linear',
                            min: 40,
                            max: 160
                        },
                        y: {
                            type: 'linear',
                            min: 6,
                            max: 16
                        }
                    }
                }
            });
        }
    }, [offres]);

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
                            {/* Display the chart */}
                            <Row>
                                <Col>
                                    <canvas id="myChart" />
                                </Col>
                            </Row>
                        </Container>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
