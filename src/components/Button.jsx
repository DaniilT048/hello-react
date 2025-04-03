import { useState } from "react";
import './Button.css'

function Button ({start, text}) {
    const [count, setCount] = useState(start);

    const onButtonClick = () => {
        setCount(count + 1);

    }
return (<button className='buttonForText' onClick={onButtonClick}>{text} {count}</button>)


}


export default Button;