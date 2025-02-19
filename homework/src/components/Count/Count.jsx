import React, { useState } from "react";
import IncrementBtn from "../IncrementBtn/IncrementBtn";
import DecrementBtn from "../DecrementBtn/DecrementBtn";

function Count() {
  const [count, setCount] = useState(0);

  return (
    <>
      <p>{count}</p>
      <IncrementBtn count={count} setCount={setCount} />
      <DecrementBtn count={count} setCount={setCount} />
    </>
  );
}

export default Count;
