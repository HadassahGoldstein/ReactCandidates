import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios';


const CandidatesCountContext = createContext();

const CandidatesCountContextComponent = ({ children }) => {
    const [pendingCount, setPendingCount] = useState(0);
    const [confirmedCount, setConfirmedCount] = useState(0);
    const [refusedCount, setRefusedCount] = useState(0);
    const [addForm, setAddForm] = useState({});

    
    useEffect(() => {
        const updateCounts = async () => {
            const { data } = await axios.get('/api/candidates/getCounts');
            setConfirmedCount(data.confirmed);
            setPendingCount(data.pending);
            setRefusedCount(data.refused);
        }
        updateCounts();
    }, []);
    return (
        <CandidatesCountContext.Provider value={{ pendingCount, setPendingCount, refusedCount, setRefusedCount, confirmedCount, setConfirmedCount, addForm, setAddForm }}>
            {children}
        </CandidatesCountContext.Provider>
        )
}
export {CandidatesCountContext, CandidatesCountContextComponent};









    

   