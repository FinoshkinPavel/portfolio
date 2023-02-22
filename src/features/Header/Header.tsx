import React, {useState} from 'react';
import {Menu} from "./Menu/Menu";
import {Logo} from "./Logo/Logo";
import s from "./Header.module.scss"
import {BurgerMenu} from "./BurgerMenu/BurgerMenu";


export const Header = () => {
    const [open, setOpen] = useState(false)
    return (
        <div className={s.header}>
            <Logo/>
            <BurgerMenu open={open} setOpen={setOpen}/>
            <Menu open={open} setOpen={setOpen}/>
        </div>
    );
};
