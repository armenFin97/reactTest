import '../css/counter.css';
import { useState } from "react";


export default function Counter() {
    const [count, setCount] = useState(0);
    
    
    const calculate = (value) => {
        setCount((prevCount) => {
            if (value === 'dec') {
                return prevCount > 0 ? prevCount - 1 : 0;
            } else if (value === 'inc') {
                return prevCount < 10 ? prevCount + 1 : 10;
            }
            return prevCount;
        });
    };
    
    return (
        <div className="counter">
            <div>
                <p className="counter__txt">Counter: {count}</p>
            </div>
            <div className={'counter__btns'}>
                <div>
                    <button className={'btn'} onClick={() => {
                        calculate('dec')
                    }}>Decrease</button>
                </div>
                <div>
                    <button className={'btn'} onClick={() => {
                        calculate('inc')
                    }}>Increase</button>
                </div>
            </div>
        </div>
    
    )
}