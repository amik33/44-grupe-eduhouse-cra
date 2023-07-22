import style from './Bottom.module.css';
import { TableLeft } from './TableLeft';
import { TableRight } from './TableRight';


export function Bottom ( {mentors} ) {
    return (
        <div className={style.mentors}>
            <div className={style.bottomLeft}>
                <div className={style.popular}>
                    <h3>Popular Categories</h3>
                </div>
                { mentors.map(mentorsObj => <TableLeft key={mentorsObj.Id}
                mentors={mentorsObj}  />) }
            </div>
            <div className={style.bottomRight}>
                <div className={style.top}>
                    <h3>Top Mentors</h3>
                    <p>View All</p>
                </div>
                { mentors.map(mentorsObj => <TableRight key={mentorsObj.Id}
                 mentors={mentorsObj}  />) }
            </div>
        </div>
    );
}