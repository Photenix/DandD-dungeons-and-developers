import React, {useState, useEffect} from 'react';
import CardBigBoss from './CardBigBoss';
import '../styles/sass/BigBoss.scss'
import { getBoss } from '../helpers/boss';

const BigBoss = () => {
    const [array, setArray] = useState([])
    const testName = 'Coloso de las matematicas';
    const testDescription = 'Es un ente que solo puede ser saciado despues de haber consumido toda la energia del guerrero.';
    const newArrayBoss = array.slice(0,4);

    useEffect(()=>{
        getBoss()
            .then( e =>  setArray(e) )
            .catch( e => console.log( e ) )
    },[])

    return (
        <div className="big-boss">
            <div className="big-boss-text">
                <h1>Jefes</h1>
                <h2>Quieres poner a prueba tus habilidades, enfrentate a estos retos colosos</h2>
            </div>
            <div className="big-boss-container">
                {          
                    newArrayBoss.map(e =>
                        <CardBigBoss title={ e.title_mission } imgUrl={ e. url_cloudinary } description={ e.description_s} />
                    )
                }
            </div>
        </div>
    );
};

export default BigBoss;