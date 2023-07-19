import style from './Header.module.css';
// import  cap  from '../../images/cap.png'
import  firstMember  from '../../images/firstMember.png'
import { BsBellFill } from 'react-icons/bs';
// import { PiMagnifyingGlassLight } from 'react-icons/pi'

export function Header() {
    return (
        <header className={style.header}>
            <form className={style.right} >
                <input placeholder='Search here' type= 'Search' />
            </form>
            {/* <img className={style.cap} src={cap} alt='#' /> */}
            <div className={style.left}>
                <BsBellFill size='1rem' color='#aaa' />
                <img src={firstMember} alt="/" />
            </div>
        </header>
       
    );
}