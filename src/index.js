import React from 'react';
import './index.css';
import ReactDOM from 'react-dom';
import QuoteMachine from "./components/QuoteMachine/QuoteMachine";
import { QUOTES, COLORS } from './App.service'


function App() {
    return (
        <QuoteMachine quotes={QUOTES} colors={COLORS} />
    );
}

ReactDOM.render(
    <App />,
    document.getElementById('root')
);





