import style from './Main.module.css';
import { AiOutlineLine } from 'react-icons/ai';
import  first   from '../../images/first.png';

export function TaskCard({data:{tag, task, stage}, user}) {
    const date ='Dec, 15, 2020';
  
    return (
        <article className={style.card} >
            <header className={style.progress}>
                <p>Start  {date}</p>
                <img src={first} alt="/" />
            </header>
            <div className={style.info}>
                <h2>{tag}</h2>
                <h4>{stage}</h4>
                <p>{task}</p>
            </div>
            <footer className={style.bottom}>
            <AiOutlineLine/>
            </footer>  
        </article>
    );
}
