import style from './Main.module.css';
import { Sheets } from './Sheets';


export function Column() {
    return (
        <div className={style.column}>
            { Sheets.map(sheetsObj => <sheets key={sheetsObj.id} data={sheetsObj} />) }
        </div>
    );
}