import React from 'react';
import { Link } from '@inertiajs/inertia-react';

export default function AuthenticatedLayout({ candidat, header, children }) {
    return (
        <div className="min-vh-100 bg-light">
            <nav className="navbar navbar-expand-lg navbar-light bg-white border-bottom border-gray-100">
                <div className="container">
                    <Link className="navbar-brand" href="/candidats">
                        Application Logo
                    </Link>

                    <button
                        className="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarSupportedContent"
                        aria-controls="navbarSupportedContent"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className="nav-link" href={route('candidats.dashboard')} active={route().current('candidats.dashboard')}>
                                    Dashboard
                                </Link>
                            </li>
                        </ul>

                        <div className="ms-auto">
                            <div className="nav-item dropdown">
                                <button
                                    className="btn btn-link dropdown-toggle"
                                    type="button"
                                    id="navbarDropdown"
                                    data-bs-toggle="dropdown"
                                    aria-expanded="false"
                                >
                                    {candidat.nom}
                                </button>
                                <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="navbarDropdown">
                                    <li>
                                        <Link className="dropdown-item" href={route('candidats.profile.edit')}>
                                            Profile
                                        </Link>
                                    </li>
                                    <li>
                                        <Link className="dropdown-item" href={route('candidats.logout')} method="post">
                                            Log Out
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>

            {header && (
                <header className="bg-white shadow">
                    <div className="container py-6">{header}</div>
                </header>
            )}

            <main>{children}</main>
        </div>
    );
}
