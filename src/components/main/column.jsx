import style from './Main.module.css';
import { TaskCard } from './TaskCard';


export function Column( {tasks} ) {
    return (
        <div className={style.column}>
            { tasks.map(taskObj => <TaskCard key={taskObj.id} 
            data={taskObj}
            user={taskObj} />) }
        </div>
    );
}