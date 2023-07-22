import style from './Bottom.module.css';


export function TableLeft ({mentors: {course, stats}}) {
    return (
        <div className={style.tableLeft}>
            <div className={style.title}>   
                <h3>{course}</h3>
                <p>{stats}</p>
            </div>
            <img src="#" alt="/" />
        </div>
    );
}