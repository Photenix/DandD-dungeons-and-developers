import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import img from '../assets/arbol.png'

import '../styles/sass/CardBigBoss.scss'

const CardBigBoss = ({ title, description, imgUrl = img, disabled= false }) => {
    const nav = useNavigate()
    
    const [ isFront, setUseFront ] = useState( true )

    const handleOnCLick = e =>{
        //console.log( e.target );
        if( e.target.id != 'challenge' ){
            setUseFront( !isFront )
        }
    }

    const classCard = isFront ?'big-boss-img' :'big-boss-img big-boss-img-rotate'

    return (
        <div className={classCard} onClick={ handleOnCLick }>
           {
            isFront
                ?<img src={ imgUrl } alt="Boss" className='big-boss-img-front'/>
                :<div className="big-boss-img-back">
                    <h2>{ title }</h2>
                    <p>{ description }</p>
                    {
                        disabled
                            ?''
                            :<button id='challenge' onClick={ () => { nav('/mision/Boss')}}>
                                Aceptar
                            </button>
                    }
                </div>
            }
        </div>
    )
};

export default CardBigBoss;