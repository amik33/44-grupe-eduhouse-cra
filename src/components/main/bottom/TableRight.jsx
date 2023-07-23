import style from './Bottom.module.css';
import { MdOutlineLocalPostOffice } from 'react-icons/md';
import { BsThreeDotsVertical } from 'react-icons/bs';

export function TableRight ({mentors: {username, course, stats, follower, img}}) {

    return (
        <div className={style.tableRight}>
            <img src={`./img/mentors/${img}`} alt="/" />
            <h3>{username}</h3>
            <p>{course}</p>
            <p>{stats}</p>
            <p>{follower}</p>
            <button className={style.button}>Foolow</button>
            <MdOutlineLocalPostOffice />
            <BsThreeDotsVertical />
        </div>
    );
}