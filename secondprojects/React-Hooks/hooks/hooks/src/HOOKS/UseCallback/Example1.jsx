import React, { useState, useCallback, memo } from "react";

const Button = memo(({ onClick, label }) => {
  console.log("Button rendered");
  return <button onClick={onClick}>{label}</button>;
});

function Example1 () {
  const [count, setCount] = useState(0);

  const increment = useCallback(() => {
    setCount(c => c + 1);
  }, []); // stable reference

  return (
    <div>
      <h1>Count: {count}</h1>
      <Button onClick={increment} label="Increment" />
    </div>
  );
}
 export default Example1
