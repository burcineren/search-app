import * as React from "react";
import PropTypes from "prop-types"

export function Button({type, className, text, onClick, disabled}){
    return(
        <button type={type} disabled={disabled} className={className} onClick={onClick}>{text}</button>
    );
};

Button.propTypes = {
    type: PropTypes.string,
    className: PropTypes.string.isRequired,
    onClick: PropTypes.func
};