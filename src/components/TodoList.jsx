import React, { useState } from "react";

const TodoList = () => {
  //logic
  const initalList = [
    {
      id: 1,
      text: "React이론",
    },
    {
      id: 2,
      text: "React실습",
    },
    {
      id: 3,
      text: "React컴포넌트 학습",
    },
    {
      id: 4,
      text: "React JSX규칙 실습",
    },
  ];

  const handleAdd = () => {
    const newItem = {
      id: list.length + 1,
      text: "신규아이템",
    };

    const resultList = [...list, newItem]; // 배열을 그대로 복사하고 뒤에 아이템을 추가하는 문법
    setList(resultList);
  };

  const [list, setList] = useState(initalList);

  //view
  return (
    <div>
      <ul>
        {/* 리스트 랜더링 */}
        {list.map((item) => (
          <li key={item.id}>{item.text}</li>
        ))}
      </ul>
      <button type="button" onClick={handleAdd}>
        아이템 추가
      </button>
    </div>
  );
};

export default TodoList;
