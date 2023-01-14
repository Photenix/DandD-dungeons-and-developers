import React , { useEffect, useState }from 'react'
import '../../styles/sass/Misiones.scss'
import comilla from '../../assets/comilla.svg'
import { useNavigate } from 'react-router-dom'
import CardMisionesSmall from '../../modules/CardMisionesSmall'
import { getMissions } from '../../helpers/mission';

function HomeMisiones() {
    const nav = useNavigate()
    const [ arrayPrint, setarrayPrint ] = useState([])

    const newArrayPrint = arrayPrint.slice(0,4);
    
    useEffect( ()=>{
       
        getMissions()
            .then( e => {
                setarrayPrint( e )
               
            })
            .catch( e => console.log( e ) )
    },[])

    return (
        <div className='contendor-misiones'>
            <h1 className='titulo-mision'>Misiones</h1>
            <div className='cards-misiones'>
                {
                    newArrayPrint.map( e  => <CardMisionesSmall  titulo={e.title_mission} uid={ e.uid }/>)
                }
            </div>
            <button className='view-more' onClick={()=>nav('/misiones')}>
                Ver mas misiones</button>
        </div>
    )
}

export default HomeMisiones