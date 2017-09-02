import React, { Component } from 'react';
import { Panel } from "react-bootstrap";
import Intro from './Steps/Intro';
import Plans from './Steps/Plans';
import Account from './Steps/Account';
import Billing from './Steps/Billing';
import Ending from './Steps/Ending';

class WizardForm extends Component {
    constructor(props) {
        super(props)
        this.nextPage = this.nextPage.bind(this)
        this.previousPage = this.previousPage.bind(this)
        this.state = {
            page: 1
        }
    }

    nextPage() {
        this.setState({ page: this.state.page + 1 })
    }

    previousPage() {
        this.setState({ page: this.state.page - 1 })
    }

    render() {
        const { page } = this.state
        return (<Panel className="form-wrapper margin-top-lg">
            {page === 1 && <Intro onSubmit={this.nextPage} />}
            {page === 2 && <Plans previousPage={this.previousPage} onSubmit={this.nextPage} />}
            {page === 3 && <Account previousPage={this.previousPage} onSubmit={this.nextPage} />}
            {page === 4 && <Billing previousPage={this.previousPage} onSubmit={this.nextPage} />}
            {page === 5 && <Ending previousPage={this.previousPage} onSubmit={this.nextPage} />}
        </Panel>
        )
    }
}

export default WizardForm;
