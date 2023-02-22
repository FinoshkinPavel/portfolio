import React, {memo} from 'react';
import s from './Title.module.scss'

type TitlePropsType = {
    title: string
}

export const Title: React.FC<TitlePropsType> = memo( ({title}) => {
    return (
        <div className={s.titleWrap}>
            <span className={s.title}>{title.toUpperCase()}</span>
            <span className={s.stick}></span>
        </div>
    );
});
