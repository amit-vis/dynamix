import React from 'react';
import { ChecklistProvider } from './context/ChecklistContext';
import ChecklistDashboard from './components/ChecklistDashboard';

function App() {
    return (
        <ChecklistProvider>
            <ChecklistDashboard />
        </ChecklistProvider>
    );
}

export default App;
