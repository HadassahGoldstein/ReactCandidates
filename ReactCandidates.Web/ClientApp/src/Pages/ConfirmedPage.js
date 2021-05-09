import React, { useState, useEffect } from 'react';
import CandidateTable from '../components/CandidateTable';
import axios from 'axios';

function ConfirmedPage(){
    const [confirmedPpl, setConfirmedPpl] = useState([]);
    const [showNotes, setShowNotes] = useState(true);
   
    useEffect(() => {
        const getConfirmed = async () => {
            const { data } = await axios.get('/api/Candidates/GetConfirmedPpl');
            setConfirmedPpl(data);
        }
        getConfirmed();
    }, [])

    return (
        <>
            <div className='row'>
                <h1>Confirmed</h1>
            </div>
            <div className='row'>
                <button className="btn btn-primary" onClick={() => setShowNotes(!showNotes) }>Toggle Notes</button>
            </div>
            <div className='row'>
                <CandidateTable candidates={confirmedPpl} showNotes={showNotes} />
            </div>
        </>
    )
}
export default ConfirmedPage;