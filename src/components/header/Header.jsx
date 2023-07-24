import style from './Header.module.css';
import { BiBell } from 'react-icons/bi';
// import  cap  from '../../images/cap.png';
import firstMember from '../../images/firstMember.png';
// import {PiMagnifyingGlassLight  } from 'react-icons/pi';


export function Header() {
    return (
        <header className={style.header}>
            <form className={style.right} >
            {/* < PiMagnifyingGlassLight /> */}
            <input placeholder= 'Search here' type= 'Search' />
            </form>
            {/* <img className={style.cap} src={cap} alt='#' /> */}
            <div className={style.left}>
                <BiBell size='1.2rem' color='#aaa' />
                <img src={firstMember} alt="/" />
            </div>
        </header>
       
    );
}