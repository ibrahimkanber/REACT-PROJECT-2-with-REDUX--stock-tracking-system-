import React from "react";

function TextInput({ name, label, onChange, placeholder, value, error }) {
  let wrapperClass = "form-group";
  if (error && error.length > 0) {
    wrapperClass += " has-error";
  }

  return (
    <div className={wrapperClass}>
      <label htmlFor={name}></label>
      <div className="field">
        <input
          type="text"
          className="form-control"
          name={name}
          value={value}
          onChange={onChange}
        />
        {error && <div className="alert alert-danger">{error}</div>}
      </div>
    </div>
  );
}

export default TextInput;
