import Card from "./components/Card";
import Greeting from "./components/Greeting";

function App() {
  return (
    <div className="wrap">
      {/* 카드 컴포넌트 호출 */}
      <Greeting />
      <div className="card-wrap">
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  );
}

export default App;
