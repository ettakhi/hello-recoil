import React, { Suspense } from "react";

import { selector, useRecoilValue } from "recoil";

const dogPictureApi = "https://dog.ceo/api/breeds/image/random/3";

const dogState = selector({
  key: "dogState",
  get: async ({ get }) => {
    const res = await fetch(dogPictureApi);
    const json = await res.json();
    return json.message;
  },
});

const Dogs = () => {
  return (
    <Suspense fallback={<div>Loading..</div>}>
      <div className='border border-primary rounded p-3 m-1'>
        <DogsLoaded />
      </div>
    </Suspense>
  );
};

const DogsLoaded = () => {
  const dogs = useRecoilValue(dogState);
  return (
    <div className='d-flex justify-content-around'>
      {dogs.map((dog) => (
        <img src={dog} width='150' alt='dog' className='rounded' />
      ))}
    </div>
  );
};
export default Dogs;
