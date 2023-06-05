import styles from './Message.module.scss';
import { HiArrowSmallRight, HiArrowSmallLeft, HiArrowUturnLeft, HiOutlineArrowUturnRight } from 'react-icons/hi2'
import { BsFillBookmarkFill, BsFillSendFill } from 'react-icons/bs'
import { MdDelete, MdLink, MdOutlineFileDownload } from 'react-icons/md'
import { AiFillPrinter, AiOutlineBold, AiOutlineClose } from 'react-icons/ai'
import { Link, useNavigate } from 'react-router-dom';
import { BsFileEarmarkPdfFill, BsFillReplyFill } from 'react-icons/bs'
import { useEffect, useRef, useState } from 'react';
import { useClickOutside } from '../../hooks';

const Reply = ({ setIsReplaying }) => {
    const ref = useRef(null);
    const [isFirstOpen, setIsFirstOpen] = useState(true);
    useClickOutside(ref, () => {
        if (!isFirstOpen) { setIsReplaying(false) }
    })
    useEffect(() => {
        setIsFirstOpen(false);
    }, [])
    return (
        <div ref={ref} className={styles.reply}>
            <div className={styles.replyContainer}>
                <div className={styles.top}>
                    <div className={styles.left}>
                        <span>To:</span>
                        <span className={styles.email}>
                            <img src="/avatar.png" alt="AVATAR" />
                            <span>example@gmail.com</span>
                            <button><AiOutlineClose /></button>
                        </span>
                    </div>
                    <div className={styles.right}>
                        <button>Cc</button>
                        <button>Bcc</button>
                    </div>
                </div>
                <div className={styles.bottom}>
                    <textarea placeholder='Type something...'></textarea>
                    <div className={styles.buttons}>
                        <button><AiOutlineBold /></button>
                        <button><AiOutlineBold /></button>
                        <button><AiOutlineBold /></button>
                        <span className={styles.divide}></span>
                        <button><AiOutlineBold /></button>
                        <button><AiOutlineBold /></button>
                        <button><AiOutlineBold /></button>
                    </div>
                    <div className={styles.last}>
                        <div className={styles.left}>
                            <button><MdLink /></button>
                            <button><MdLink /></button>
                            <button><MdLink /></button>
                        </div>
                        <button><span><BsFillSendFill /></span><span>Send Message</span></button>
                    </div>
                </div>
            </div>
        </div>
    )
}

const Header = () => {
    const navigate = useNavigate();
    return (
        <div className={styles.header}>
            <div className={styles.start}>
                <button onClick={() => navigate('/')}><BsFillReplyFill /></button>
            </div>
            <div className={styles.middle}>
                <button><HiArrowSmallLeft /></button>
                <span>4 of 200</span>
                <button><HiArrowSmallRight /></button>
            </div>
            <div className={styles.end}>
                <button><BsFillBookmarkFill /></button>
                <button><AiFillPrinter /></button>
                <button><MdDelete /></button>
            </div>
        </div>
    )
}

const Bottom = ({ setIsReplaying }) => {
    return (
        <div className={styles.BottomComp}>
            <div className={styles.heading}>
                <div className={styles.left}>
                    <img src="/avatar.png" alt="AVATAR" />
                    <div className={styles.right}>
                        <span>Muneeb Jee</span>
                        <Link to="/">example@gmail.com</Link>
                    </div>
                </div>
                <div className={styles.right}>
                    <span>May 27, 2021 - 10:47</span>
                </div>
            </div>
            <h3 className={styles.subject}>Creative Director Resume</h3>
            <p>Hi, Muneeb Cooper!</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Totam numquam dolores, esse soluta distinctio, similique voluptates nobis voluptate deserunt, aliquid assumenda temporibus debitis. Impedit fugit at laborum. Illum, porro ullam?</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis, quas cupiditate. Porro amet sequi, veniam perferendis, delectus voluptate quis consectetur expedita debitis, accusantium repellendus eveniet ullam. Vero, ipsa fugiat maxime enim officia sit alias ducimus quo nihil odit, quisquam molestias libero modi doloremque minima sunt fugit doloribus dolor veniam rem, adipisci corporis? Est illum cum atque repudiandae nostrum, ab vero numquam officiis vel quisquam nesciunt, facere distinctio. Aspernatur inventore natus provident reprehenderit exercitationem maxime deleniti libero aliquam! Voluptate ex animi quas ducimus molestiae eligendi voluptates illo eos, asperiores consectetur minus dolorum aliquam nihil dolorem quod quam labore non sit nesciunt.</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore voluptas ad nisi numquam. Debitis, rem. Earum quam quasi rem at. <a>muneeb@gamil.com</a></p>
            <p>Thanks for any help you can give.</p>
            <p>Best regards</p>
            <p>Muneeb Cooper</p>
            <div className={styles.attachs}>
                <div className={styles.attach}>
                    <div className={styles.start}><BsFileEarmarkPdfFill /></div>
                    <div className={styles.middle}>
                        <p>Resume_2021.pdf</p>
                        <span>570KB</span>
                    </div>
                    <div className={styles.end}><MdOutlineFileDownload /></div>
                </div>
                <div className={styles.attach}>
                    <div className={styles.start}><BsFileEarmarkPdfFill /></div>
                    <div className={styles.middle}>
                        <p>Resume_2021.pdf</p>
                        <span>570KB</span>
                    </div>
                    <div className={styles.end}><MdOutlineFileDownload /></div>
                </div>
            </div>
            <div className={styles.buttons}>
                <button onClick={() => setIsReplaying(true)}><span className={styles.icon}><HiArrowUturnLeft /></span><span>Reply</span></button>
                <button><span>Forward</span><span className={styles.icon}><HiOutlineArrowUturnRight /></span></button>
            </div>
        </div>
    )
}

const Message = () => {
    const [isReplaying, setIsReplaying] = useState(false);
    return (
        <div className={styles.container}>
            <div className={styles.top}><Header /></div>
            <div className={styles.bottom}><Bottom setIsReplaying={setIsReplaying} /></div>
            {isReplaying && <Reply setIsReplaying={setIsReplaying} />}
        </div>
    )
}

export default Message