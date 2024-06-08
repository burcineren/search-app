import React from "react";
import PropTypes from "prop-types"

export function Input({ value, type, className, onChange}){
    return(
        <input defaultValue={value} type={type} className={className} onChange={onChange}/>
    )
};

Input.prototypes = {
    type: PropTypes.string,
    className: PropTypes.string,
    onChange: PropTypes.func
}