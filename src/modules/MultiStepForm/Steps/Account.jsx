import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { Form, Button, Row, Col } from 'react-bootstrap';
import fieldRenderer from "../../helpers/renderField";

let Account = (props) => (
    <Row>
        <Form onSubmit={props.handleSubmit} className="account-form">
            <div>
                <h1>
                    Account
                </h1>
                <div>
                    <Col xs={12}>
                        <Field name="name" component={fieldRenderer} type="text" label="Name"/>
                        <Field name="email" component={fieldRenderer} type="text" label="Email"/>
                        <Field name="password" component={fieldRenderer} type="password" label="Password"/>
                    </Col>
                </div>
            </div>
            <div>
                <Button
                    type="button"
                    className="previous"
                    onClick={props.previousPage}>
                    Previous
                </Button>
                <Button
                    disabled={props.invalid}
                    type="submit"
                    className="next">
                    Submit
                </Button>
            </div>
        </Form>
    </Row>
);

const validate = values => {
    const errors = {};
    if(!values.name) {
        errors.name = "Required";
    }
    if(!values.email) {
        errors.email = "Required";
    } else if(!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,10}$/i.test(values.email)){
        errors.email = "Invalid email";
    }
    if(!values.password) {
        errors.password = "Required";
    }
    return errors;
};

export default reduxForm({
    form: 'multiStep',
    destroyOnUnmount: false,
    validate
})(Account);