import style from './Bottom.module.css';
import { TableLeft } from './TableLeft';
import { TableRight } from './TableRight';
import { useState } from 'react';
import { CreateTaskCard } from '../../createTaskCard/CreateTaskCard';
import { BiUserMinus } from 'react-icons/bi';


export function Bottom ( {mentors, popular}) {

    const [isFormVisible, setFormVisibility] = useState(false);

    function getUser(task) {
        for (const mentor of mentors) {
            if (mentor.id === task.mentorsId) {
                return mentor;
            }
        }

        return {
            name: 'Anoni-mouse',
            img: <BiUserMinus size='1.5rem' />,
        };
    }

    function showForm() {
        setFormVisibility(true);
    }

    function hideForm() {
        setFormVisibility(false);
    }
   
    return (
        <div className={style.mentors}>
            <div className={style.bottomLeft}>
                <div className={style.popular}>
                    <h3>Popular Categories</h3>
                </div>
                { popular.map(popularObj => <TableLeft key={popularObj.Id}
                popular={popularObj} />) }
            </div>
            <div className={style.bottomRight}>
                <div className={style.top}>
                    <h3>Top Mentors</h3>
                    <p>View All</p>
                </div>
                    { mentors.map(mentorsObj => <TableRight key={mentorsObj.Id}
                    mentors={mentorsObj}
                    user={getUser(mentorsObj)} />) }
                <div className={style.addTask}>
                    {isFormVisible ? <CreateTaskCard onDoneFunc={hideForm} /> : <div onClick={showForm}><h4>+ Add task</h4></div> }
                </div>
            </div>
        </div>
    );
}