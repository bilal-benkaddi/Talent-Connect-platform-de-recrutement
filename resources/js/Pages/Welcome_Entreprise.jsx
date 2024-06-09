import { Link, Head } from "@inertiajs/react";
import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Card from "react-bootstrap/Card";
import { Inertia } from "@inertiajs/inertia";

export default function Welcome({ entreprise, offers }) {
    const [currentDate, setCurrentDate] = useState(new Date());
    const [filterClosed, setFilterClosed] = useState(false);
    const [filterMonth, setFilterMonth] = useState(null);

    const deleteOffer = (id) => {
        Inertia.delete(route("offres.destroy", id));
    };

    const closeOffer = (id) => {
        Inertia.post(route("entreprises.close", id));
    };

    const filterOffers = (offer) => {
        if (
            filterClosed &&
            new Date(offer.date_limite_candidature) > currentDate
        ) {
            return false;
        }
        if (filterMonth !== null) {
            const offerDeadline = new Date(offer.date_limite_candidature);
            const deadlineMonth = offerDeadline.getMonth();
            const deadlineYear = offerDeadline.getFullYear();
            const currentMonth = currentDate.getMonth();
            const currentYear = currentDate.getFullYear();

            if (deadlineMonth !== filterMonth || deadlineYear !== currentYear) {
                return false;
            }
        }
        return true;
    };

    return (
        <>
            <Head title="Welcome" />
            <div className="relative min-h-screen bg-dots-darker bg-center bg-gray-100 dark:bg-dots-lighter dark:bg-gray-900 selection:bg-red-500 selection:text-white">
                <div className="sm:fixed sm:top-0 sm:right-0 p-6 text-end z-3">
                    {entreprise ? (
                        <Link
                            href={route("entreprises.dashboard")}
                            className="font-semibold text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white focus:outline focus:outline-2 focus:rounded-sm focus:outline-red-500"
                        >
                            Dashboard entreprises
                        </Link>
                    ) : (
                        <div className="col-12 text-center">
                            <h1 className="mb-4 display-4 text-primary">
                                Welcome to Talent Connect
                            </h1>
                            <p className="mb-5 lead">
                                Talent Connect is your premier platform for
                                finding the perfect job opportunities. Whether
                                you're a seasoned professional or just starting
                                out, we have the right tools and connections to
                                help you succeed in your career journey.
                            </p>
                            <p className="mb-4 text-muted">
                                Join thousands of candidates who have found
                                their dream jobs through our platform. Our
                                user-friendly interface and powerful search
                                capabilities make job hunting effortless and
                                efficient.
                            </p>
                            <p className="mb-4">
                                <strong>Why Choose Talent Connect?</strong>
                            </p>
                            <ul className="list-unstyled mb-4">
                                <li className="mb-2">
                                    <i className="bi bi-check-circle-fill text-success me-2"></i>
                                    Personalized job recommendations based on
                                    your profile and preferences.
                                </li>
                                <li className="mb-2">
                                    <i className="bi bi-check-circle-fill text-success me-2"></i>
                                    Access to exclusive job listings from top
                                    companies.
                                </li>
                                <li className="mb-2">
                                    <i className="bi bi-check-circle-fill text-success me-2"></i>
                                    Career resources and tips to help you stand
                                    out in the job market.
                                </li>
                            </ul>
                            <div className="d-flex justify-content-center">
                                <Link
                                    href={route("entreprises.login")}
                                    className="btn btn-primary me-3 btn-lg font-semibold text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white focus:outline focus:outline-2 focus:rounded-sm focus:outline-red-500"
                                >
                                    Log in
                                </Link>
                                <Link
                                    href={route("entreprises.register")}
                                    className="btn btn-secondary me-3 btn-lg ms-4 font-semibold text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white focus:outline focus:outline-2 focus:rounded-sm focus:outline-red-500"
                                >
                                    Register
                                </Link>
                            </div>
                        </div>
                    )}
                </div>

                {offers !== null ? (
                    <div className="container py-12">
                        <div className="mb-3">
                            <label
                                htmlFor="filterClosed"
                                className="form-label"
                            >
                                Filter by Closed Offers:
                            </label>
                            <input
                                type="checkbox"
                                id="filterClosed"
                                checked={filterClosed}
                                onChange={(e) =>
                                    setFilterClosed(e.target.checked)
                                }
                            />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="filterMonth" className="form-label">
                                Filter by Month:
                            </label>
                            <select
                                id="filterMonth"
                                className="form-select"
                                value={filterMonth}
                                onChange={(e) =>
                                    setFilterMonth(parseInt(e.target.value))
                                }
                            >
                                <option value="">All</option>
                                {[
                                    ...new Set(
                                        offers.map((offer) =>
                                            new Date(
                                                offer.date_limite_candidature
                                            ).getMonth()
                                        )
                                    ),
                                ].map((month) => (
                                    <option key={month} value={month}>
                                        {new Date(0, month).toLocaleString(
                                            "default",
                                            { month: "long" }
                                        )}
                                    </option>
                                ))}
                            </select>
                        </div>
                        <h2 className="font-semibold text-xl text-gray-800 leading-tight mb-4">
                            Your offers:
                        </h2>
                        <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
                            {offers.filter(filterOffers).map((offer) => {
                                const offerDeadline = new Date(
                                    offer.date_limite_candidature
                                );
                                const differenceInDays = Math.floor(
                                    (offerDeadline - currentDate) /
                                        (1000 * 60 * 60 * 24)
                                );

                                return (
                                    <div key={offer.id} className="col">
                                        <Card className="h-100 shadow-sm">
                                            <Card.Body>
                                                <Card.Title>
                                                    {offer.titre}
                                                </Card.Title>
                                                <Card.Subtitle className="mb-2 text-muted">
                                                    Entreprise:{" "}
                                                    {offer.entreprise
                                                        ? offer.entreprise
                                                              .nom_Entreprise
                                                        : "N/A"}
                                                </Card.Subtitle>
                                                <Card.Text>
                                                    <strong>Domaine:</strong>{" "}
                                                    {offer.domaine}
                                                    <br />
                                                    <strong>
                                                        Niveau d'Étude:
                                                    </strong>{" "}
                                                    {offer.niveau_etude}
                                                    <br />
                                                    <strong>
                                                        Expérience:
                                                    </strong>{" "}
                                                    {offer.experience}
                                                    <br />
                                                    <strong>
                                                        Nombre de Postes:
                                                    </strong>{" "}
                                                    {offer.nombre_poste}
                                                    <br />
                                                    <strong>
                                                        Secteur d'Activité:
                                                    </strong>{" "}
                                                    {offer.secteur_activite}
                                                    <br />
                                                    <strong>
                                                        Type d'Emploi:
                                                    </strong>{" "}
                                                    {offer.type_emploi}
                                                    <br />
                                                    <strong>Lieu:</strong>{" "}
                                                    {offer.lieu}
                                                    <br />
                                                    <strong>
                                                        Description:
                                                    </strong>{" "}
                                                    {offer.description.substring(
                                                        0,
                                                        10
                                                    )}
                                                    ...
                                                    <br />
                                                    <strong>
                                                        Date de Publication:
                                                    </strong>{" "}
                                                    {offer.date_Publication}
                                                    <br />
                                                    <strong>
                                                        Date Limite de
                                                        Candidature:
                                                    </strong>{" "}
                                                    {
                                                        offer.date_limite_candidature
                                                    }
                                                    <br />
                                                    <strong>
                                                        Salaire:
                                                    </strong>{" "}
                                                    {offer.salaire}
                                                    <br />
                                                    <strong>
                                                        Type de Contrat:
                                                    </strong>{" "}
                                                    {offer.type_contrat}
                                                    <br />
                                                </Card.Text>
                                                {differenceInDays < 0 ? (
                                                    <div className="text-danger">
                                                        Offer closed
                                                    </div>
                                                ) : (
                                                    <div className="d-grid gap-2">
                                                        <span className="text-success">
                                                            {differenceInDays}{" "}
                                                            {differenceInDays ===
                                                            1
                                                                ? "day"
                                                                : "days"}{" "}
                                                            left to apply
                                                        </span>
                                                        <button
                                                            onClick={() =>
                                                                closeOffer(
                                                                    offer.id
                                                                )
                                                            }
                                                            className="btn btn-warning"
                                                        >
                                                            Close Offer
                                                        </button>
                                                    </div>
                                                )}
                                                <div className="d-grid gap-2 mt-2">
                                                    <Link
                                                        href={route(
                                                            "offres.show",
                                                            offer.id
                                                        )}
                                                        className="btn btn-primary"
                                                    >
                                                        Show
                                                    </Link>
                                                    <Link
                                                        href={route(
                                                            "offres.edit",
                                                            offer.id
                                                        )}
                                                        className="btn btn-secondary"
                                                    >
                                                        Edit
                                                    </Link>
                                                    <button
                                                        className="btn btn-danger"
                                                        onClick={() =>
                                                            deleteOffer(
                                                                offer.id
                                                            )
                                                        }
                                                    >
                                                        Delete
                                                    </button>
                                                </div>
                                            </Card.Body>
                                        </Card>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                ) : (
                    <></>
                )}
            </div>

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
                .btn-warning {
                    color: #fff;
                    background-color: #ffc107;
                    border-color: #ffc107;
                }
                .btn-warning:hover {
                    background-color: #e0a800;
                    border-color: #d39e00;
                }
                .text-primary {
                    color: #007bff !important;
                }
                .text-muted {
                    color: #6c757d !important;
                }
                .display-4 {
                    font-size: 2.5rem;
                }
                .lead {
                    font-size: 1.25rem;
                    font-weight: 300;
                }
                .shadow-sm {
                    box-shadow: 0 .125rem .25rem rgba(0,0,0,.075) !important;
                }
                .text-danger {
                    color: #dc3545 !important;
                }
                .text-success {
                    color: #28a745 !important;
                }
            `}</style>
        </>
    );
}
