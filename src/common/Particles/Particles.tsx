import {useCallback} from "react";
import Particles from "react-tsparticles";
import type {Container, Engine} from "tsparticles-engine";
import {loadFull} from "tsparticles";

export const _Particles = () => {
    const particlesInit = useCallback(async (engine: Engine) => {
        await loadFull(engine);
    }, []);

    const particlesLoaded = useCallback(async (container: Container | undefined) => {
    }, []);

    return (
        <Particles
            id="tsparticles"
            init={particlesInit}
            loaded={particlesLoaded}
            options={{
                fpsLimit: 60,
                particles: {
                    move: {
                        bounce: false,
                        direction: "none",
                        enable: true,
                        outModes: "out",
                        random: false,
                        speed: 2,
                        straight: false
                    },
                    number: {density: {enable: true, area: 800}, value: 80},
                    opacity: {
                        value: 0.5
                    },
                    shape: {
                        type: "circle"
                    },
                    size: {
                        value: {min: 1, max: 5}
                    }
                },
                themes: [
                    {
                        name: "light",
                        default: {
                            value: true,
                            mode: "light"
                        },
                        options: {
                            background: {
                                color: "none"
                            },
                            particles: {
                                color: {
                                    value: "#000"
                                }
                            }
                        }
                    },
                    {
                        name: "dark",
                        default: {
                            value: true,
                            mode: "dark"
                        },
                        options: {
                            background: {
                                color: "#000"
                            },
                            particles: {
                                color: {
                                    value: "#fff"
                                }
                            }
                        }
                    }
                ]
            }}
        />
    );
};