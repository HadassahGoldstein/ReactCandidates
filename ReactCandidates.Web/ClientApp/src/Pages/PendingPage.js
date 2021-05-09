import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

export default function PendingPage() {
    const [pendingPpl, setPendingPpl] = useState([]);
    useEffect(() => {
        const getPending = async () => {
            const { data } = await axios.get('/api/Candidates/GetPendingPpl');
            setPendingPpl(data);
        }
        getPending();

    }, []);

    return (

        <>
            <h1>Pending</h1>
            <table className="table table-striped table-bordered table-hover">
                <thead>
                    <tr>
                        <td></td>
                        <td>First Name</td>
                        <td>Last Name</td>
                        <td>Phone</td>
                        <td>Email</td>
                    </tr>
                </thead>
                <tbody>
                    {pendingPpl && pendingPpl.map(p => {
                        const { id, firstName, lastName, email, phone } = p;
                        return (
                            <tr key={id}>
                            <td>
                                <Link to={`/ViewDetails/${id}`} className="btn btn-link">View Details
                                 </Link>
                            </td>
                            <td>{firstName}</td>
                            <td>{lastName}</td>
                            <td>{phone}</td>
                            <td>{email}</td>
                            </tr>
                            )
                    })}
                </tbody>
            </table>
        </>
    )
}