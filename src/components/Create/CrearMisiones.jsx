import { useFormik } from 'formik';
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import * as yup from 'yup'; 
import { createMission, findMission, getMissions, updateMission } from '../../helpers/mission';
import { updateMissionUser } from '../../helpers/user';

import '../../styles/sass/Create/CrearMisiones.scss'

import MySwal from '../../tools/sweetAlert';

const Check = ({ children }) =>{
    const capitalized = children.charAt(0).toUpperCase() + children.slice(1);
    return (
        <div className="check">
            <input type="checkbox" name={ children } id={ children } />
            <label htmlFor={ children }>{ capitalized }</label>
        </div>
    )
}

const CrearMisiones = () => {

    const  { user }  =  useSelector( state => state.login )

    const [ missions, setMissions ] = useState([])
    const [ canUpdate, setCanUpdate ] = useState(false)

    useEffect( ()=>{
        missionsExist()
            .then( e => setMissions( e ) )
    },[])

    useEffect( ()=>{
        document.title = "Crear mision"
        document.getElementById('id_editar').disabled
    },[])

    const urlGist = /^https\:\/\/gist\.github\.com/
    const formik = useFormik({

        initialValues: {
            'title_mission': '',
            'url_answer': '',
            'url_info': '',
            'description': '',
            'aritmetica': '',
            'condicionales': '',
            'bucles': '',
            'array': '',
            'matrices': '',
            'clases': '',
            update: []
        },

        validationSchema: !canUpdate 
            ?yup.object({
                'title_mission': yup.string().min(3).required(),
                'url_answer': yup.string().matches(urlGist).required(),
                'url_info': yup.string().required(),
                'description': yup.string().min(20).required(),
            }) 
            :yup.object({
                'url_answer': yup.string().matches(urlGist).required(),
            }),

        onSubmit: ( data ) =>{
            console.log( data )
            let canSend = false
            let idMissionExist = data.id_editar
            let isUpdate
            try{
                isUpdate = data.update.length === 1
            }catch{
                isUpdate = false
            }
            for (let i = 0; i < checkOptions.length; i++) {
                const element = checkOptions[i];
                if( data[element].length == 1  || data[element] ) {
                    data[element]= true
                    canSend = true
                }
                else data[element]= false
            }

            delete data.update
            delete data.id_editar

            if( canSend && !isUpdate ) {
                let newData = { ...data }
                newData['entrena'] = {}
                for (let i = 0; i < checkOptions.length; i++) {
                    const option = checkOptions[i];
                    newData['entrena'][option] = newData[option]
                    delete newData[option]
                }
                //console.log( newData );
                createMission( newData )
                    .then( id => {
                        updateMissionUser( user.uid, id )
                        clearInput()
                        MySwal.fire({
                            position: 'center',
                            icon: 'success',
                            title: 'Has creado una mision ;)',
                            showConfirmButton: false,
                            timer: 1500
                        })
                    })
                    .catch( e => {
                        MySwal.fire({
                            position: 'center',
                            icon: 'error',
                            title: 'Has creado una mision ;)',
                            showConfirmButton: false,
                            timer: 1500
                        })
                    })
                
            }
            else if( isUpdate ){
                const watch = [
                    'title_mission', 'url_answer', 
                    'url_info', 'description'
                ]

                for (let i = 0; i < watch.length; i++) {
                    const element = watch[i];
                    data[element] = document.getElementById(element).value
                }

                updateMission( data, idMissionExist )
                    .then( e => {
                        clearInput()
                        document.getElementById('id_editar').disabled = true
                        MySwal.fire({
                            position: 'center',
                            icon: 'success',
                            title: 'Has creado una mision ;)',
                            showConfirmButton: false,
                            timer: 1500
                        })
                    })
                    .catch( e => {
                        MySwal.fire({
                            position: 'center',
                            icon: 'error',
                            title: 'Has creado una mision ;)',
                            showConfirmButton: false,
                            timer: 1500
                        })
                    })
            }
        }
    })

    const clearInput = () =>{
        const inputs = document.querySelectorAll('input')
        const textarea = document.querySelector('textarea')

        for (let i = 0; i < inputs.length; i++) {
            const element = inputs[i];
            if( element.type == 'checkbox') element.checked = false
            else element.value = ''
        }

        textarea.value = ''
    }

    
    const missionsExist = async () =>{
        const missionsArr = []
        if( user.role != 'admi'){
            for (let i = 0; i < user.misiones_creadas.length; i++) {
                const element = user.misiones_creadas[i];
                const x = await findMission( element )
                missionsArr.push( x )
            }
        }
        else{
            const x = await getMissions()
            missionsArr.push( ...x )
        }
        return missionsArr
    }
    
    const handlePutInfo = e =>{
        const x = missions.find(element => element.uid === e.target.value);
        if ( x != undefined ){
            document.getElementById('title_mission').value = x.title_mission
            document.getElementById('url_answer').value = x.url_answer
            document.getElementById('url_info').value = x.url_info
            document.getElementById('description').value = x.description

            document.getElementById('aritmetica').checked = x.entrena.aritmetica
            document.getElementById('condicionales').checked = x.entrena.condicionales
            document.getElementById('bucles').checked = x.entrena.bucles
            document.getElementById('array').checked = x.entrena.array
            document.getElementById('matrices').checked = x.entrena.matrices
            document.getElementById('clases').checked = x.entrena.clases
        }else{
            clearInput()
            document.getElementById('update').checked = true
        }
    }

    const updateState = e =>{
        setCanUpdate(e.target.checked )
    }

    const checkOptions = [
        'aritmetica', 'condicionales', 'bucles',
        'array', 'matrices', 'clases'
    ]
    
    return (
        <form className='create-mission'
            onSubmit={ formik.handleSubmit }
            onChange={ formik.handleChange }>
            <h1>(Crear / Editar) misiones</h1>
            <div className="editar">
                <div className='update'>
                    <label htmlFor="update">Editar</label>
                    <input type="checkbox" name="update" id="update" onClick={updateState}/>
                </div>
                <h2>Selecciona para editar</h2>
                <select name="id_editar" id="id_editar" disabled={ !canUpdate } 
                    onChange={handlePutInfo}>
                    <option value=''>
                        Selecciona</option>
                    {
                        missions.map( e =>{
                            return (
                                <option value={ e.uid }>
                                    { e['title_mission'] }</option>
                            )
                        })
                    }
                </select>
            </div>
            <h2>Titulo de la mision</h2>
            <input type="text" name="title_mission" id="title_mission" />
            <h2>URL de gist</h2>
            <input type="url" name="url_answer" id="url_answer" />
            <h2>URL de info</h2>
            <input type="url" name="url_info" id="url_info" />
            <h2>Descripcion de la actividad</h2>
            <textarea name="" id="description" cols="30" rows="10"></textarea>
            <h2>Selecciona tipo de ejercicio ( min 1 )</h2>
            <div className="create-mission-selection">
                {
                    checkOptions.map( e => <Check>{e}</Check>)
                }
            </div>
            <button type="submit" >Crear</button>
        </form>
    );
};

export default CrearMisiones;