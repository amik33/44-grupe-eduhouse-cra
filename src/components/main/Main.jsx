import style from './Main.module.css';
import { Column } from './Column';

export function Main({tasksData, usersData}) {
 
    return (
        <main className={style.main} >
            <div className={style.course}>
                <h2>Course in Progress</h2>
                <h4>View All</h4>
            </div>
            <Column className={style.column}
                tasks={tasksData.filter(item => item)}
                users={usersData} />
            
        </main>
    );
}