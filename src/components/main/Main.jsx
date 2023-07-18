import  cap  from '../../images/cap.png'
import  firstMember  from '../../images/firstMember.png'
import { BsBellFill } from 'react-icons/bs';
import { PiMagnifyingGlassLight } from 'react-icons/pi';
import style from './Main.module.css';



export function Main() {
    return (
        <main className={style.main} >
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
            <section className={style.course}>
                <div className={style.title}>
                    <h1>Course in progress</h1>
                    <h2>View all</h2>
                </div>
                <div className={style.progress}>
                    <div className={style.apps}>
                        <BsBellFill size='1rem' color='#aaa' />
                        <BsBellFill size='1rem' color='#aaa' />
                        <h1>App design</h1>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem</p>
                    </div>
                    <div className={style.web}>
                        <BsBellFill size='1rem' color='#aaa' />
                        <BsBellFill size='1rem' color='#aaa' />
                        <h1>Web design</h1>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem</p>
                    </div>
                    <div className={style.dashboard}>
                        <BsBellFill size='1rem' color='#aaa' />
                        <BsBellFill size='1rem' color='#aaa' />
                        <h1>Dashboard</h1>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem</p>
                    </div>
                    <div className={style.upgrade}>
                        <BsBellFill size='1rem' color='#aaa' />
                        <BsBellFill size='1rem' color='#aaa' />
                        <h1>Upgrade</h1>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem</p>
                    </div>
                </div>
            </section>
        </main>
    );
}