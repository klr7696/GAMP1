import React from 'react';

const Select = ({ name, label, error="", value, onChange, children} ) => {
    return ( 
        <div className="form-group">
        <label htmlFor={name} className="j-label">{label}</label>
        <select
                id={name}
                name={name}
                onChange={onChange}
                value={value}
                className={"form-control" + (error && "is-invalid" )}
        >
        {children}
        </select>
        <p className="invalid-feedback">{error}</p>
      </div>
     );
}
 
export default Select;