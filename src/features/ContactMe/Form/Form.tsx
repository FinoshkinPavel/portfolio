import React from 'react';
import s from './Form.module.scss'
import { motion } from 'framer-motion';

export const Form = () => {
    return (
        <form className={s.formBlock}>
            <div className={s.inputBox}>
                <input type='email' placeholder={'Your Email'} className={s.inputText}/>
                <input type='text' placeholder={'Your Name'} className={s.inputText}/>
            </div>
            <textarea cols={45} rows={9}  placeholder={'Your Message'} className={s.message}></textarea>
            <motion.div
                className={s.btn}
                whileHover={{backgroundColor: 'rgba(145, 142, 145, 0.1)'}}
                whileTap={{backgroundColor: 'rgba(145, 142, 145, 0.8)'}}
            >
                SEND MESSAGE
            </motion.div>
        </form>
    );
};
