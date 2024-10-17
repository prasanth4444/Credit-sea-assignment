// frontend/src/api.ts

const API_URL = 'http://localhost:5000/api/loans';

export const submitLoanApplication = async (loanData: any) => {
    const response = await fetch(API_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(loanData),
    });
    return response.json();
};

export const fetchLoans = async () => {
    const response = await fetch(API_URL);
    return response.json();
};
