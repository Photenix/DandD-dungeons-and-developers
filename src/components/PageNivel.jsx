import React, { useEffect } from 'react'
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { buscarDocumento, getClase, getOneClass } from '../helpers/clases';
import { getCuestionario, getMissions } from '../helpers/mission';
import CardMisionesSmall from '../modules/CardMisionesSmall';
import CardMain from '../modules/common/CardMain';
import DescriptionLevel from '../modules/niveles/DescriptionLevel';
import '../styles/sass/PageNivel.scss'
import getRandomInt from '../tools/numberRandomInt';
import Cuestionario from './cuestionario/Cuestionario';

const randomMission = () =>{

    const [ isLoad, setIsLoad ] = useState( false )

    const [ x, setX ] = useState({
        title_mission: '',
        uid: '',
    })
    const [ y, setY ] = useState({
        title_mission: '',
        uid: '',
    })

    useEffect( ()=>{
       
        getMissions()
            .then( e => {
                let rX = getRandomInt( e.length )
                let rY = getRandomInt( e.length )
                while ( rX == rY ) {
                    rY = getRandomInt( e.length )
                }
                setX( e[rX] )
                setY( e[rY] )
                setIsLoad( true )
            })
            .catch( e => console.log( e ) )
    },[])

    return(
        <>
            {
                isLoad
                    ?<CardMisionesSmall titulo={ y.title_mission} uid={ y.uid }/> 
                    :''
            }
            {
                isLoad
                    ?<CardMisionesSmall titulo={ x.title_mission} uid={ x.uid }/> 
                    :''
            }
        </>
    )
}


function PageNivel() {

    let { id } = useParams();
    let [idC, setIdC] = useState("mBfaHco1MOQhbimZkQgA");
    let [info, setInfo] = useState([]);

    useEffect(() => {
        getOneClass( id )
            .then( e => {
                setInfo( e )
                setIdC( e.id_cuestionario )
            })
            .catch(e => console.log(e))
    }, [])

    return (
        <div className='container-main'>
            <div className='contendor-pricipal'>
                <DescriptionLevel className="description" arreglo={info} />  
                <CardMain className="card-description" codeEx={ info.form_ejercicio } />
            </div>
            {
                setIdC != ""
                    ?<Cuestionario id={idC} />
                    :''
            }
            <div className='contendor-pricipal contenido-cards'>
                {
                    randomMission()
                }
            </div>
        </div>
    )
}

export default PageNivel