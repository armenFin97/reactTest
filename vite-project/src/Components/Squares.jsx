import "../css/squares.css";
import { useState, useEffect } from "react";

export default function Squares() {
    const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16];
    const [act, setAct] = useState([]);
    const [timeoutId, setTimeoutId] = useState(null);
    const [isReady, setIsReady] = useState(false);
    const [firstTime, setfirstTime] = useState(false);
    
    const handleClick = (index) => {
        if (firstTime) return;
        
        setAct((prev) => [...prev, index]);
        
        if (timeoutId) {
            clearTimeout(timeoutId);
        }
        
        const newTimeout = setTimeout(() => {
            setIsReady(true);
            setfirstTime(true);
        }, 2000);
        
        setTimeoutId(newTimeout);
    };
    
    useEffect(() => {
        if (isReady && act.length > 0) {
            act.forEach((index, i) => {
                setTimeout(() => {
                    const square = document.getElementById(index);
                    if (square) {
                        square.classList.add("active");
                    }
                }, 1000);
            });
            setAct([]);
            setIsReady(false);
        }
    }, [isReady]);
    
    const handleReset = () => {
        setAct([]);
        setfirstTime(false);
        document.querySelectorAll(".square").forEach(square => {
            square.classList.remove("active");
        });
        if (timeoutId) {
            clearTimeout(timeoutId);
        }
    };
    
    return (
        <div className="flex">
            <div className="wrapper">
                {array.map(index => (
                    <div
                        onClick={() => handleClick(index)}
                        key={index}
                        className="square"
                        id={index}
                    ></div>
                ))}
            </div>
            <div onClick={handleReset} className="btn">Reset</div>
        </div>
    );
}