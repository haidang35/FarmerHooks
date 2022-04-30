import { useLayoutEffect } from "react";
import { useEffect } from "react";
import { useState } from "react";

//? useLayoutEffect
//* 1. Update lại state
//* 2. Cập nhật DOM
//* 3. Gọi cleanup function 
//* 4. Gọi useLayoutEffect callback
//* 5. Render lại UI

const UseLayoutEffectTest = () => {
    const [count, setCount] = useState(0);

    useLayoutEffect(() => {
        if(count > 3)
        setCount(0)

    }, [count])


    const handleCount = () => {
        setCount(count + 1);
    }
    return(
        <>
            <h1>{count}</h1>
            <button onClick={handleCount}>Count</button>
        </>
    )
}
export default UseLayoutEffectTest;