import React from "react";
import { Link, useNavigate } from "react-router-dom";

const Move = () => {
  //logic
  const history = useNavigate();

  const handlePageMove = () => {
    //페이지이동
    history("/contact");
  };

  //view
  return (
    <div>
      <Link to={"/"}>Home</Link>
      <Link to={"/about"}>About</Link>
      <Link to={"/contact"}>Contact</Link>
      {/* <button type="button" onClick={handlePageMove}>
        Contact
      </button> */}
    </div>
  );
};

export default Move;
