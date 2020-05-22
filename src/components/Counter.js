import React from "react";
import { atom, useRecoilState } from "recoil";

const counterState = atom({
  key: "counterState",
  default: 0,
});

const Counter = () => {
  const [count, setCount] = useRecoilState(counterState);
  return (
    <div>
      count: {count}
      <button onClick={() => setCount((prevCount) => prevCount + 1)}>+</button>
      <button onClick={() => setCount((prevCount) => prevCount - 1)}>-</button>
    </div>
  );
};

export default Counter;
