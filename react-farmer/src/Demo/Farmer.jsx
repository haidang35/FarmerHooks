import { useState, useEffect } from "react";
import Content from "./Content";
import Countdown from "./Countdown";
import DemoRef from "./DemoRef";
import UseCallBackDemo from "../Demo/UseCallBackDemo"
import { useCallback } from "react";

const Farmer = () => {
  const [count, setCount] = useState(0);
  const [isShow, setIsShow] = useState(false);
  const [number, setNumber] = useState(0);

  const handleCount = () => {
    setCount(count + 1);
  };

  const handleNumber = useCallback( () => {
    setNumber(number => number + 1);
  }, []);

  const handleShow = () => {
    setIsShow(!isShow);
  };

  return (
    <>
      <div  style={{ height: "2000px" }}>
        <h1>Hello Farmer</h1>
        <h1>Count: {count}</h1>
        <h1>Number: {number}</h1>
        <button onClick={handleCount}>Click me</button>
        <button onClick={handleNumber}>Click me for number</button>
        <button onClick={handleShow}>Toggle</button>
        {isShow && <UseCallBackDemo number={number} onChangeNumber={handleNumber}/>}
      </div>
    </>
  );
};

export default Farmer;
