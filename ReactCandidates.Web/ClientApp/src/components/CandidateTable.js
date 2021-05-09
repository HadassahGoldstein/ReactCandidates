import React from 'react';

function CandidateTable({ candidates, showNotes }) {

    return (
        <table className="table table-striped table-bordered table-hover">
            <thead>
                <tr>

                    <td>First Name</td>
                    <td>Last Name</td>
                    <td>Phone</td>
                    <td>Email</td>
                    {showNotes && <td>Notes</td>}                    
                </tr>
            </thead>
            <tbody>
                {candidates.map(c => {
                    const { id,firstName, lastName, email, phone, notes } = c;
                    return (
                        <tr key={id}>
                            <td>{firstName}</td>
                            <td>{lastName}</td>
                            <td>{phone}</td>
                            <td>{email}</td>
                            {showNotes && < td > {notes}</td>}
                        </tr>
                    )

                })}

            </tbody>
        </table>

    )
}
export default CandidateTable;