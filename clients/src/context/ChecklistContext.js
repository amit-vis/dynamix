import React, { createContext, useContext, useEffect, useState } from 'react';
import axios from 'axios';

const ChecklistContext = createContext();

export const ChecklistProvider = ({ children }) => {
    const [checklist, setChecklist] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchChecklist = async () => {
            try {
                const response = await axios.get('http://localhost:5000/api/checklist');
                setChecklist(response.data.checklistResults);
            } catch (error) {
                console.error('Failed to fetch checklist data');
            } finally {
                setLoading(false);
            }
        };

        fetchChecklist();
    }, []);

    return (
        <ChecklistContext.Provider value={{ checklist, loading }}>
            {children}
        </ChecklistContext.Provider>
    );
};

export const useChecklist = () => useContext(ChecklistContext);
