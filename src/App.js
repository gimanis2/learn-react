import Card from "./components/Card";
import Counter from "./components/Counter";
import Greeting from "./components/Greeting";

function App() {
  return (
    <div className="wrap">
      {/* 카드 컴포넌트 호출 */}
      <Greeting />
      <div className="card-wrap">
        {/*  
        <Card />
        <Card />
        <Card />
        <Card />
        */}
        <Counter />
      </div>
    </div>
  );
}

export default App;
