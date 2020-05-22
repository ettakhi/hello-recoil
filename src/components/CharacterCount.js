import React from "react";
import { atom, useRecoilState, selector, useRecoilValue } from "recoil";

const characterState = atom({
  key: "characterState",
  default: "",
});
const characterCount = selector({
  key: "characterCount",
  get: ({ get }) => {
    const chars = get(characterState);
    return chars.length;
  },
});

const CharacterCount = () => {
  const [chars, setChars] = useRecoilState(characterState);
  const count = useRecoilValue(characterCount);

  return (
    <div className='border border-primary rounded p-3'>
      <h2>Characters: </h2>
      <div className='row'>
        <div className='col-2'> {count}</div>
        <input type='text' value={chars} onChange={(e) => setChars(e.target.value)} />
      </div>
    </div>
  );
};

export default CharacterCount;
