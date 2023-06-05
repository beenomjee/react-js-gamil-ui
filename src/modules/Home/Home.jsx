import styles from './Home.module.scss';
import { MdOutlineRefresh, MdOutlineCheckBoxOutlineBlank, MdOutlineCheckBox, MdLink } from 'react-icons/md'
import { CiMenuKebab } from 'react-icons/ci'
import { GrFormPrevious, GrFormNext, } from 'react-icons/gr'
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { AiFillStar, AiOutlineStar } from 'react-icons/ai'

const Header = () => {
    const [isCheckboxSelected, setIsCheckboxSelected] = useState(false);
    return (
        <div className={styles.header}>
            <div className={styles.left}>
                <button onClick={() => setIsCheckboxSelected(p => !p)}>{isCheckboxSelected ? <MdOutlineCheckBox /> : <MdOutlineCheckBoxOutlineBlank />}</button>
                <button><MdOutlineRefresh /></button>
                <button><CiMenuKebab /></button>
            </div>
            <div className={styles.right}>
                <div className={styles.left}>
                    <span>1-50 of 230</span>
                </div>
                <div className={styles.right}>
                    <button><GrFormPrevious /></button>
                    <button><GrFormNext /></button>
                </div>
            </div>
        </div>
    )
}

const Message = ({ name }) => {
    const [isChecked, setIsChecked] = useState(false);
    const [isStared, setIsStared] = useState(false);
    return (
        <Link to="/message" className={styles.message}>
            <div className={styles.left}>
                <button onClick={e => { e.preventDefault(); setIsChecked(p => !p) }}>{isChecked ? <MdOutlineCheckBox /> : <MdOutlineCheckBoxOutlineBlank />}</button>
                <button onClick={e => { e.preventDefault(); setIsStared(p => !p) }}>{isStared ? <AiFillStar /> : <AiOutlineStar />}</button>
                <img src="/avatar.png" alt="AVATAR" />
                <p>{name.length > 15 ? `${name.slice(0, 15)}.` : name}</p>
            </div>
            <div className={styles.right}>
                <p className={styles.left}>
                    <span>Creative Director Resume</span>
                    <span></span>
                    <span>You chose to start developing in Test Mode, which left your Cloud Firestore database completely open to the Internet. Because your app was vulnerable to attackers, your Firestore security rules were configured to stop allowing requests after the first 30 days.</span>
                </p>
                <p className={styles.right}>
                    <span><MdLink /></span>
                    <span>10:45</span>
                </p>
            </div>
        </Link>
    )
}

const Bottom = () => {
    return (
        <div className={styles.bottomComp}>
            {
                Array(50).fill(0).map((_, i) => (
                    <Message key={i} name={'Muneeb Jeeasdfsadfadsf'} />
                ))
            }
        </div>
    )
}


const Home = () => {
    return (
        <div className={styles.container}>
            <div className={styles.top}><Header /></div>
            <div className={styles.bottom}><Bottom /></div>
        </div>
    )
}

export default Home