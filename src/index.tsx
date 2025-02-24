import React from 'react';
import ReactDOM from 'react-dom/client';
import './global.css';
import App from './App';
import {UpvoteProvider} from "./context/UpvoteContext";

const root = ReactDOM.createRoot(document.getElementById("root")!);
root.render(
    <UpvoteProvider>
        <App />
    </UpvoteProvider>
);