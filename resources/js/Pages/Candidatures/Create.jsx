import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Inertia } from "@inertiajs/inertia";
import { Head, Link } from "@inertiajs/react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayoutCandidats";

const CreateCandidatureForm = ({ offre_id, candidat }) => {
    const [values, setValues] = useState({
        offre_id: offre_id,
        candidat_id: candidat.id,
        cv: null,
        lettre_de_motivation: null,
    });

    const handleFileChange = (e) => {
        const { name, files } = e.target;
        setValues((prevValues) => ({
            ...prevValues,
            [name]: files[0],
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append("offre_id", values.offre_id);
        formData.append("candidat_id", values.candidat_id);
        formData.append("cv", values.cv);
        formData.append("lettre_de_motivation", values.lettre_de_motivation);
        Inertia.post(route("candidatures.store"), formData);
    };
    

    return (
        <AuthenticatedLayout candidat={candidat}>
            <Head title="Create Candidature" />
            <input type="hidden" name="offre_id" value={values.offre_id} />
            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <Form onSubmit={handleSubmit}>
                        <input
                            type="hidden"
                            name="offre_id"
                            value={values.offre_id}
                        />
                        <input
                            type="hidden"
                            name="candidat_id"
                            value={values.candidat_id}
                        />
                        <Form.Group controlId="cv">
                            <Form.Label>CV</Form.Label>
                            <Form.Control
                                type="file"
                                name="cv"
                                onChange={handleFileChange}
                            />
                        </Form.Group>
                        <Form.Group controlId="lettre_de_motivation">
                            <Form.Label>Lettre de Motivation</Form.Label>
                            <Form.Control
                                type="file"
                                name="lettre_de_motivation"
                                onChange={handleFileChange}
                            />
                        </Form.Group>
                        <Button variant="primary" type="submit">
                            Submit
                        </Button>
                        <Link
                            href={route("candidatures.index")}
                            className="btn btn-secondary ml-2"
                        >
                            Cancel
                        </Link>
                    </Form>
                </div>
            </div>
        </AuthenticatedLayout>
    );
};

export default CreateCandidatureForm;
