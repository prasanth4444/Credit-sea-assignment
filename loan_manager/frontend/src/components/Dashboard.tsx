// frontend/src/components/Dashboard.tsx

import React, { useEffect, useState } from 'react';
import { fetchLoans } from '../api';

const Dashboard: React.FC = () => {
    const [loans, setLoans] = useState([]);

    useEffect(() => {
        const loadLoans = async () => {
            const fetchedLoans = await fetchLoans();
            setLoans(fetchedLoans);
        };
        loadLoans();
    }, []);

    return (
        <div>
            <h2>Loan Dashboard</h2>
            <ul>
                {loans.map((loan: any) => (
                    <li key={loan._id}>
                        {loan.fullName} - ${loan.loanAmount} for {loan.tenure} months
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Dashboard;
