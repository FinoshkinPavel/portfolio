import React, {useState} from 'react';
import s from './Projects.module.scss'
import {Title} from "../../common/TitlePage/Title";
import {AnimatePresence, motion} from 'framer-motion';
import {wrap} from '@popmotion/popcorn';
import {Project} from "../../common/Project/Project";
import {dataProjects} from "./data/projectsData";


export const Projects = () => {
    const [[slide, direction], setSlide] = useState([0, 0])

    const variants2 = {
        enter: (direction: number) => ({opacity: 0, x: direction > 0 ? 10 : -10,}),
        center: {x: 0, opacity: 1},
        exit: (direction: number) => ({opacity: 0, x: direction < 0 ? 10 : -10,}),
    }

    const variants1 = {
        enter: { opacity: 0},
        center: { opacity: 1},
        exit: { opacity: 0},
    }



    const slideIndex = wrap(0, dataProjects.length, slide)
    const paginate = (newDirection: number) => setSlide([slide + newDirection, newDirection])

    return (
        <motion.div
            className={s.cont}
            variants={variants1}
            initial='enter'
            animate='center'
            exit='exit'
        >
            <Title title={'projects'}/>
            <div className={s.projectsWrap}>
                <AnimatePresence initial={false}>
                    <div className={s.slide}>

                        {dataProjects.filter((_, i) => i === slideIndex)
                            .map(el => {
                                return (
                                    <motion.div
                                        className={s.project}
                                        style={{backgroundImage: `url(${el.img})`}}
                                        key={el.title}
                                        variants={variants2}
                                        initial='enter'
                                        animate='center'
                                        exit='exit'
                                        custom={direction}
                                        transition={{
                                            x: {type: "spring", stiffness: 300, damping: 30},
                                            opacity: {duration: 0.2}
                                        }}
                                    >
                                        <div
                                            className={s.backgroundHover}
                                        >
                                            <Project
                                                title={el.title}
                                                description={el.description}
                                                hrefDemo={el.hrefDemo}
                                            />
                                        </div>
                                    </motion.div>
                                )
                            })}

                        <div className={s.sliderBtnBlock}>
                            <motion.div
                                className={s.sliderBtn}
                                onClick={() => paginate(1)}
                                whileHover={{backgroundColor: 'rgba(145, 142, 145, 0.1)'}}
                                whileTap={{backgroundColor: 'rgba(145, 142, 145, 0.8)'}}
                            >
                                PREVIOUS
                            </motion.div>
                            <motion.div
                                className={s.sliderBtn}
                                onClick={() => paginate(-1)}
                                whileHover={{backgroundColor: 'rgba(145, 142, 145, 0.1)'}}
                                whileTap={{backgroundColor: 'rgba(145, 142, 145, 0.8)'}}
                            >
                                NEXT
                            </motion.div>
                        </div>

                    </div>
                </AnimatePresence>

            </div>
        </motion.div>

    );
};
