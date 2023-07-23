import style from './Aside.module.css';
import { CgProfile } from 'react-icons/cg';
import { FiSettings } from 'react-icons/fi';
import { GrLogout } from 'react-icons/gr';

export function AsideBottom() {
    return (
        <div className={style.AsideBottom} >
            <div className={style.setting}>
                <h3>Setting</h3>
            </div>
            <div className={style.settingBottom}>
                <CgProfile size='1.3rem' /><p>Profile</p>
            </div>
            <div className={style.settingBottom}>
                <FiSettings size='1.3rem'/><p>Setting</p>
            </div>
            <div className={style.settingBottom}>
                <GrLogout size='1.3rem'/><p>Logout</p>
            </div>
        </div>
    );
}