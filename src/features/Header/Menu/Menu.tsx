import React, {memo} from 'react';
import s from './Menu.module.scss'
import {Link} from "react-router-dom";
import {AnimatePresence} from "framer-motion";
import {linkMenuData, linkSocialIcon} from './dataMenu';

type MenuPropsType = {
    open: boolean
    setOpen: (value: boolean) => void
}

export const Menu: React.FC<MenuPropsType> = memo(({open, setOpen}) => {

    const onClickHandler = () => setOpen(!open)

    return (
        <AnimatePresence initial={false}>
            <div className={`${s.menu} ${open && s.menuActive}`}>
                <div className={s.menuCont}>
                    <div className={s.imgMenu}></div>

                    {linkMenuData.map(el => {
                        return <Link
                            key={el.title}
                            className={s.link}
                            onClick={onClickHandler}
                            to={el.to}
                        >
                            {el.title.toUpperCase()}
                        </Link>
                    })}

                    <div className={s.iconSocialLink}>
                        {linkSocialIcon.map(el => {
                            return <a
                                key={el.path}
                                href={el.path}
                            >
                                <img src={el.icon}/>
                            </a>
                        })}
                    </div>
                </div>
            </div>
        </AnimatePresence>
    );
});
