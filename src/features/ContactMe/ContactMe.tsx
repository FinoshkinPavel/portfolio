import React from 'react';
import s from './ContactMe.module.scss'
import {Title} from "../../common/TitlePage/Title";
import {MyInfo} from "./MyInfo/MyInfo";
import { Form } from './Form/Form';
import { motion } from 'framer-motion';



export const ContactMe = () => {

    const variants = {
        enter:{opacity: 0},
        center:{opacity: 1},
        exit:{opacity: 0}
    }

    return (
        <motion.div
            className={s.cont}
            variants={variants}
            initial='enter'
            animate='center'
            exit='exit'
        >
            <Title title={'CONTACTS'}/>
            <div className={s.contactsWrap}>
                <MyInfo/>
                <Form/>
            </div>
        </motion.div>
    );
};
