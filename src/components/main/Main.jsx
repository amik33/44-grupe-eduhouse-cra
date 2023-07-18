import { BsBellFill } from 'react-icons/bs';
import { PiMagnifyingGlassLight } from 'react-icons/pi';
import style from './Main.module.css';


export function Main() {
    return (
        <main className={style.main} >
            <header className={style.header}>
                <form className={style.right} >
                    <input className={PiMagnifyingGlassLight} placeholder='Search Hear' type= 'Search' />
                </form>
                <img className={style.logo} src="/" alt='#' />
                <div className={style.left}>
                    <BsBellFill size='1.5rem' color='#aaa' />
                    <img src="/" alt="/" />
                </div>
            </header>
        </main>
    );
}