import style from './Main.module.css';
import { Sheets } from './Sheets';


export function Main({data, title}) {
 
    return (
        <main className={style.main} >
            <div className={style.course}>
                <h3>Course in Progress</h3>
                <h6>View All</h6>
            </div>
            <Sheets title='{title}' tasks={data.filter(item => item.stage === 'Learn App')} />
            <Sheets title='{title}' tasks={data.filter(item => item.stage === 'Learn Web')} />
            <Sheets title='{title}' tasks={data.filter(item => item.stage === 'Learn Typography')} />
            <Sheets title='{title}' tasks={data.filter(item => item.stage === 'Update')} />
        </main>
    );
}