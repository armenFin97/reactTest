import '../css/counter.css';
import { useState } from "react";


export default function Counter() {
    const [count, setCount] = useState(0);
    
    
    const increaseCount = () => setCount(count + 1)
    
    const decreaseCount = () => setCount(count - 1)
    
    
    return (
        <div className="counter">
            <div>
                <p className="counter__txt">Counter: {count}</p>
            </div>
            <div className={'counter__btns'}>
                <div>
                    <button className={'btn'} onClick={decreaseCount}>Decrease</button>
                </div>
                <div>
                    <button className={'btn'} onClick={increaseCount}>Increase</button>
                </div>
            </div>
        </div>
    
    )
}