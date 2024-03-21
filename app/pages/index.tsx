import React, { useState } from "react";

export default function Index() {
  const [count, setCount] = useState(0);
  return (
    <div>
      Index
      <div>
        {[1, 2, 3].map((item) => (
          <div key={item}>{item}</div>
        ))}
      </div>
      <button onClick={() => setCount(count + 1)}>{count}</button>
      <a href="/detail">to detail</a>
    </div>
  );
}
