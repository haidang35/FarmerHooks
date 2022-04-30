import { useRef } from "react";
import { useEffect } from "react";
import { useState } from "react";

const UseRefTest = () => {
  const [count, setCount] = useState(60);

  const timer = useRef();
  const h1Ref = useRef();
  const divRef = useRef([]);

  console.log(divRef);

  useEffect(() => {
    // console.log(divRef.current.getBoundingClientRect());
  }, []);

  const handleStart = () => {
    let timerId = setInterval(() => {
      setCount((count) => count - 1);
    }, 1000);
    timer.current = timerId;
    console.log("start", timer);
  };

  const handleStop = () => {
    clearInterval(timer.current);
    console.log("stop", timer);
  };

  const colorDivs = [
    {
      id: 1,
      color: "blue",
      width: 300,
    },
    {
      id: 2,
      color: "red",
      width: 300,
    },
    {
      id: 3,
      color: "green",
      width: 300,
    },
  ];

  const handleRed = () => {
    const position = divRef.current[2].getBoundingClientRect();
    window.scrollTo(position.x, position.y);
  };

  const handleBlue = () => {
    const position = divRef.current[1].getBoundingClientRect();
    window.scrollTo(position.x, position.y);
  };

  const handleGreen = () => {
    const position = divRef.current[3].getBoundingClientRect();
    window.scrollTo(position.x, position.y);
  };

  return (
    <>
      <h1 ref={h1Ref}>{count}</h1>
      <button onClick={handleStart}>Start</button>
      <button onClick={handleStop}>Stop</button>
      <div>
        <button onClick={handleRed}>Red</button>
        <button onClick={handleBlue}>Blue</button>
        <button onClick={handleGreen}>Green</button>
      </div>
      <div>
        {colorDivs.map((div, i) => (
          <div
            key={div.id}
            ref={(el) => (divRef.current[div.id] = el)}
            style={{
              backgroundColor: div.color,
              width: div.width,
              height: 400,
              marginTop: "1rem",
            }}
          ></div>
        ))}
      </div>
    </>
  );
};
export default UseRefTest;
