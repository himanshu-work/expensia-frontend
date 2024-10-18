import React from "react";

function SelectInput({ list, label, value, handleChange }) {
  return (
    <div className="flex flex-col selectInput">
      <label htmlFor="select">{label}</label>
      <select
        className="select p-1 rounded-md"
        id="select"
        value={value}
        onChange={(e) => handleChange(e.target.value)}
      >
        {list?.map((item) => (
          <option key={item.id} value={item.name}>
            {item.name}
          </option>
        ))}
      </select>
    </div>
  );
}

export default SelectInput;
