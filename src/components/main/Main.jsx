import style from './Main.module.css';
import { Column } from './Column';
import { Bottom } from './bottom/Bottom';


export function Main( {tasksData, usersData, mentorsData} ) {
 
    return (
        <main className={style.main} >
            <div className={style.course}>
                <h2>Course in Progress</h2>
                <h4>View All</h4>
            </div>
            <Column 
                tasks={tasksData.filter(item => item)}
                users={usersData} />
            <Bottom 
                mentors={mentorsData.filter(item => item.name === 'mentors')} />
        </main>
    );
}