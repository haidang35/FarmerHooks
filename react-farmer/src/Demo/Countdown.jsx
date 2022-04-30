import { useEffect } from "react";
import { useState } from "react";

const Countdown = () => {
  const [count, setCount] = useState(60);

  useEffect(() => {
    const timerId = setInterval(() => {
      setCount((count) => count - 1);
    }, 1000);

    return () => {
      clearInterval(timerId);
    };
  }, []);

  return (
    <>
      <h1>Hello coundown {count}</h1>
    </>
  );
};

export default Countdown;
