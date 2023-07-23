import style from './Bottom.module.css';


export function TableLeft ( {popular: {categories, stats, icon}} ) {

    // let img = <img src={`./img/users/${user.img}`} alt='' />;
    // if (typeof user.img !== 'string') {
    //     img = user.img;
    // }
 
    return (
        <div className={style.tableLeft}>
            <div className={style.title}>   
                <h3>{categories}</h3>
                <p>{stats}</p>
            </div>
            {/* {img} */}
            <img src={`./img/popular/${icon}`} alt="/" />
        </div>
    );
}