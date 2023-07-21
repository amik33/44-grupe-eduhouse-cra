import style from './Bottom.module.css';


export function TableRight ({mentors: {username, course, stats, follower}}) {

    return (
        <div className={style.tableRight}>
            <img src="#" alt="/" />
            <h3>{username}</h3>
            <p>{course}</p>
            <p>{stats}</p>
            <p>{follower}</p>
            <button>Foolow</button>
        </div>
    );
}