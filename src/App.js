import React from "react";
import { RecoilRoot } from "recoil";

import Counter from "components/Counter";

function App() {
  return (
    <RecoilRoot>
      <div className='container'>
        <Counter />
      </div>
    </RecoilRoot>
  );
}

export default App;
