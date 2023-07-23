import style from './Aside.module.css';
import { AiFillHome } from 'react-icons/ai'
import { BsBook } from 'react-icons/bs'
import { RiHeart2Line } from 'react-icons/ri';
import { GrNote } from 'react-icons/gr';
import { GrNotes } from 'react-icons/gr';
import { PiDotsThreeCircle } from 'react-icons/pi'

export function AsideTop() {
    return (
        <div className={style.asideTop} >
            <div className={style.meniu}>
                <h3>Main meniu</h3>
            </div>
            <div className={style.topMeniuColor}>
                <AiFillHome size='1.3rem' color='#f3c861'/><p>Overview</p>
            </div>
            <div className={style.topMeniu}>
                <BsBook size='1.3rem' /><p>E-book</p>
            </div>
            <div className={style.topMeniu}>
                <RiHeart2Line size='1.5rem' /><p>My Courses</p>
            </div>
            <div className={style.topMeniu}>
                <GrNote size='1.2rem' /><p>Purchase Course</p>
            </div>
            <div className={style.topMeniu}>
                <GrNotes size='1.2rem' /><p>Completed Courses</p>
            </div>
            <div className={style.topMeniu}>
                <PiDotsThreeCircle size='1.5rem' /><p>Commnuity</p>
            </div>
        </div>
    );
}