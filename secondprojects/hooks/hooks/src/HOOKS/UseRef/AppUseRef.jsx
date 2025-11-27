import { useRef } from 'react';

function AppUseRef() {
  const countRef = useRef(0);

  const handleClick = () => {
    countRef.current++;
    console.log(`Clicked ${countRef.current} times`);
    alert(`Clicked ${countRef.current} times`);
  };

  return <button onClick={handleClick}>Click me</button>;
}
export default AppUseRef
