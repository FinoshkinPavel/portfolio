import React from 'react';
import s from './Skills.module.scss'
import {Title} from "../../common/TitlePage/Title";
import {SkillBox} from "../../common/SkillBox/SkillBox";
import dev from '../../img/icon/dev.png'
import design from '../../img/icon/desing.png'
import foundation from '../../img/icon/foundation.png'
import testing from '../../img/icon/testing.png'
import {motion} from 'framer-motion';


export const Skills = () => {

    const skills = [
        {title: 'Development', description: 'React, Redux, Redux-Toolkit, AXIOS', img: dev},
        {title: 'Design', description: 'Material UI, Ant-design', img: design},
        {title: 'Foundation', description: 'JavaScript, TypeScript, HTML5, CSS3', img: foundation},
        {title: 'Testing', description: 'Unit-Test, StoryBook', img: testing},
    ]

    const animations = {
        initial: {opacity: 0,},
        animate:(i: number) => ( {opacity: 1, transition: {duration: i * 0.5}}),
        exit: {opacity: 0, },
    }

    return (
        <div className={s.cont}>

            <Title title={'skills'}/>
            <div
                className={s.skillsWrap}
            >
                {skills.map((el, i) => {
                    return <motion.div
                        key={el.title}
                        variants={animations}
                        initial='initial'
                        animate={'animate'}
                        exit='exit'
                        custom={i}
                    >
                        <SkillBox

                            img={el.img}
                            title={el.title}
                            description={el.description}
                        />
                    </motion.div>
                })}
            </div>
        </div>
    );
};
