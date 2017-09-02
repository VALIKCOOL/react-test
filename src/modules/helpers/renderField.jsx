import * as React from "react";
import {
    FormGroup,
    FormControl,
    ControlLabel,
    HelpBlock
} from "react-bootstrap";

export default ({
    component,
    className,
    onChange,
    disabled,
    input,
    label,
    type,
    styles,
    placeholder,
    meta: {
        touched,
        error,
        warning
    } }) => (
        <FormGroup validationState={(touched && error) ? "error" : null}>
            {(label) && <ControlLabel>{label}</ControlLabel>}
            <FormControl {...input}
                onChange={(e) => {
                    input.onChange(e);
                    onChange && onChange(e);
                }}
                style={styles}
                disabled={disabled}
                className={className}
                type={type}
                placeholder={placeholder} />
            {touched && (error && <HelpBlock>{error}</HelpBlock>)}
        </FormGroup>
    );