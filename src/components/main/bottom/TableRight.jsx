import style from './Bottom.module.css';
import { MdOutlineLocalPostOffice } from 'react-icons/md';
import { BsThreeDotsVertical } from 'react-icons/bs';

export function TableRight ({mentors: {username, course, stats, follower}}) {

    return (
        <div className={style.tableRight}>
            <img src="#" alt="/" />
            <h4>{username}</h4>
            <p>{course}</p>
            <p>{stats}</p>
            <p>{follower}</p>
            <button className={style.button}>Foolow</button>
            <MdOutlineLocalPostOffice />
            <BsThreeDotsVertical />
        </div>
    );
}