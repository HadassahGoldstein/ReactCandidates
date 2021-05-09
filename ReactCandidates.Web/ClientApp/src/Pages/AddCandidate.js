import React, { useState,useContext } from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios';
import { produce } from 'immer';
import { CandidatesCountContext } from '../CandidatesCountContext';

function AddCandidate() {   
    const history = useHistory();
    const { pendingCount, setPendingCount,addForm,setAddForm } = useContext(CandidatesCountContext);

    const submitCandidate = () => {
        axios.post('api/Candidates/addCandidate', addForm);
        setPendingCount(pendingCount + 1);
        setAddForm({})
        history.push('/');

    }
    const textChange = (e) => {       
        const nextState = produce(addForm, draftState => {
            draftState[e.target.name] = e.target.value;
        });

        
        setAddForm(nextState);
    }
    return (
        <div className="row" >
            <div className="col-md-6 offset-md-3">
                <div className="card card-body bg-light">
                    <h4>Add Candidate</h4>
                    <input type="text" name="firstName" placeholder="First Name" className="form-control" value={addForm.firstName} onChange={textChange} />
                    <br />
                    <input type="text" name="lastName" placeholder="Last Name" className="form-control" value={addForm.lastName} onChange={textChange} />
                    <br />
                    <input type="text" name="email" placeholder="Email" className="form-control" value={addForm.email} onChange={textChange} />
                    <br />
                    <input type="text" name="phone" placeholder="Phone Number" className="form-control" value={addForm.phone} onChange={textChange} />
                    <br />
                    <textarea rows="5" className="form-control" name="notes" value={addForm.notes} onChange={textChange} >
                    </textarea>
                    <br />
                    <button className="btn btn-primary" onClick={submitCandidate}>Submit</button>
                </div>
            </div>
        </div >
    )
}
export default AddCandidate;