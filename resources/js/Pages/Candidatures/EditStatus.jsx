import React, { useState } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import { Form, Button } from 'react-bootstrap';
import { Inertia } from '@inertiajs/inertia';

const CandidatureStatusUpdateForm = ({ candidature }) => {
    const [status, setStatus] = useState(candidature.statut);

    const handleSubmit = (e) => {
        e.preventDefault();
        Inertia.post(`/candidatures/${candidature.id}/update-status`, { status });
    };

    return (
        <Form onSubmit={handleSubmit}>
            <Form.Group controlId="status">
                <Form.Label>Status</Form.Label>
                <Form.Control
                    as="select"
                    value={status}
                    onChange={(e) => setStatus(e.target.value)}
                >
                    <option value="accepted">accepted</option>
                    <option value="rejected">rejected</option>
                </Form.Control>
            </Form.Group>
            <Button variant="primary" type="submit">
                Update Status
            </Button>
        </Form>
    );
};

export default CandidatureStatusUpdateForm;
