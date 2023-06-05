import { Link } from 'react-router-dom'
import styles from './Header.module.scss'
import { MdSearch, MdHelpOutline, MdSettings, MdGridView } from 'react-icons/md'
import { BsFilterRight } from 'react-icons/bs'
import { FiEdit2 } from 'react-icons/fi'
import { HiOutlineMenuAlt2 } from 'react-icons/hi'

const Header = ({ toggleSidebar, toggleMessageOpen }) => {
    return (
        <div className={styles.header}>
            <div className={styles.left}>
                <div className={styles.left}>
                    <button onClick={toggleSidebar}><HiOutlineMenuAlt2 /></button>
                    <Link to="/">
                        <span>M</span>
                        <span>GMAIL</span>
                    </Link>
                </div>
                <button onClick={toggleMessageOpen}><span>Compose</span><span><FiEdit2 /></span></button>
            </div>
            <div className={styles.right}>
                <div className={styles.left}>
                    <input type="text" placeholder='Search mail' />
                    <button><MdSearch /></button>
                    <button><BsFilterRight /></button>
                </div>
                <div className={styles.right}>
                    <button><MdHelpOutline /></button>
                    <button><MdSettings /></button>
                    <button><MdGridView /></button>
                    <button>M</button>
                </div>
            </div>
            <div className={styles.bottom}>
                <input type="text" placeholder='Search mail' />
                <button><MdSearch /></button>
                <button><BsFilterRight /></button>
            </div>
        </div>

    )
}

export default Header