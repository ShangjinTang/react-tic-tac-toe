import React, {StrictMode} from 'react';
import logo from './logo.svg';
import './App.css';
import Content from "./Content";


function ReactHeader() {
    return (
        <div className="App-header">
            <h1 style={{fontSize: "40px"}}>Powered by React</h1>
            <img src={logo} className="App-logo" alt="logo"/>
        </div>

    )
}

function App() {
    return (
        <>
            <StrictMode>
                <ReactHeader></ReactHeader>
                <Content></Content>
            </StrictMode>

        </>
    );
}

export default App;
