import style from './Main.module.css';
import { AiOutlineLine } from 'react-icons/ai';


export function TaskCard({data:{tag, task, stage}, user}) {
    const date ='Start Dec, 15, 2020';
    let img = <img src={`./img/users/${user.img}`} alt='' />;
    if (typeof user.img !== 'string') {
        img = user.img;
    }
  
    return (
        <article className={style.card} >
            <header className={style.progress}>
                <p>{date}</p>
                {img}
            </header>
            <div className={style.info}>
                <h2>{tag}</h2>
                <h4>{stage}</h4>
                <p>{task}</p>
            </div>
            <footer className={style.btn}>
            <AiOutlineLine/>
            </footer>  
        </article>
    );
}
