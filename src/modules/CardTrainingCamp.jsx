import React from 'react';
import CardMainTwo from '../modules/common/CardMainTwo';
import { Div, H3, Input, Div1, Div2, Img, Div3, ContainerTGCard } from '../styles/trainigGround';
const image = "https://res.cloudinary.com/dnezkinuo/image/upload/v1662141608/trofeo_jd9z3h.png"

const CardTrainingCamp = ({title, description}) => {

    console.log(title,description)
    return(
        <Div1>
            <CardMainTwo name={title} description={ description }/>
            <Div3>
                <Img src={image} alt="" />
            </Div3>
        </Div1>
    )
};

export default CardTrainingCamp;