import React, { useState } from "react";
import "./Button.css";

export interface ButtonProps {
  label: string;
}

const Button = (props: ButtonProps) => {
  const [counter, setCounter] = useState(0);

  return (
    <button
      className="custom-button"
      onClick={() => setCounter((counter) => counter + 1)}
    >
      {props.label}. counter: {counter}
    </button>
  );
};

export default Button;
