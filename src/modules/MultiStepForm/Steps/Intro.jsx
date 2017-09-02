import React from 'react';
import { reduxForm } from 'redux-form';
import { Form, Button, Row } from 'react-bootstrap';

const Intro = (props) => (
    <Row>
        <Form onSubmit={props.handleSubmit}>
            <div>
                <h1>
                    Marketing Landing Page
                </h1>
                <Button type="submit" className="next">Get Started</Button>
            </div>
        </Form>
    </Row>
);

export default reduxForm({
    form: 'multiStep',
    destroyOnUnmount: false
})(Intro);