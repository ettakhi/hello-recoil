import React from "react";
import { RecoilRoot } from "recoil";

import Counter from "components/Counter";
import CharacterCount from "components/CharacterCount";

function App() {
  return (
    <RecoilRoot>
      <div className='container mt-5'>
        <Counter />
        <CharacterCount />
      </div>
    </RecoilRoot>
  );
}

export default App;
