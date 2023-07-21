import style from './Bottom.module.css';


export function TableLeft ({mentors: {course, stats}}) {
    return (
        <div className={style.tableLeft}>
            <img src="#" alt="/" />
            <p>{course}</p>
            <p>{stats}</p>
        </div>
    );
}