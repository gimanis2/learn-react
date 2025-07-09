import React, { useState } from "react";
import Move from "../components/Move";
import TodoList from "../components/TodoList";

const Home = () => {
  //logic
  //페이지 3개 : Home, About, Contact

  //view
  return (
    <div>
      Home
      <TodoList />
      <Move />
    </div>
  );
};

export default Home;
