import React from "react";

interface inputProps {
  type: string;
  name: string;
  value: string;
  placeholder: string;
  onchange: (event: any) => void;
}
const Input = (props: inputProps) => {
  return (
    <div>
      <input
        type={props.type}
        name={props.name}
        placeholder={props.placeholder}
        value={props.value}
        onChange={props.onchange}
      ></input>
    </div>
  );
};

export default Input;
