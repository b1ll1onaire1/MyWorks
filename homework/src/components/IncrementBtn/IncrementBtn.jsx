import React from "react";

function IncrementBtn({ count, setCount }) {
  return (
    <div>
      <button onClick={() => setCount(count + 1)}>+</button>
    </div>
  );
}

export default IncrementBtn;
