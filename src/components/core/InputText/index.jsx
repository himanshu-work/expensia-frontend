import React from "react";

function InputText({
  label,
  value,
  placeholder,
  type,
  note,
  classes,
  handleChange,
}) {
  return (
    <div className={`form-input ${classes}`}>
      <label>
        {label} {note && <span className="note">({note})</span>}
      </label>
      <input
        type={type}
        placeholder={placeholder}
        className="input"
        value={value}
        onChange={(e) => handleChange(e.target.value)}
      ></input>
    </div>
  );
}

export default InputText;
