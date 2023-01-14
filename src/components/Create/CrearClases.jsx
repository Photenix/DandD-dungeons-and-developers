import '../../styles/sass/Create/CrearClases.scss'
import { crearClase, updateClasesUser, buscarDocumento } from '../../helpers/clases';
import React, {useState, useEffect} from "react";
import { useFormik } from 'formik';
import * as yup from 'yup';
import { useSelector } from 'react-redux';
import MySwal from '../../tools/sweetAlert';
import { getCuestionarios } from '../../helpers/cuestionario';
import StyleCode from '../../tools/styleCode';

const CrearClases = () => {

    const  { user }  =  useSelector( state => state.login )

    const [ cuestionarios, setCuestionarios ] = useState([])

    const [ code, setCode ] = useState('')

    const [ timeTab, setTimeTab ] = useState(0)

    useEffect(()=>{
        document.title = "Crear clase"
        getCuestionarios()
            .then( e => setCuestionarios( e ) )
    },[])

    const formik = useFormik({
        //initial no es tan necesario pero asi me digo a mi mismo que informacion deberia llenarse cuando utilize el onSubmit
        initialValues: {
            'title_clase': '',
            'id_cuestionario': '',
            'cuestionario': '',
            'form_descripcion': '',
            'form_clase': '',
            'form_ejercicio': '',
        },
        //son validaciones, te recomiendo leer lo del yup, creeme es sencillo una vez leido, solo me dice si es un string, si es un tipo de number, el required le estoy diciendo que si no tiene nada no puede hacer el onSubmit
        validationSchema: yup.object({
            'title_clase': yup.string().min(3).required(),
            'form_descripcion': yup.string().required(),
            'form_clase': yup.string().required(),
            'form_ejercicio': yup.string().required(),
        }),

        onSubmit: ( data ) =>{
            let canSend = false
            console.log( data );
            data.id_cuestionario = document.getElementById('id_cuestionario').value
            if( data.id_cuestionario != ''){
                crearClase( data )
                    .then( id => {
                        updateClasesUser( user.uid, id )
                        clearInput()
                        MySwal.fire({
                            position: 'center',
                            icon: 'success',
                            title: 'Has creado una mision ;)',
                            showConfirmButton: false,
                            timer: 1500
                        })
                    })
                    .catch( e = console.log( e ))
            }else{
                MySwal.fire({
                    position: 'center',
                    icon: 'error',
                    title: 'Tienes que colocar un cuestionario',
                    showConfirmButton: false,
                    timer: 1500
                })
            }
        }
    })


    const style = {
        display: 'flex',
        flexDirection: 'column',
        alingItem: 'center',
    }

    const handleSelect = e =>{
        const x = document.getElementById("id_cuestionario")
        if( e.target.value == "none" ) x.value = ''
        else x.value = e.target.value
    }

    const handleCode = e =>{
        const x = document.getElementById("form_ejercicio").value
        setCode( x )
    }

    const clearInput = () =>{
        const inputs = document.querySelectorAll('input')
        const textareas = document.querySelectorAll('textarea')

        for (let i = 0; i < inputs.length; i++) {
            const element = inputs[i];
            if( element.type == 'checkbox') element.checked = false
            else element.value = ''
        }
        for (let i = 0; i < textareas.length; i++) {
            const element = textareas[i];
            element.value = ''
        }

        setCode( '' )
    }

    const changeKeyTab = e =>{
        if( e.key == 'Tab' && timeTab == 0){
            e.preventDefault();
            e.stopPropagation();
            setTimeTab( timeTab => timeTab + 1 )
            setTimeout(()=>{
                setTimeTab( timeTab => timeTab - 1 )
            },500)
        }
    }

    return (
        <div>
            <form onSubmit={ formik.handleSubmit }
                onChange={ formik.handleChange } className='Form'  >
                <section className='Titulos'>

                    <div className="titulo">
                        <h2>Titulo de la clase:</h2>
                        <input id="title_clase" name='title_clase' 
                            type="text" placeholder='Titulo de la clase' />
                    </div>

                    <div className="titulo">
                        <h2>Id de Cuestionario:</h2>
                        <input id="id_cuestionario" name='id_cuestionario' 
                            type="text" placeholder='ID Questionario' disabled />
                    </div>

                    <div className="titulo">
                        <h2>Cuestionario:</h2>
                        <select name="cuestionario" id="cuestionario" >
                            <option value="none" onClick={handleSelect} >Selecciona</option>
                            {
                                cuestionarios.map( e => <option value={ e.uid } 
                                    onClick={handleSelect}>
                                    { e.nombre_cuestionario }</option> )
                            }
                        </select>
                    </div>

                </section>

                <section className='Forms'>
                    {/* Aunque el sistema lo admita queda raro encerrar un input dentro de una etiqueta de texto, recomiendo siempre intentarlo colocar en div a menos que sea un caso demaciado unico*/}
                    <div className="form">
                        <h2 id="form">Descripcion/Resumen de la Clase</h2>
                        <textarea  class="form" id="form_descripcion" name='form_descripcion'
                            type="text" placeholder='Descripcion/Resumen de la Clase' />
                    </div>
                    
                    <div className="form">
                        <h2 id="form">Clase</h2>
                        <textarea id="form_clase" name='form_clase' 
                            type="text" placeholder='Clase'/>
                    </div>

                    <div className="form" onChange={ handleCode }>
                        <h2 id="form">Ejercios</h2>
                        <textarea id="form_ejercicio" name='form_ejercicio' 
                            type="text" placeholder='Ejercios' 
                                wrap='hard' onKeyDown={ changeKeyTab }/>
                    </div>

                    <StyleCode code={ code }/>
                </section>
                <button type="submit" id="Boton">Crear Clase</button>
            </form>     
            <div className='ContBoton'>
                   
            </div>
        </div>
    );
};

export default CrearClases;