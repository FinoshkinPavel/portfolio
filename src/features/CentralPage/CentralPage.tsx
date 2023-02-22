import React from 'react';
import s from './CentralPage.module.scss'
import {Route, Routes, useLocation} from "react-router-dom";
import {Home} from "../Home/Home";
import {Skills} from "../Skills/Skills";
import {ContactMe} from "../ContactMe/ContactMe";
import {AnimatePresence} from "framer-motion";
import { Projects } from '../Projects/Projects';

export enum PATH {
    HOME = '/',
    SKILLS = 'skills',
    PROJECTS = 'projects',
    CONTACT_ME = 'contact_me'
}

export const CentralPage = () => {
    const location = useLocation()
    return (
        <div className={s.centralPageCont}>
            <div className={s.wrapImg}></div>
            <div className={s.contentCont}>
                <AnimatePresence initial exitBeforeEnter>
                    <Routes
                        key={location.pathname}
                        location={location}
                    >
                        <Route path={PATH.HOME} element={<Home/>}/>
                        <Route path={PATH.SKILLS} element={<Skills/>}/>
                        <Route path={PATH.PROJECTS} element={<Projects/>}/>
                        <Route path={PATH.CONTACT_ME} element={<ContactMe/>}/>
                    </Routes>
                </AnimatePresence>
            </div>
        </div>
    );
};
