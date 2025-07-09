import React from "react";

const Greeting = ({ userName }) => {
  //로직부문(javascript 사용부문)
  const testClass = "text-red";

  //VIEW부문
  return (
    <div>
      <h2 className={`greeting-title ${testClass}`}>
        안녕하세요 반갑습니다. {userName}님!
      </h2>
    </div>
  );
};

export default Greeting;
