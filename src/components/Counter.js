import React from "react";
import { atom, useRecoilState } from "recoil";

const counterState = atom({
  key: "counterState",
  default: 0,
});

const Counter = () => {
  const [count, setCount] = useRecoilState(counterState);
  const increment = () => setCount((prevCount) => prevCount + 1);
  const decrement = () => setCount((prevCount) => prevCount - 1);

  return (
    <div className='row mt-5'>
      <div className='col-2'>count: {count}</div>
      <button className='btn btn-primary px-3 mx-2' onClick={increment}>
        +
      </button>
      <button className='btn btn-danger px-3 mx-2' onClick={decrement}>
        -
      </button>
    </div>
  );
};

export default Counter;
