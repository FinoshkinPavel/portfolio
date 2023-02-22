import React, {memo} from 'react';
import s from './Project.module.scss'

type ProjectPropsType = {
    title: string
    description: string
    hrefDemo?: string
}

export const Project: React.FC<ProjectPropsType> = memo(({title, description, hrefDemo}) => {


    return (
        <>
                <div className={s.projectBlock}>
                    <span className={s.title}>{title.toUpperCase()}</span>
                    <span className={s.description}>{description}</span>
                    <div className={s.demoBtn}><a href={hrefDemo} target={'_blank'}>view demo</a></div>
                </div>
        </>
    )
});
