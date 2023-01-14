import React from 'react';

import '../styles/sass/SingIn.scss'

import { useFormik } from 'formik';
import * as yup from 'yup'; 
import { useDispatch } from 'react-redux';

import { FcGoogle } from "react-icons/fc";
import { FaFacebook, FaGithub } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';
import { loginEmailyPassAsync, loginGithubAsync, loginGoogleAsync, signInWithFacebook } from '../redux/actions/actionLogin';


const SingIn = () => {
    const nav = useNavigate()
    const dispatch = useDispatch();

    const rePassword = /^(?=.*[0-9])[a-zA-Z0-9!@#$%^&*]{5,}$/
    const formik = useFormik({
        initialValues: {
            email: '',
            pass: '',
        },
        validationSchema: yup.object({
            email: yup.string(),
            pass: yup.string()
        }),
        onSubmit: ( data ) =>{
            //console.log( data )
            const { email, pass } = data
            loginEmailyPassAsync( email, pass )
        },
    })

    return (
        <div className="sing-in">
            <div className='sing-in-up'>
                <h1>Iniciar sesión</h1>
                <form className='form'
                    onSubmit={ formik.handleSubmit }
                    onChange={ formik.handleChange}
                    >
                    <label htmlFor="email">Email</label>
                    <input type="text" name="email" id="email" />
                    <label htmlFor="pass">Contraseña</label>
                    <input type="password" name="pass" id="pass" />
                    <button type="submit">Iniciar sesión</button>
                </form>
                <div className="sing-other">
                    <FcGoogle size={45} onClick={ ()=> {
                            dispatch( loginGoogleAsync() )
                        }}/>
                    <FaFacebook size={45} color={'#2774c6'}
                        onClick={()=>{
                            dispatch( signInWithFacebook() )
                        }}/>
                    <FaGithub size={45}
                        onClick={()=>{
                            dispatch( loginGithubAsync() )
                        }}/>
                </div>
                <h2>¿Aun no tienes cuenta? <a onClick={()=> nav('/sing-up')}>Registrate</a></h2>
            </div>
        </div>
    );
};

export default SingIn;