import React, {useState} from 'react';
import s from './App.module.scss'
import {Header} from "../features/Header/Header";
import {CentralPage} from "../features/CentralPage/CentralPage";
import {_Particles} from "../common/Particles/Particles";
import {SnackBar} from "../common/SnackBar/SnackBar";
import {Provider} from "./Provider/Provider";
import {Footer} from "../features/Footer/Footer";

export const App = () => {

    const [open, setOpen] = useState(false)

    return <div className={s.app}>
        <_Particles/>
        <Header/>
        <Provider open={open} setOpen={setOpen}>
            <CentralPage/>
            <div className={s.rightBlock}></div>
            <div className={s.bottomBlock}></div>
            <SnackBar/>
        </Provider>
        <Footer/>
    </div>
}


