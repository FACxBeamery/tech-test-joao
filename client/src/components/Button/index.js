import React from "react";

const Button = ({ children, type = "button", handleSubmit }) => {
  return (
    <button onClick={handleSubmit} type={type}>
      {children}
    </button>
  );
};

export default Button;
