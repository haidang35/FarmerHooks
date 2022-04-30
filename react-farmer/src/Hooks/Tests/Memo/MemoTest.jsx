import { memo } from "react";


function MemoTest({ count, onCount }) {
    console.log('re-render');
    return(
        <>
        <h1>
            Hello Memo Test {count} 
            <button onClick={onCount}>Click Me 2</button>
        </h1>
        </>
    )
}

export default memo(MemoTest)