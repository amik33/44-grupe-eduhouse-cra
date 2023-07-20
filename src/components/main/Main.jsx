import style from './Main.module.css';
import { Column } from './Column';

export function Main({tasksData, usersData}) {
 
    return (
        <main className={style.main} >
            <div className={style.course}>
                <h3>Course in Progress</h3>
                <h6>View All</h6>
            </div>
            <Column className={style.column}
                tasks={tasksData.filter(item => item.stage)}
                users={usersData} />
            
        </main>
    );
}