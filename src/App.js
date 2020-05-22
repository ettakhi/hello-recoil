import React from "react";
import { RecoilRoot } from "recoil";

import Counter from "components/Counter";
import CharacterCount from "components/CharacterCount";
import Dogs from "components/Dogs";

function App() {
  return (
    <RecoilRoot>
      <div className='container mt-5'>
        <Counter />
        <CharacterCount />
        <Dogs />
      </div>
    </RecoilRoot>
  );
}

export default App;
