import React, {useContext} from 'react';
import s from './SnackBar.module.scss'
import {Context} from "../../App/Provider/Provider";



export const SnackBar = () => {

const {open, setOpen} = useContext(Context)

   open && setTimeout(()=>{
       setOpen(!open)
   }, 3000)

    return (
        <div className={`${s.snackBar} ${open && s.snackBarActive}`}>
            <span className={s.text}>Thank you for your message! 👻</span>
        </div>
    );
};

