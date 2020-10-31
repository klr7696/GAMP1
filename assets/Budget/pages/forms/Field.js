import React from 'react';

const Field = ({
    name,
    label,
    value,
    onChange,
    placeholder,
    type ="text",
    error=""
}) => {
    return(
        <div className="form-group row">
        <div className="col-sm-2 col-form-label sub-title">
            <label htmlFor={name}> {label} </label>
        </div>
        <div className="col-sm-6">
            <input 
            value={value}
            onchange={onChange}
            type={type}
            placeholder={placeholder}
            name={name}
            id={name}
            className={" form-control" + (error && "is-invalid")}
        />
        </div>
        {error && <p className="invalid-feedback">{error}</p> }
        </div>
    )
}
export default Field;