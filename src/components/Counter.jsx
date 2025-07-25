import React, { useState } from "react";

const Counter = () => {
  //logic

  // state라는 특별한 변수 선언(실제 dom에 반영되는 변수 선언)
  // [변수, set변수(함수임)] => 함수는 앞의 변수의 값을 변경할 수 있는 함수
  // 구조분해할당 형식으로 변수 선언
  const [countState, setCountState] = useState(0); //default값은 0으로 설정

  const dayOfWeeks = ["월", "화", "수"];
  let first = dayOfWeeks[0];
  console.log("first", first);

  // 위를 구조분해할당 형식으로 변수 선언 예시
  // 순서대로 firsta, second, third에 배열의 값이 할당
  const [firsta, second, third] = dayOfWeeks; // 배열이기 때문에 [] 사용
  console.log("first", firsta);

  // 객체를 구조분해 할당 형식으로
  const person = {
    name: "장기만",
    age: "43",
  };

  const { name, age } = person; // 객체이기 대문에 {} 사용
  console.log(name);
  console.log(age);

  // 배열로된 구조분해 할당 사용 예시
  const animals = ["개", "고양이", "앵무새"];
  const [dog, cat, bird] = animals;

  console.log("dog", dog);
  console.log("cat", cat);
  console.log("bird", bird);

  const handleIncrease = () => {
    setCountState(countState + 1);
    console.log(countState);
  };

  const handleDecrease = () => {
    //setCountState(countState - 1);
    setCountState((prev) => prev - 1); //prev라는 명칭으로 변수를 가져와서 함수로 구현
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
