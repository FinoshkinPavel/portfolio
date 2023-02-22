import React, {memo} from 'react';
import s from './SkillBox.module.scss'


type SkillBoxPropsType = {
    img: string
    title: string
    description: string
}

export const SkillBox: React.FC <SkillBoxPropsType> = memo( ({img, title, description}) => {
    return (
        <div className={s.box}>
            <div className={s.iconWrap}>
                <img src={img}/>
            </div>
            <span className={s.title}>{title}</span>
            <div className={s.stick}></div>
            <div className={s.description}>
                {description}
            </div>
        </div>
    );
});
