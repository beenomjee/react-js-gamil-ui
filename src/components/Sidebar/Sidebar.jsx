import { Link } from 'react-router-dom'
import styles from './Sidebar.module.scss'
import { CiInboxIn } from 'react-icons/ci'
import { AiOutlinePlus } from 'react-icons/ai'

const links = [
    {
        name: 'Inbox',
        link: '/',
        icon: <CiInboxIn />,
        notifications: 4,
        selected: true
    },
    {
        name: 'Inbox',
        link: '/',
        icon: <CiInboxIn />,
        notifications: 0,
        selected: false
    },
    {
        name: 'Inbox',
        link: '/',
        icon: <CiInboxIn />,
        notifications: 0,
        selected: false
    },
    {
        name: 'Inbox',
        link: '/',
        icon: <CiInboxIn />,
        notifications: 0,
        selected: false
    },
    {
        name: 'Inbox',
        link: '/',
        icon: <CiInboxIn />,
        notifications: 0,
        selected: false
    },

]

const Sidebar = ({ toggleMessageOpen }) => {
    return (
        <div className={styles.sidebar}>
            <nav className={styles.top}>
                <div className={styles.top}>
                    <button onClick={toggleMessageOpen}>New Message</button>
                </div>
                <div className={styles.bottom}>
                    {
                        links.map((link, index) => (
                            <Link to={link.link} key={link + index} className={link.selected ? styles.selected : null}>
                                <div className={styles.left}>
                                    <span>{link.icon}</span>
                                    <span>{link.name}</span>
                                </div>
                                <div className={styles.right}>
                                    {
                                        link.notifications > 0 && (
                                            <span>{link.notifications}</span>
                                        )
                                    }
                                </div>
                            </Link>
                        ))
                    }
                </div>
            </nav>
            <div className={styles.bottom}>
                <div className={styles.heading}>
                    <h2><span>Labels</span></h2>
                    <span className={styles.icon}><AiOutlinePlus /></span>
                </div>
                <div className={styles.labels}>
                    <p><span></span><span>Custom Work</span></p>
                    <p><span></span><span>Partnership</span></p>
                    <p><span></span><span>In Progress</span></p>
                </div>
            </div>
        </div>
    )
}

export default Sidebar