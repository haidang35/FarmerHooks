import { useCallback } from "react";
import { useState } from "react";
import MemoTest from "./MemoTest";

function MemoParent() {
  const [count, setCount] = useState(0);

  const handleCount = useCallback(() => {
    setCount((prevCount) => prevCount + 1);
  }, []);
  return (
    <>
      <h1>
        Hello Memo Parent {count}
        <MemoTest onCount={handleCount} />
        {/* <button onClick={handleCount}>Click me</button> */}
      </h1>
    </>
  );
}

export default MemoParent;
