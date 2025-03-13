import "../css/squares.css";
import {useState, useEffect} from "react";

export default function Squares() {
    const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16];
    const [act, setAct] = useState([]);
    
    const handleClick = (index) => {
        setAct((prev) => [...prev, index]);
    };
    
    useEffect(() => {
        if (act.length === 0) return;
        
        setTimeout(() => {
            act.forEach((index) => {
                setTimeout(() => {
                    const square = document.querySelector(`[id='${index}']`);
                    if (square) {
                        square.classList.add("active");
                    }
                }, 1000);
            });
            setAct([]);
        }, 2000);
        
        
    }, [act]);
    
    return (
        <div className={'flex'}>
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
            <div onClick={() => {
                setAct([]);
                document.querySelectorAll(".square").forEach(square => {
                    square.classList.remove("active");
                });
            }} className="btn">Reset</div>
        </div>
    
    );
}