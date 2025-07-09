import React from "react";
import Button from "./Button";

const Greeting = ({ userName, userAge }) => {
  //로직부문(javascript 사용부문)
  const testClass = "text-red";

  const handleClick = (data) => {
    console.log("data:", data);

    // if (data == "naver") {
    //   window.open("https://www.naver.com");
    // } else {
    //   window.open("https://www.google.com");
    // }

    window.open(
      data == "naver" ? "https://www.naver.com" : "https://www.google.com"
    );
  };

  //VIEW부문
  return (
    <div>
      <h2 className={`greeting-title ${testClass}`}>
        안녕하세요 반갑습니다. {userName}님!
      </h2>
      {/* <Button
        link={"https://www.naver.com"}
        text={"네이버 바로가기"}
        onClick={(data) => console.log("data:", data)}
      /> */}
      <Button
        link={"https://www.naver.com"}
        text={"네이버 바로가기"}
        category={"naver"}
        onClick={handleClick}
      />
      <Button
        link={"https://www.google.com"}
        text={"구글 바로가기"}
        category={"google"}
        onClick={handleClick}
      />
    </div>
  );
};

export default Greeting;
