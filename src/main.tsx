import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import './styles/index.css';
import { BodyWrapper } from './styles/styles.ts';

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <BodyWrapper>
            <App />
        </BodyWrapper>
    </React.StrictMode>
);
