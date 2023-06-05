import { useEffect, useRef, useState } from 'react';
import styles from './NewMessage.module.scss';
import { AiFillCloseCircle, AiOutlineClose, AiOutlineBold } from 'react-icons/ai'
import { BsFillSendFill } from 'react-icons/bs'
import { MdLink } from 'react-icons/md';
import { useClickOutside } from '../../hooks';

const NewMessage = ({ toggleMessageOpen }) => {
    const ref = useRef(null);
    const [isFirstOpen, setIsFirstOpen] = useState(true);
    useClickOutside(ref, () => {
        if (!isFirstOpen) { toggleMessageOpen(false) }
    })
    useEffect(() => {
        setIsFirstOpen(false);
    }, [])
    return (
        <div ref={ref} className={styles.newMessage}>
            <div className={styles.top}>
                <h2>New Message</h2>
                <button onClick={toggleMessageOpen}><AiFillCloseCircle /></button>
            </div>
            <label className={styles.to}>
                <p>
                    <span>To</span>
                    <span className={styles.buttons}>
                        <button>Cc</button>
                        <button>Bcc</button>
                    </span>
                </p>
                <div>
                    <span>
                        <img src="/avatar.png" alt="AVATAR" />
                        <span>example@gmail.com</span>
                        <button><AiOutlineClose /></button>
                    </span>
                    <input type="text" />
                </div>
            </label>
            <label className={styles.subject}>
                <span>Subject</span>
                <input type="text" placeholder='Your message subject' />
            </label>
            <label className={styles.message}>
                <span>Message</span>
                <div>
                    <textarea placeholder='Type something'></textarea>
                    <div className={styles.buttons}>
                        <button><AiOutlineBold /></button>
                        <button><AiOutlineBold /></button>
                        <button><AiOutlineBold /></button>
                        <span className={styles.divide}></span>
                        <button><AiOutlineBold /></button>
                        <button><AiOutlineBold /></button>
                        <button><AiOutlineBold /></button>
                    </div>
                </div>
            </label>
            <div className={styles.last}>
                <div className={styles.left}>
                    <button><MdLink /></button>
                    <button><MdLink /></button>
                    <button><MdLink /></button>
                </div>
                <button><span><BsFillSendFill /></span><span>Send Message</span></button>
            </div>
        </div>
    )
}

export default NewMessage