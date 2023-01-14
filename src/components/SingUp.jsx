import React from 'react';

import '../styles/sass/SingIn.scss'

import { useFormik } from 'formik';
import * as yup from 'yup'; 
import { useDispatch } from 'react-redux';

import { useNavigate } from 'react-router-dom';
import { registerAsync } from '../redux/actions/actionRegister';

const SingUp = () => {

    const nav = useNavigate()
    const dispatch = useDispatch();

    const rePassword = /^(?=.*[0-9])[a-zA-Z0-9!@#$%^&*]{5,}$/
    const formik = useFormik({
        initialValues: {
            name: '',
            email: '',
            pass: '',
            cpass: ''
        },
        validationSchema: yup.object({
            name: yup.string().min(3).required(),
            email: yup.string().email().required(),
            pass: yup.string().matches(rePassword).required(),
            cpass: yup.string().required()
        }),
        onSubmit: ( data ) =>{
            console.log( data )
            const { pass, cpass } = data
            if( pass == cpass ){
                console.log(true)
                dispatch( registerAsync( data.email, 
                    data.pass, data.name ))
            }else{
                console.log( false )
            }
            //dispatch( AgregarDatos( data ) )
        },
    })

    return (
        <div className='sing-in-up'>
            <h1>Registrate</h1>
            <form className='form' 
                onSubmit={ formik.handleSubmit }
                onChange={ formik.handleChange }
                >
                <label htmlFor="name">Nombre</label>
                <input type="text" name="name" id="name" />
                <label htmlFor="email">Email</label>
                <input type="text" name="email" id="email" />
                <label htmlFor="pass">Contraseña</label>
                <input type="password" name="pass" id="pass" />
                <label htmlFor="cpass">Confirmar Contraseña</label>
                <input type="password" name="cpass" id="cpass" />
                <button type="submit">Registrar</button>
            </form>

            <h2>¿Ya tienes cuenta? <a onClick={()=> nav('/sing-in')}>Ingresa aqui</a></h2>
        </div>
    );
};

export default SingUp;