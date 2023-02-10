import React from 'react';
import s from "./MyInfo.module.scss";
import {dataMyContacts} from "../dataMyContacts/dataMyContacts";

export const MyInfo = () => {
    return (
        <div className={s.infoBlock}>
            {dataMyContacts.map(el => {
                return (
                    <div
                        key={el.title}
                        className={s.infoItem}
                    >
                        <div className={s.info__iconWrap}>
                            <img src={`${el.iconImg}`} />
                        </div>
                        <div className={s.info__descriptionWrap}>
                            <div className={s.title}>{el.title.toUpperCase()}</div>
                            <div className={s.description}>{el.description}</div>
                        </div>
                    </div>
                )
            })}
        </div>
    );
};
