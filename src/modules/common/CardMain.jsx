import '../../styles/sass/CardMain.scss'

import js from '../../assets/JS.png'
import StyleCode from '../../tools/styleCode';
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';


const FooterCardMain = ({ level, types }) =>{
    return (
        <footer>

        </footer>
    )
}

const CardMain = ({ name, description, isAuto= false, codeEx, 
    quality={}, direction={ path:'/nivel/', id:21 } }) => {

    const [ code, setCode ] = useState(`//this is a example
const x = 1
const y = true ?1 :0
console.log( y + x )
for( let i = 0; i<10; i++) console.log( i )
`)

    const nav = useNavigate()
    
    const lorem = 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Harum vel minus ipsum perspiciatis beatae animi porro provident hic sit nostrum ad architecto, distinctio saepe qui dolorum ullam quam illum aperiam!'

    const cardMainClass = isAuto ?'card-main' :'card-main not-auto'
    const { path, id } = direction

    useEffect(()=>{
        if( codeEx != undefined ) setCode( codeEx )
    },[])

    useEffect(()=>{
        if( codeEx != undefined ) setCode( codeEx )
    },[ codeEx ])

    return (
        <div className={ cardMainClass }>
            <div className="card-main-text">
                <img src={ js } alt="java script" />
                <h2 onClick={ () => nav( path + id ) }>{ name }</h2>
            </div>
            <div className="card-main-info" >
                <h3  >{ description == '' ?lorem :description }</h3>
            </div>
            {
                codeEx != undefined
                    ?<StyleCode code={ code } />
                    :''
            }
            {
                !quality?.level
                    ?''
                    :<FooterCardMain level={ quality.level } types={ quality?.types }/>
            }
        </div>
    );
};

export default CardMain;