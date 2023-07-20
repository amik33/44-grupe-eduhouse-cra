import style from './Main.module.css';
import { BsThreeDots } from 'react-icons/bs';


export function TaskCard({data:{tag, task}, user}) {
    const date ='Dec, 15, 2020';
    return (
        <article className={style.card} >
            <header className={style.progress}>
                <p>Start  {date}</p>
                <img src='/' alt='Icon' />
            </header>
            <div className={style.Info}>
                <h3>{tag}</h3>
                <p>{task}</p>
                <p>{task}</p>
            </div>
            <footer className={style.Bottom}>
            <BsThreeDots />
            </footer>  
        </article>
    );
}
