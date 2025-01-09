import React from "react";

function InputField(props) {
  return (
    <div>
      <label
        className="block text-sm font-medium text-amber-700 mb-1"
        htmlFor={props.name}
      >
        {props.label}
      </label>
      <input
        name={props.name}
        id={props.name}
        type={props.type}
        className="w-full rounded-xl border-2 border-amber-200 bg-amber-50 py-2 px-3 focus:outline-none focus:ring-2
         focus:ring-amber-500 focus:border-amber-500"
        placeholder={props.placeholder}
        value={props.value}
        onChange={props.onChange}
      />
    </div>
  );
}

export default InputField;
