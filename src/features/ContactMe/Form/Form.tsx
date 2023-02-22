import React, {useContext, useState} from 'react';
import s from './Form.module.scss'
import {motion} from 'framer-motion';
import {useFormik} from "formik";
import {validationSchema} from "../validate-form/validate-yup";
import {Context} from "../../../App/Provider/Provider";
import axios from "axios";


export const Form = () => {
    const [disable, setDisable] = useState(false)
    const {open, setOpen} = useContext(Context)

    const formik = useFormik({
        initialValues: {
            name: '',
            email: '',
            message: ''
        },
        validationSchema,
        onSubmit: values => {
            setOpen(true)

            alert(JSON.stringify(values, null, 2));
            setDisable(true)
            axios.post('http://localhost:3010/sendMessage', {
                name: values.name,
                email: values.email,
                message: values.message
            })
                .then(res => {
                    formik.resetForm()
                    setOpen(true)
                    setDisable(false)
                })
        }
    })

    return (
        <form className={s.formBlock} onSubmit={formik.handleSubmit}>
            <div className={s.inputBox}>
                <input
                    type='email'
                    placeholder={formik.touched.email && formik.errors.email ? formik.errors.email :'Your Email'}
                    className={s.inputText}
                    id='email'
                    value={formik.values.email}
                    name='email'
                    onChange={formik.handleChange}
                />

                <input
                    type='text'
                    placeholder={formik.touched.name && formik.errors.name ? formik.errors.name : 'Your Name'}
                    className={s.inputText}
                    id='name'
                    value={formik.values.name}
                    name='name'
                    onChange={formik.handleChange}
                />
            </div>
            <textarea
                cols={45}
                rows={9}
                placeholder={formik.touched.message && formik.errors.message ? formik.errors.message :'Your Message'}
                className={s.message}
                name='message'
                onChange={formik.handleChange}
                value={formik.values.message}
            >

            </textarea>
            <motion.button
                type={"submit"}
                disabled={disable}
                className={s.btn}
                whileHover={{backgroundColor: 'rgba(145, 142, 145, 0.1)'}}
                whileTap={{backgroundColor: 'rgba(145, 142, 145, 0.8)'}}
            >
                SEND MESSAGE
            </motion.button>
        </form>
    );
};
