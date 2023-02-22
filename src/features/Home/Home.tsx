import React from 'react';
import ReactTypingEffect from 'react-typing-effect';
import s from './Home.module.scss'
import {motion} from 'framer-motion';
import {PATH} from "../CentralPage/CentralPage";
import {Link} from "react-router-dom";


export const Home = () => {
    const text = ['Pavel Finoshkin', 'Front-end developer']

    const animations = {
        initial: {y: -70, opacity: 0,},
        animate: {y: 0, opacity: 1,},
        exit: {y: -70, opacity: 0,},
    }

    return (
        <motion.div
            className={s.cont}
            variants={animations}
            transition={{duration: 1, ease: "easeInOut"}}
            initial='initial'
            animate='animate'
            exit='exit'
        >

            <h1 className={s.greetingText}>Hi there</h1>
            <div className={s.stick}></div>
            <h2 className={s.text_Iam}>I`m</h2>
            <ReactTypingEffect
                text={text}
                className={`${s.text}`}
                eraseDelay={1000}
                eraseSpeed={50}
            />
            <motion.div
                className={s.btn}
                whileHover={{backgroundColor: 'rgba(145, 142, 145, 0.1)'}}
                whileTap={{backgroundColor: 'rgba(145, 142, 145, 0.8)'}}
            >
                <Link to={PATH.CONTACT_ME}>GET IN TOUCH</Link>
            </motion.div>
        </motion.div>
    );
};
