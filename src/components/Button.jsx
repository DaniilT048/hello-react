import { useState } from "react";
import './Button.css'

function Button ({start, textButton}) {
    const [count, setCount] = useState(start);

    const onButtonClick = () => {
        setCount(count + 1);
    }
return (<button className='buttonForText' onClick={onButtonClick}>{textButton} {count}</button>)


}


export default Button;