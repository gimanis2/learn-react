import { use, useEffect, useState } from "react";
import Card from "./components/Card";
import Counter from "./components/Counter";
import Counter2 from "./components/Counter2";
import Greeting from "./components/Greeting";

function App() {
  //logic
  const [step, setStep] = useState(0);

  const userStep = () => {
    const userNum = prompt("숫자 몇칸씩 증가(감소)시킬지 입력해주세요");
    setStep(Number(userNum));
  };

  const [userName, setUserName] = useState("");

  useEffect(() => {
    //컴포넌트가 생성되었을때 딱한번 실행
    //사용자의 이름을 입력 받기
    const userName = prompt("이름을 입력해주세요");
    setUserName(userName);
  }, []);

  //입력받은 사용자 이름으로 Greeting 컴포넌트 수정하기

  //view
  return (
    <div className="wrap">
      {/* 카드 컴포넌트 호출 */}
      <Greeting userName={userName} />
      <div className="card-wrap">
        {/*  
        <Card />
        <Card />
        <Card />
        <Card />
        */}
        {/* <Counter2 step={step} />
        <button type="button" onClick={userStep}>
          간격선택
        </button> */}
        {/* <Counter2 step={3} /> */}
      </div>
    </div>
  );
}

export default App;
