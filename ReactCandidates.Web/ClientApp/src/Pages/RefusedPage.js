import React, { useState, useEffect } from 'react';
import CandidateTable from '../components/CandidateTable';
import axios from 'axios';

export default function RefusedPage() {
    const [refusedPpl, setRefusedPpl] = useState([]);
    const [showNotes, setShowNotes] = useState(true);
    useEffect(() => {
        const getRefused = async () => {
            const { data } = await axios.get('/api/Candidates/getRefusedPpl');
            setRefusedPpl(data);
        }
        getRefused();
    }, [])

    return (
        <>
            <div className='row'>
                <h1>Refused</h1>
            </div>
            <div className='row'>
                <button className="btn btn-primary" onClick={() =>  setShowNotes(!showNotes) } >Toggle Notes</button>
            </div>
            <div className='row'>
                <CandidateTable showNotes={showNotes} candidates={refusedPpl} />
            </div>
        </>
    )
}