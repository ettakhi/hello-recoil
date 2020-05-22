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
    <div className='border border-primary rounded p-3'>
      <h2>Counter: </h2>
      <div className='row'>
        <span className='col-2'> {count}</span>
        <button className='btn btn-primary px-3 mx-2' onClick={increment}>
          +
        </button>
        <button className='btn btn-danger px-3 mx-2' onClick={decrement}>
          -
        </button>
      </div>
    </div>
  );
};

export default Counter;
