import style from './Bottom.module.css';
import { MdOutlineLocalPostOffice } from 'react-icons/md';
import { BsThreeDotsVertical } from 'react-icons/bs';

export function TableRight ({mentors: {username, course, stats, follower}, user}) {

    // let img = <img src={`./img/users/${user.img}`} alt='' />;
    // if (typeof user.img !== 'string') {
    //     img = user.img;
    // }

    return (
        <div className={style.tableRight}>
            <img src="#" alt="/" />
            {/* {img} */}
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