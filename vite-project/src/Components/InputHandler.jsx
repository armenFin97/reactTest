import { useState } from "react";
import '../css/inputhandler.css';

export default function InputHandler() {
    const [txt, setTxt] = useState("");
    
    const renderTxt = (value) => setTxt(value)
    return (
        <div>
            <div>
                <input className={'input'} onChange={(e) => {
                    renderTxt(e.target.value)}} type={'text'}/>
            </div>
            <div>
                <h1>{txt || 'Input is empty'}</h1>
            </div>
        </div>
    )
}