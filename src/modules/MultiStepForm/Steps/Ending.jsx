import React from 'react';
import { connect } from "react-redux";
import { reduxForm, formValueSelector } from 'redux-form';
import { Form, Row } from 'react-bootstrap';

let Ending = (props) => (
    <Row>
        <Form onSubmit={props.handleSubmit}>
            <div>
                <h1>
                    Thank you {props.name}
                </h1>
            </div>
        </Form>
    </Row>
);

Ending = reduxForm({
    form: 'multiStep',
    destroyOnUnmount: false
})(Ending);

const selector = formValueSelector('multiStep');

export default connect(
    state => {
        const name = selector(state, 'name');
        return {
            name
        };
    }
)(Ending);