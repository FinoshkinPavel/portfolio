import React from 'react';
import s from './BurgerMenu.module.scss'

type BurgerMenuPropsType = {
    open: boolean
    setOpen: (value: boolean)=>void
}

export const BurgerMenu: React.FC<BurgerMenuPropsType> = ({open,setOpen}) => {
    return (
        <div className={`${s.burger} ${open && s.burgerActive}`}
             onClick={()=>{setOpen(!open)}}></div>
    );
};
