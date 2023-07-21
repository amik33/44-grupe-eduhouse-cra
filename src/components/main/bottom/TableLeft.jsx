import style from './Bottom.module.css';


export function TableLeft ({data}) {
    return (
        <div className={style.tableLeft}>
            <img src="#" alt="/" />
            <p>UI/UX Design</p>
            <p>18 course</p>
            <p>1200 Follower</p>
            <button>Foolow</button>
        </div>
    );
}