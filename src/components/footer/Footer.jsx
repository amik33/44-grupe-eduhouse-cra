import style from './Footer.module.css';


export function Footer () {
    return (
        <footer className={style.footer}>
            <div className={style.left}>
                <h3>UI/UX Design</h3>
                <p>18 course</p>
                <img src="#" alt="/" />
            </div>
            <div>
                <img src="#" alt="/" />
                <p>UI/UX Design</p>
                <p>18 course</p>
                <p>1200 Follower</p>
                <button>Foolow</button>
            </div>
        </footer>
    );
}