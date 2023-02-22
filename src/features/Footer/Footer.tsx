import React from 'react';
import s from './Footer.module.scss'
import {linkSocialIcon} from "../Header/Menu/dataMenu";
export const Footer = () => {
    return (
        <footer className={s.footer}>
            <div className={s.text}>© 2023, All Rights Reserved</div>
            <div className={s.blockImg}>
                {linkSocialIcon.map(el => {
                    return <a
                        key={el.path}
                        href={el.path}
                        target={'_blank'}
                        className={s.iconLink}
                    >
                        <img src={el.icon} />
                    </a>
                })}
            </div>
        </footer>
    );
};
