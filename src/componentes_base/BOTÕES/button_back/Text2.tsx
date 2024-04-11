import { WiDirectionLeft } from "react-icons/wi";
import  { Link } from 'react-router-dom';
import './Text2.css'
 
export function Btx() {
    return (
        <Link to='/Home' className="bxt_back">
            <WiDirectionLeft/>
        </Link>
    )
}

export function Btx2() {
    return (
        <Link to='/' className="bxt_back2">
            <WiDirectionLeft/>
        </Link>
    )
}
