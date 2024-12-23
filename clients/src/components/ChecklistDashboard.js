import React from 'react';
import { useChecklist } from '../context/ChecklistContext';
import '../styles/ChecklistDashboard.css';

const ChecklistDashboard = () => {
    const { checklist, loading } = useChecklist();

    if (loading) return <div className="loading">Loading...</div>;

    return (
        <div className="checklist-container">
            <h1>Checklist Results</h1>
            <ul>
                {checklist.map((rule, index) => (
                    <li
                        key={index}
                        className={rule.isValid ? 'passed' : 'failed'}
                    >
                        <span>{rule.ruleName}</span>
                        <span>{rule.isValid ? '✅ Passed' : '❌ Failed'}</span>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ChecklistDashboard;
