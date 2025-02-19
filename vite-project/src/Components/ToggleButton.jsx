import {useState} from "react";
import '../css/togglebutton.css'

export default function ToggleButton() {
    const [toggle, setToggle] = useState(false);
    
    const handleClick = () => {setToggle(!toggle);};
    
    return (
        <div>
            {/*{toggle ? (<h2>My test text</h2>) : null}*/}
            <h2 className={!toggle || 'none'}>My test text</h2>
            <button className={'btn'} onClick={handleClick}>{!toggle ? 'Hide':'Show'}</button>
        </div>
    )
}