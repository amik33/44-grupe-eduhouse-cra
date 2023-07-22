import style from './Bottom.module.css';


export function TableLeft ( {popular: {categories, stats}} ) {
 
    return (
        <div className={style.tableLeft}>
            <div className={style.title}>   
                <h3>{categories}</h3>
                <p>{stats}</p>
            </div>
            <img src="#" alt="/" />
        </div>
    );
}