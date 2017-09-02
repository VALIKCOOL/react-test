import React, { Component } from 'react';
import logo from './assets/logo.svg';
import './styles/App.css';
import MultiStepForm from "./MultiStepForm";

class App extends Component {
    render() {
        return (
            <div className="App">
                <MultiStepForm />
            </div>
        );
    }
}

export default App;
