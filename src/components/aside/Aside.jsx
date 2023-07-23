import style from './Aside.module.css';
import { AsideBottom } from './AsideBottom';
import { AsideTop } from './AsideTop';

export function Aside() {
    return (
        <aside className={style.aside} >
            <div className={style.asideTitle}>
                <h1>Eduhouse</h1>
            </div>
            <AsideTop />
            <AsideBottom />
        </aside>
    );
}