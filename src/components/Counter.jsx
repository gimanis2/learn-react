import React, { useState } from "react";

const Counter = () => {
  //logic

  // state라는 특별한 변수 선언(실제 dom에 반영되는 변수 선언)
  // [변수, set변수(함수임)] => 함수는 앞의 변수의 값을 변경할 수 있는 함수
  const [countState, setCountState] = useState(0); //default값은 3으로

  const handleIncrease = () => {
    setCountState(countState + 1);
    console.log(countState);
  };

  const handleDecrease = () => {
    setCountState(countState - 1);
    console.log(countState);
  };

  //view
  return (
    <div>
      <h1>Counter</h1>
      <div
        style={{
          fontSize: "40px",
        }}
      >
        {countState}
      </div>
      <div>
        <button type="button" onClick={handleIncrease}>
          +1
        </button>
        <button type="button" onClick={handleDecrease}>
          -1
        </button>
      </div>
    </div>
  );
};

export default Counter;
