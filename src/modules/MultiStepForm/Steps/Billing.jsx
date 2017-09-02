import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { Form, Button, Row, Col } from 'react-bootstrap';
import fieldRenderer from "../../helpers/renderField";

let Billing = (props) => (
    <Row>
        <Form onSubmit={props.handleSubmit} className="billing-form">
            <div>
                <h1>
                    Billing / Cart
                </h1>
                <div>
                    <Col xs={12}>
                        <Field name="ccnum" component={fieldRenderer} type="text" label="Card Number" normalize={normalizeCard} />
                        <Field name="exp" component={fieldRenderer} type="text" label="Expire Date" normalize={normalizeDate}/>
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
    if (!values.ccnum) {
        errors.ccnum = "Required";
    } else if(values.ccnum.length < 19){
        errors.ccnum = "Invalid card number";
    }
    if (!values.exp) {
        errors.exp = "Required";
    } else if(values.exp.length < 5){
        errors.exp = "Invalid date";
    }
    return errors;
};

const normalizeCard = (value) => {
    if (!value) {
        return value
    }

    const onlyNums = value.replace(/[^\d]/g, '');
    if (onlyNums.length <= 4) {
        return onlyNums;
    }
    if (onlyNums.length <= 8) {
        return `${onlyNums.slice(0, 4)} ${onlyNums.slice(4, 8)}`;
    }
    if (onlyNums.length <= 12) {
        return `${onlyNums.slice(0, 4)} ${onlyNums.slice(4, 8)} ${onlyNums.slice(8, 12)}`;
    }
    if (onlyNums.length <= 16) {
        return `${onlyNums.slice(0, 4)} ${onlyNums.slice(4, 8)} ${onlyNums.slice(8, 12)} ${onlyNums.slice(12, 16)}`;
    }
    return `${onlyNums.slice(0, 4)} ${onlyNums.slice(4, 8)} ${onlyNums.slice(8, 12)} ${onlyNums.slice(12, 16)}`;
}

const normalizeDate = (value) => {
    if (!value) {
        return value
    }

    const onlyNums = value.replace(/[^\d]/g, '');
    if (onlyNums.length <= 2) {
        return onlyNums;
    }
    if (onlyNums.length <= 4) {
        return `${onlyNums.slice(0, 2)}/${onlyNums.slice(2, 4)}`;
    }
    return `${onlyNums.slice(0, 2)}/${onlyNums.slice(2, 4)}`;
}

export default reduxForm({
    form: 'multiStep',
    destroyOnUnmount: false,
    validate
})(Billing);