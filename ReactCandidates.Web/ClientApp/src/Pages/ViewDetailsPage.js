import React, { useState,useEffect,useContext } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import axios from 'axios';
import { CandidatesCountContext } from '../CandidatesCountContext';


export default function ViewDetailsPage() {
    const [candidate, setCandidate] = useState({});
    const history = useHistory();
    const params = useParams();

    const { setConfirmedCount, setRefusedCount,confirmedCount,refusedCount,pendingCount,setPendingCount } = useContext(CandidatesCountContext);

    useEffect(() => {
        const { id } = params;
        const getCandidate = async() => {
            const { data } = await axios.get(`/api/Candidates/getCandidate?id=${id}`);
            setCandidate(data);
        }
        getCandidate();
    }, [])
    const { firstName, lastName, email, phone, notes } = candidate;

    const onConfirmClick = async () => {
        const cand = { ...candidate, status: 'Confirmed' };
        await axios.post(`/api/Candidates/ChangeStatus`, cand);
        setConfirmedCount(confirmedCount + 1);
        setPendingCount(pendingCount - 1);
        history.push('/');
    }
    const onRefuseClick = async () => {
        const cand = { ...candidate, status: 'Refused' };
        await axios.post(`/api/Candidates/ChangeStatus`, cand);
        setRefusedCount(refusedCount + 1);
        setPendingCount(pendingCount - 1);
        history.push('/');
    }
    return (
      
        <div className="row">
            <div className="col-md-6 offset-md-3">
                <div className="card card-body bg-light">
                    <h4>Name: {firstName} {lastName} </h4>
                    <h4>Email: {email} </h4>
                    <h4>Phone: {phone}</h4>
                    <h4>Status: Pending</h4>
                    <h4>Notes: {notes}</h4><p></p>
                    <div>
                        <button className="btn btn-primary" onClick={onConfirmClick}>Confirm</button>
                        <button className="btn btn-danger" onClick={onRefuseClick}>Refuse</button>
                    </div>
                </div>
            </div>
        </div>
        )
}