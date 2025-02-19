import {useState} from "react";
import '../css/togglebutton.css'

export default function ToggleButton() {
    const [txt, setTxt] = useState('');
    
    const randomText = () => setTxt(crypto.randomUUID())
    
    return (
        <div>
            <h2>{txt}</h2>
            <button className={'btn'} onClick={randomText}>Random Text</button>
        </div>
    )
}