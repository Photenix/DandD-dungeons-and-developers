import { useFormik } from 'formik';
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import * as yup from 'yup';
import { createBoss, updateBossUser } from '../../helpers/boss';
import { getMissions } from '../../helpers/mission';
import InputFileImg from '../InputFileImg';

import CardBigBoss from '../../modules/CardBigBoss';

import MySwal from '../../tools/sweetAlert'

const CrearBoss = () => {
    const  { user }  =  useSelector( state => state.login )

    const [ missions, setMissions ] = useState([])
    const [ canUpdate, setCanUpdate ] = useState(false)

    const [ cardGenerate, setCardGenerate ] = useState({
        title: 'Titulo',
        description: 'Describeme cortamente',
        img: '',
    })

    useEffect( ()=>{
        missionsExist()
            .then( e => setMissions( e ) )
    },[])

    useEffect( ()=>{
        document.getElementById('id_editar').disabled
        document.title = "Crear Jefe"
    },[])

    const formik = useFormik({

        initialValues: {
            'title_mission': '',
            'url_info': '',
            'description_s': '',
            'description_l': '',
            update: []
        },

        validationSchema: !canUpdate 
            ?yup.object({
                'title_mission': yup.string().typeError('Minimo 3 caracteres').min(3).required(),
                'url_info': yup.string().required().typeError('Falta URL'),
                'description_s': yup.string().min(10).required().typeError('Muy corta'),
                'description_l': yup.string().min(20).required().typeError('Muy corta'),
            }) 
            :yup.object({

            }),

        onSubmit: ( data ) =>{
            let idMissionExist = data.id_editar
            let isUpdate
            try{
                isUpdate = data.update.length === 1
            }catch{
                isUpdate = false
            }

            delete data.update
            delete data.id_editar
            delete data.file

            const url_clou = document.getElementById('url_cloudinary').innerText
            data.url_cloudinary = url_clou

            if( !isUpdate ) {
                let newData = { ...data }
                createBoss( newData )
                    .then( id => {
                        updateBossUser( user.uid, id )
                        clearInput()
                        cardGenerate.img = ''
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
                    'title_mission', 
                    'url_info', 'description_s', 'description_l'
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
                            title: 'Ha fallado algo :(',
                            showConfirmButton: false,
                            timer: 1500
                        })
                    })
            }
        }
    })

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
    }

    
    const missionsExist = async () =>{
        const missionsArr = []
        if( user?.role != 'admi'){
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
        if( x != undefined ){
            document.getElementById('title_mission').value = x.title_mission
            document.getElementById('url_info').value = x.url_info
            document.getElementById('description_s').value = x.description
        }
    }

    const updateState = e =>{
        setCanUpdate( e.target.checked )
    }
    
    return (
        <form className='create-mission'
            onSubmit={ formik.handleSubmit }
            onChange={ formik.handleChange }>
            <h1>(Crear / Editar) Jefes</h1>
            <div className="editar">
                <div className='update'>
                    <label htmlFor="update">Editar</label>
                    <input type="checkbox" name="update" id="update" onClick={updateState}/>
                </div>
                <h2>Selecciona para editar</h2>
                <select name="id_editar" id="id_editar" 
                    disabled={ !canUpdate } onChange={ handlePutInfo }>
                    <option value=''> Selecciona </option>
                    {
                        missions.map( e =>{
                            return (
                                <option value={ e.uid }>{ e['title_mission'] }</option>
                            )
                        })
                    }
                </select>
            </div>
            <h2>Titulo de la mision</h2>
            <input type="text" name="title_mission" id="title_mission" 
                onChange={ e =>{
                    cardGenerate.title = e.target.value 
                }}/>
            <h2>URL de info</h2>
            <input type="url" name="url_info" id="url_info" />
            <h2>Descripcion corta de actividad</h2>
            <textarea name="description_s" id="description_s" cols="30" rows="10"
                onChange={ e =>{
                    cardGenerate.description = e.target.value 
                }}></textarea>
            <h2>Descripcion larga de la actividad</h2>
            <textarea name="description_l" id="description_l" cols="30" rows="10"></textarea>
            <InputFileImg callCardChange={ cardGenerate }/>
            <CardBigBoss title={ cardGenerate.title } disabled={true}
                description={ cardGenerate.description } imgUrl={ cardGenerate.img }/>
            <button type="submit" >Crear</button>
        </form>
    );
};

export default CrearBoss;