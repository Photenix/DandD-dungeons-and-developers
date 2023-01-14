import { useFormik } from 'formik';
import React, { useRef, useState } from 'react'
import { createCuestionario } from '../../helpers/mission';
import '../../styles/sass/Create/CrearCuestionario.scss'
import * as yup from 'yup'; 
import ChangeTitle from '../../tools/ChangeTitle';

import { BsChevronLeft, BsChevronRight } from "react-icons/bs";
import MySwal from '../../tools/sweetAlert';
import PreviewFileImgLogro from '../../modules/pregunta/PreviewFileImgLogro';
import updateCloudinary from '../../helpers/updateCloudinary';

const InputLabel = ({ name, idName }) =>{
    const capitalized = name.charAt(0).toUpperCase() + name.slice(1);
    return(
        <div className='input-container'>
            <label>{ name }</label>
            <input placeholder={ name } type="text" name={ idName } id={ idName } />
        </div>
    )
}

const Check = ({ num, children }) => {
    //const capitalized = children.charAt(0).toUpperCase() + children.slice(1);
    return (
        <div className='options-container'>
            <input className='radio-text' type="radio" 
                value={children + 't'} name={`respuesta${num}`} id={children} />
            <input placeholder={children} className='pregunta-text' 
                type="text" htmlFor={children} name={children + 't'} id={children + 't'} />
        </div>
    )
}

const Pregunta = ({ name }) =>{

    const checkOptions = []

    for (let i = 0; i < 4; i++) {
        checkOptions.push( `pregunta_${name}_respuesta_${i+1}` )   
    }

    return(
        <>
            <div className='input-container'>
                <label>{ `Nombre de pregunta ${name}` }</label>
                <input placeholder={ `Pregunta ${name}` } type="text" 
                    name={ `pregunta_${name}` } id={ `pregunta_${name}` } />
            </div>
            <div className="create-respuesta-selection">
                {
                    checkOptions.map(e => <Check num={name}>{e}</Check> )
                }
            </div>
        </>
    )   
}

function CrearCuestionario() {
    const formulario = useRef();
    const [formularioD, seFormularioD] = useState(false);

    const formik = useFormik({

        initialValues: {
            'nombre_cuestionario': '',
        },

        validationSchema: yup.object({
            'nombre_cuestionario': yup.string().min(3).required(),
        }),
        
        onSubmit: (data) => {
            let cantLoad = true
            const preguntas = []
            const imgFile = document.getElementById('img_logo').files

            if( imgFile.length == 0 ) cantLoad = false

            for (let i = 1; i <= 4; i++) {
                const objQuezt = {}
                objQuezt[`nombre_pregunta`] = document.getElementById(`pregunta_${i}`).value

                delete data[`pregunta_${i}`]

                if( objQuezt[`nombre_pregunta`] == '' ) {
                    cantLoad = false;
                    break
                }
                for (let x = 1; x <= 4; x++) {
                    objQuezt[`respuesta_${x}t`] = document.getElementById(`pregunta_${i}_respuesta_${x}t`).value
                    delete data[`pregunta_${i}_respuesta_${x}t`]

                    if( objQuezt[`respuesta_${x}t`] == '' ) {
                        cantLoad = false;
                        break
                    }
                }
                objQuezt['respuesta_correcta'] = data['respuesta'+i]
                
                preguntas.push( objQuezt )
            }

            delete data.img_logo

            data.preguntas = preguntas

            if( cantLoad ){
                
                delete data['respuesta'+1]
                delete data['respuesta'+2]
                delete data['respuesta'+3]
                delete data['respuesta'+4]
                
                //console.table(data);
                updateCloudinary( imgFile )
                    .then( url_img => {
                        
                        data.logro = {
                            img_logro: url_img,
                            nombre_logro: data.nombre_logro,
                        }
                        delete data.nombre_logro

                        createCuestionario(data)
                            .then( e =>{
                                clearInput()
                                MySwal.fire({
                                    position: 'top-end',
                                    icon: 'success',
                                    title: 'Se ha creado el cuestionario',
                                    showConfirmButton: false,
                                    timer: 1000
                                })
                            });
                    })
            }else{
                MySwal.fire({
                    position: 'top-end',
                    icon: 'error',
                    title: 'Le falta informacion',
                    showConfirmButton: false,
                    timer: 700
                })
            }
        }
    })

    const clearInput = () =>{
        const inputs = document.querySelectorAll('input')

        for (let i = 0; i < inputs.length; i++) {
            const element = inputs[i];
            const type = element.type
            if( type == 'checkbox' || type == 'radio') element.checked = false
            else element.value = ''
        }
    }

    return (
        <>
            <ChangeTitle title={'Crear cuestionario'}/>
            <form ref={formulario} className='create-cuestionario'
                onSubmit={ formik.handleSubmit }
                onChange={ formik.handleChange }
                >
                
                <h1>Crear Cuestionario</h1>

                <InputLabel name={'Nombre de cuestionario'} idName={'nombre_cuestionario'} />
                <InputLabel name={'Nombre Logro'} idName={'nombre_logro'} />
                <PreviewFileImgLogro/>
                
                <Pregunta name={1}/>
                <Pregunta name={2}/>
                <Pregunta name={3}/>
                <Pregunta name={4}/>
                {/* 
                <div className='options-b'>
                    <div className='flechas'>
                        <div className='izquiera'>
                            <BsChevronLeft size={ 20 } />
                        </div>
                        <div className='derecha'>
                            <BsChevronRight size={ 20 } />
                        </div>
                    </div>
                    <input id='anadir-pregunta' type="button" 
                        value="+ Pregunta" onClick={handleSubmit} />
                </div>
                */}
                <button id='btn-submit' type="submit">Crear</button>
            </form>


        </>
    )
}

export default CrearCuestionario

