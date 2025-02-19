import React from "react";

function DecrementBtn({ count, setCount }) {
  return (
    <div>
      <button onClick={() => setCount(count - 1)}>-</button>
    </div>
  );
}

export default DecrementBtn;
