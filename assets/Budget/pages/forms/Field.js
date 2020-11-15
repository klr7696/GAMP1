import React from 'react';

export const Field = ({
    name,
    label,
    value,
    onChange,
    placeholder,
    type = "text",
    error = "",
    maxLength
}) => (
    <div className="j-content">
         <label className="j-label" htmlFor={name}> {label} </label>
            <input 
            value={value}
            onChange={onChange}
            type={type}
            placeholder={placeholder || label }
            name={name}
            id={name}
            className={"form-control" + (error && "is-invalid")}
            maxLength={maxLength}
            error={error}
        />
        {error && <p className="invalid-feedback">{error}</p> }
        
        </div>
);


export const Field1 = ({
    name,
    label,
    value,
    onChange,
    placeholder,
    type ="text",
    error=""
}) => (
        <div className="form-group row">
            <label className="col-sm-2 col-form-label sub-title" htmlFor={name}> {label} </label>
        <div className="col-sm-6">
            <textarea 
            value={value}
            onChange={onChange}
            type={type}
            placeholder={placeholder || label }
            name={name}
            id={name}
            className={" form-control" + (error && "is-invalid")}
        />
        </div>
        {error && <p className="invalid-feedback">{error}</p> }
        </div>
);
