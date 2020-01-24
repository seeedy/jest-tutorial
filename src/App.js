import React from "react";
import "./App.css";
import ApiCall from "./ApiCall/ApiCall";

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <p>
                    Edit <code>src/App.js</code> and save to reload.
                </p>
                <a
                    className="App-link"
                    href="https://reactjs.org"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Learn Jest
                </a>
                <ApiCall />
            </header>
        </div>
    );
}

export default App;
