import React from 'react';
import { Div, H3, Div1, H2, P, Button, Img, DivC,DivD,DivE,DivF, Div2 } from '../styles/features';

import { FiGithub } from "react-icons/fi";

const  image = "https://www.tierragamer.com/wp-content/uploads/2020/09/Avatar-Yangchen.jpg"
const Features = ({ name='name', quienSoy, urlGitHub, photo }) => {
    const style = { textDecoration: 'none' }
    return (
        <Div>
            {/* <DivC></DivC><DivD></DivD><DivE></DivE><DivF></DivF> */}
            <Div1>
                <H2>{ name }</H2>
                <H3>"{ quienSoy }"</H3>
                <P>Desarrollador Front-end</P>
                <a href={urlGitHub} target="_blank" style={style}>
                    <Button>Mi perfil en <FiGithub size={20}/></Button>
                </a>
            </Div1>
           <Div2> <Img src={photo} alt="" /> </Div2>
        </Div>
    );
};

export default Features;