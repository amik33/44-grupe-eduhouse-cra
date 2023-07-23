import style from './CreateTaskCard.module.css';

console.log(style);

export function CreateTaskCard({onDoneFunc}) {
    function formDone() {
        onDoneFunc();
    }

    return (
        <div className={style.formDone}>
            <button className={style.button} onClick={formDone}>Done</button>
            <p>CREATE TASK CARD</p>
        </div>
    );
} 