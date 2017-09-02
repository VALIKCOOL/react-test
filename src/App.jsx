import React, { Component } from 'react';
import { Grid } from 'react-bootstrap';
import logo from './assets/logo.svg';
import './styles/App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import MultiStepForm from "./modules/MultiStepForm";

class App extends Component {
    render() {
        return (
            <div className="App">
                <Grid>
                    <MultiStepForm />
                </Grid>
            </div>
        );
    }
}

export default App;
