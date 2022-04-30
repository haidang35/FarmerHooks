import { memo } from "react";


const UseCallBackDemo = ({ number, onChangeNumber }) => {
    console.log('re-render');
    return(
        <>
            <h1>Use CallBack Demo {number}</h1>
            <button onClick={onChangeNumber}>Increase Number</button>
        </>
    )
}

export default memo(UseCallBackDemo);