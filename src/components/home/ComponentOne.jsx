import React from 'react';
import SubCompOne from './SubCompOne';
import {  Div1, H1, Div2, DivC, DivD, DivE, DivF } from '../../styles/Home/ComponentOne';
import CardMain from '../../modules/common/CardMain';


const ComponentOne = () => {

        const arrayPrint = [
            {
                named:"¡Variables!",
                image:  "https://res.cloudinary.com/dnezkinuo/image/upload/v1661989121/Icon_x5hbmh.png",
                name: "introducion a Java",
                uid:"lg7QjnsxxIci26Wn8dSv",
                description: "¿Cómo trabaja Js para poder hacer operaciones con datos? ¡Intenta este campo de entrenamiento para aprder más! Adrentate a este nuevo mundo de conocimiento, saberes y pruebas divertidas. Comprenderas los conceptos claves para el manejo de datos y operaciones entre variables",
                id: 1
            },
            {
                named:"¡Ciclos que van y vienen!",
                image:  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS4aaK6bQJ49r3C7PEYN0oGxE9lxOQsqmPO4A&usqp=CAU",
                uid: "81Wn8LNuec6RnC3MI3Lp",
                description:"¡Repetir operaciones una y otra vez! ¿Pero hasta cuando? ¡Intenta este campo de entrenamiento y conoce más! Continua con este proceso de apredinzaje, ¿Estas listo? Es hora de conocer los bucles o ciclos en JavaScript, ¿Te sientes preparado? ¡Empecemos!",
                name: "Introducion a Phyton",
                id: 2
            },
          
        ]

    return (
        <div>
          
                <Div1>
                    <H1>Campo de entrenamiento</H1>
                </Div1>
                
                <Div2>  
                    {/* <DivC></DivC>
                    <DivD></DivD>
                    <DivE></DivE>
                    <DivF></DivF> */}
                    {arrayPrint.map( array => 
                        <CardMain name={array.named} direction={{ path:'/nivel/', id:array.uid  }} description={array.description}/>
                    )}
                </Div2>
        
        </div>
    );
};

export default ComponentOne;