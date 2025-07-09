import React from "react";

const Button = ({ link, text, category, onClick }) => {
  //logic
  const handleClick = () => {
    console.log("click!");
    onClick(category);
  };
  //view
  return (
    <button type="button" onClick={handleClick}>
      {text}
    </button>
  );
};

export default Button;
