import { useState } from "react";
import { useEffect } from "react";
import { useRef } from "react";

//* Thứ tự render component của React
//* 1. Khởi tạo state, hàm, ...
//* => Chạy useEffect() (Chạy khi component được mount)
//* 2. Render UI
//* 3. Chạy useEffect 1 lần nữa
//* 4. Render lại toàn bộ component

const DemoRef = () => {

    const [count, setCount] = useState(60);
    const timerId = useRef(0);

    useEffect(() => {
        console.log('re-render');
        const handleScroll = () => {
        }

        window.addEventListener('scroll', handleScroll)
        return () => {
            window.removeEventListener('scroll', handleScroll);
        }
    }, [count])

    const handleStart = () => {
        timerId.current = setInterval(() => {
            setCount(count => count - 1)
        }, 1000)
        console.log('start', timerId.current);
    }

    const handleStop = () => {
        console.log('stop', timerId.current);
        clearInterval(timerId.current);
    }


    return(
        <>
            <h1>Demo Ref</h1>
            <h1>COunt: {count}</h1>
            <button onClick={handleStart}>Start</button>
            <button onClick={handleStop}>Stop</button>
        </>
    )
}

export default DemoRef;