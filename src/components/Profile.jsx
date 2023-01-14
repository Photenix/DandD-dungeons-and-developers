import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import '../styles/sass/Profile.scss'

import nuevo_aventurero from '../assets/logros/nuevo_aventurero.png'

import { AiOutlineBook, AiOutlineQuestionCircle } from "react-icons/ai";
import { BiGlassesAlt } from "react-icons/bi";
import { useNavigate } from 'react-router-dom';

import { GiBurningSkull } from "react-icons/gi";

import InputFileImg from './InputFileImg';
import ChangeTitle from '../tools/ChangeTitle' 
import { cargaImg } from '../helpers/boss';

const Card = ({ children, name, path }) =>{
    const nav = useNavigate()
        return(
            <div className="create-card" onClick={ () => nav( '/crear/' + path ) }>
            { children }
                <h2>{ name }</h2>
            </div>
        )
}


const Profile =  () => {
    const { user } = useSelector( state => state.login )
    const [ cantChange, setCanChange ] = useState( false )
    const [ userInfo, setUserInfo ] = useState({
        name: user.info?.name,
        img: user.info?.img,
    })
    const [ userImg, setUserImg ] = useState('')
    
    useEffect(()=>{
        if( user.info?.img == undefined ){
            cargaImg()
                .then( e => e[0])
                .then( e =>{
                    const{ img } = upData[0]
                    userInfo.img = img
                })
        }
    },[ user ])

    const canAll = ( ) =>{
        if( user?.role == 'admi'){
            return(
                <>
                    <Card name={'Crear mision'} path='mision'> 
                        <AiOutlineBook size={100}/> </Card>
                    <Card name={'Crear jefe'} path='boss'> 
                        <GiBurningSkull size={100}/> </Card>
                    <Card name={'Crear clase'} path='clase'> 
                        <BiGlassesAlt size={100}/> </Card>
                    <Card name={'Crear cuestionario'} path='cuestionario'> 
                        <AiOutlineQuestionCircle size={100}/> </Card>
                </>
            )
        }
        else return <Card name={'Crear mision'} path='mision'> <AiOutlineBook size={100}/> </Card>
    }

    return (
        <div className="profile">
            <ChangeTitle title={'Perfil'}/>
            <div className="info">
                <div className="info-img">
                    <img src={ userInfo.img } alt="imagen" />
                    <InputFileImg  callCardChange={ userInfo }/>
                </div>
                <div className="info-inputs">
                    <label htmlFor="name">Nombre</label>
                    <input type="text" name="name" id="name"
                        value={ userInfo.name }  disabled={ !cantChange }/>
                </div>
            </div>
            <div className="profile-create">
                {
                    canAll()
                }
            </div>
            <div className="rewards">
                <h2>Logros</h2>
                <div className="rewards-container">
                    <img src={ nuevo_aventurero } alt="imagen" title='nuevo_aventurero'/>
                    {
                        user?.logros.map( e =>
                            <img src={ e.img_logro } alt="imagen" title={ e.nombre_logro }/>
                        )
                    }
                </div>
            </div>
      </div>
           
 )  }
export default Profile;




