import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import DarkModeContext from './context/DarkModeContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <DarkModeContext>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </DarkModeContext>
);

