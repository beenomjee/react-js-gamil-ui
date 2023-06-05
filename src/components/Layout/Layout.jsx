import { Outlet } from 'react-router-dom'
import Header from '../Header/Header'
import styles from './Layout.module.scss'
import Sidebar from '../Sidebar/Sidebar'
import NewMessage from '../NewMessage/NewMessage'
import { useStateWithCallback } from '../../hooks'


const Layout = () => {
    const [isSidebarOpen, setIsSidebarOpen] = useStateWithCallback(false);
    const [isMessageOpen, setIsMessageOpen] = useStateWithCallback(false);
    const toggleSidebar = () => {
        setIsSidebarOpen(p => !p, (newState) => {
            if (newState) {
                setIsMessageOpen(false);
            }
        });

    };
    const toggleMessageOpen = () => {
        setIsMessageOpen(p => !p, (newState) => {
            if (newState) {
                setIsSidebarOpen(false);
            }
        });

    };

    return (
        <div className={styles.layout}>
            <div className={styles.top}>
                <Header toggleSidebar={toggleSidebar} toggleMessageOpen={toggleMessageOpen} />
            </div>
            <div className={styles.bottom}>
                <div className={`${styles.sidebar} ${isSidebarOpen ? styles.open : null}`}>
                    <Sidebar toggleMessageOpen={toggleMessageOpen} />
                </div>
                <div className={styles.page}>
                    <div className={styles.wrapper}>
                        <div className={styles.container}><Outlet /></div>
                    </div>
                </div>
            </div>
            {isMessageOpen && <NewMessage toggleMessageOpen={toggleMessageOpen} />}
        </div>
    )
}

export default Layout