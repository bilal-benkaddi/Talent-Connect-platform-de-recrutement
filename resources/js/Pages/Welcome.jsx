import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link, Head } from '@inertiajs/react';
import { Card, Button } from 'react-bootstrap';

const Welcome = ({ auth, entreprises }) => {
    return (
        <>
            <Head title="Welcome" />
            <div className="relative sm:flex sm:justify-center sm:items-center min-h-screen bg-dots-darker bg-center bg-gray-100 dark:bg-dots-lighter dark:bg-gray-900 selection:bg-red-500 selection:text-white">
                <div className="sm:fixed sm:top-0 sm:right-0 p-6 text-end">
                    {auth.user ? (
                        <Link
                            href={route('dashboard')}
                            className="font-semibold text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white focus:outline focus:outline-2 focus:rounded-sm focus:outline-red-500"
                        >
                            Dashboard user
                        </Link>
                    ) : (
                        <>
                            <Link
                                href={route('login')}
                                className="font-semibold text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white focus:outline focus:outline-2 focus:rounded-sm focus:outline-red-500"
                            >
                                Log in
                            </Link>

                            <Link
                                href={route('register')}
                                className="ms-4 font-semibold text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white focus:outline focus:outline-2 focus:rounded-sm focus:outline-red-500"
                            >
                                Register
                            </Link>
                        </>
                    )}
                </div>

                {auth.user ? (
                <div className="max-w-7xl mx-auto p-6 lg:p-8">
                    {entreprises.map((entreprise) => (
                        <Card key={entreprise.id} className="mb-3">
                            <Card.Body>
                                <Card.Title>{entreprise.nom_Entreprise}</Card.Title>
                                <Card.Img src={entreprise.logo} alt={entreprise.nom_Entreprise} className="mb-3" />
                                <Card.Text>
                                    <strong>Secteur:</strong> {entreprise.secteur}
                                </Card.Text>
                                <Card.Text>
                                    <strong>Adresse:</strong> {entreprise.adresse}
                                </Card.Text>
                                <Card.Text>
                                    <strong>Code Postal:</strong> {entreprise.code_postal}
                                </Card.Text>
                                <Card.Text>
                                    <strong>Ville:</strong> {entreprise.ville}
                                </Card.Text>
                                <Card.Text>
                                    <strong>Pays:</strong> {entreprise.Pays}
                                </Card.Text>
                                <Card.Text>
                                    <strong>Téléphone:</strong> {entreprise.telephone}
                                </Card.Text>
                                <Card.Text>
                                    <strong>Email:</strong> {entreprise.email}
                                </Card.Text>
                                <Card.Text>
                                    <strong>HR Email:</strong> {entreprise.hr_email}
                                </Card.Text>
                                <Card.Text>
                                    <strong>Site Web:</strong> {entreprise.site_web}
                                </Card.Text>
                                <Card.Text>
                                    <strong>Registre de Commerce:</strong> {entreprise.registre_decommerce}
                                </Card.Text>
                                <Card.Text>
                                    <strong>HR Nom:</strong> {entreprise.hr_nom}
                                </Card.Text>
                                <Button variant="primary" href="/">View Details</Button>
                            </Card.Body>
                        </Card>
                    ))}
                </div>):(<></>)
                }
            </div>

            <style>{`
                .bg-dots-darker {
                    background-image: url("data:image/svg+xml,%3Csvg width='30' height='30' viewBox='0 0 30 30' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M1.22676 0C1.91374 0 2.45351 0.539773 2.45351 1.22676C2.45351 1.91374 1.91374 2.45351 1.22676 2.45351C0.539773 2.45351 0 1.91374 0 1.22676C0 0.539773 0.539773 0 1.22676 0Z' fill='rgba(0,0,0,0.07)'/%3E%3C/svg%3E");
                }
                @media (prefers-color-scheme: dark) {
                    .dark\\:bg-dots-lighter {
                        background-image: url("data:image/svg+xml,%3Csvg width='30' height='30' viewBox='0 0 30 30' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M1.22676 0C1.91374 0 2.45351 0.539773 2.45351 1.22676C2.45351 1.91374 1.91374 2.45351 1.22676 2.45351C0.539773 2.45351 0 1.91374 0 1.22676C0 0.539773 0.539773 0 1.22676 0Z' fill='rgba(255,255,255,0.07)'/%3E%3C/svg%3E");
                    }
                }
            `}</style>
        </>
    );
}

export default Welcome;
