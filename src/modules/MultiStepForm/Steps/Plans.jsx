import React from 'react';
import { connect } from "react-redux";
import { Field, reduxForm, formValueSelector } from 'redux-form';
import { Form, Button, Row, Col } from 'react-bootstrap';
import fieldRenderer from "../../helpers/renderField";

let Plans = (props) => (
    <Row>
        <Form onSubmit={props.handleSubmit} className="plans-form">
            <div>
                <h1>
                    Plans
                </h1>
                <div>
                    <Col xs={6}>
                        <label style={setBorderColor(props.plan && props.plan === "0")}><Field name="plan" component={fieldRenderer} type="radio" value="0" />First Plan</label>
                    </Col>
                    <Col xs={6}>
                        <label style={setBorderColor(props.plan && props.plan === "1")}><Field name="plan" component={fieldRenderer} type="radio" value="1" />Second Plan</label>
                    </Col>
                    <Field name="plan" component={plan => null} />
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
                    disabled={!props.plan}
                    type="submit"
                    className="next">
                    Continue
                </Button>
            </div>
        </Form>
    </Row>
);

const setBorderColor = (flag) => ({
    borderColor: flag ? "green" : "red"
});

Plans = reduxForm({
    form: 'multiStep',
    destroyOnUnmount: false
})(Plans);

const selector = formValueSelector('multiStep');

export default connect(
    state => {
        const plan = selector(state, 'plan');
        return {
            plan
        };
    }
)(Plans);