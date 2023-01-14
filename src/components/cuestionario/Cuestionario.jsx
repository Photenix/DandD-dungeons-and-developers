import { useFormik } from 'formik'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { findCuestionario, getCuestionario, userProfileCuestionarios } from '../../helpers/mission'
import PreguntaCuestionario from '../../modules/pregunta/PreguntaCuestionario'
import Swal from 'sweetalert2'
import { onAuthStateChanged } from 'firebase/auth'
import { authentication } from '../../firebase.config'
import '../../styles/sass/Cuestionario.scss'
import { existUser, updateLogrosUser } from '../../helpers/user'
import { useDispatch, useSelector } from 'react-redux'
import { login, putLogros } from '../../redux/actions/actionLogin'

function Cuestionario(props) {

    let [datosCuestionario, setDatosCuestionario] = useState([])

    const [ datosLogro, setDatosLogros ] = useState([])

    const { user } = useSelector( state => state.login )
    const dispatch = useDispatch()

    useEffect(() => {
        findCuestionario( props.id )
            .then( e => {
                //console.log( e )
                setDatosCuestionario( e.preguntas )
                setDatosLogros( e.logro )
            })
            .catch(e => console.log(e))
        //TODO: averiguar para que ese user profile
        //userProfileCuestionarios('1');
    }, [props])

    let formik = useFormik({

        initialValues: {
            'pregunta1': '',
            'pregunta2': '',
            'pregunta3': '',
            'pregunta4': ''
        },

        onSubmit: (data) => {
            let canLoad = true
            //console.table( data );

            for (let i = 0; i < datosCuestionario.length; i++) {
                const element = datosCuestionario[i].respuesta_correcta;
                if( data[`pregunta${i+1}`] === element ) ''
                else canLoad= false 
            }
            
            let Toast = Swal.mixin({
                toast: true,
                position: 'top-end',
                showConfirmButton: false,
                timer: 3000,
                timerProgressBar: true,
                didOpen: (toast) => {
                  toast.addEventListener('mouseenter', Swal.stopTimer)
                  toast.addEventListener('mouseleave', Swal.resumeTimer)
                }
            })

            if (canLoad) {
                datosLogro.uid = props.id

                const existLogro = user?.logros.find( e => e.uid === props.id )

                if( existLogro == undefined ){
                    updateLogrosUser( user.uid, datosLogro )
                    user.logros.push( datosLogro )
                    dispatch( login( user ) );

                    Toast.fire({
                        icon: 'success',
                        title: '¡Ganaste la prueba!'
                    })
                }else{
                    Toast.fire({
                        icon: 'success',
                        title: '¡Ganaste la prueba de nuevo! XD'
                    })
                }
            }else{
                Toast.fire({
                    icon: 'error',
                    title: '¡Sigue intentando!'
                })
            }
        }
    })


    return (
        <>
            <form onSubmit={formik.handleSubmit}
                onChange={formik.handleChange} >
                <div className='cuestionario-container'>
                    <PreguntaCuestionario key={'s'} dato={ datosCuestionario } />
                </div>

                <div className='w-100'>
                    <button type="submit">Enviar</button>
                </div>
            </form>



        </>
    )
}

export default Cuestionario