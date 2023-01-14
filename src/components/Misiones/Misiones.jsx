import { useEffect, useState } from 'react';
import { getMissions } from '../../helpers/mission';
import CardMain from '../../modules/common/CardMain'

import '../../styles/sass/Misiones.scss'
import getRandomInt from '../../tools/numberRandomInt';

const Misiones = () => {
    const [ example, setExample ] = useState([])
    const [ cardRandom, setCardRandom ] = useState(<h1>Buscando reto...</h1>)

    useEffect( ()=>{
        document.title = 'Misiones'
        getMissions()
            .then( e => {
                setExample( e )
                randomCard( e )
            })
            .catch( e => console.log( e ) )
    },[])

    const randomCard = ( listMissions ) =>{
        //mission random
        const mR = listMissions[ getRandomInt(listMissions.length) ]

        setCardRandom(
            <CardMain name={mR.title_mission} 
                description={mR.description} direction={{ path:'/mision/', id: mR.uid }}/>
        )
    }

    const niveles = totalNiveles =>{
        const node = []
        for (let i = 1; i <= totalNiveles; i++) { node.push(i) }
        return node
    }

    const levels = [ 'Todos', ...niveles( 7 )]

    const types = [
        'Todos', 'Matematicas', 'Condicionales', 'Bucles'
    ]

    const select = ( e, idFilter ) =>{
        const parent = document.getElementById( idFilter ).childNodes
        //console.log( parent );
        for (let i = 0; i < parent.length; i++) {
            const element = parent[i];
            element.className = 'misiones-filters-button'
        }
        e.target.classList.add('active')
    }

    return (
        <div className="misiones">
            <div className="mision-diaria">
                <h2>Que mejor que empezar random</h2>
                {
                    cardRandom
                }
            </div>
            {/* <div className="misiones-filters">
                <h2>Filtrar por nivel</h2>
                <div className="misiones-filters-level" id='f-levels'>
                    {
                        levels.map( e => {
                            return e ==='Todos' 
                                ?<button onClick={ e => select( e, 'f-levels' ) }
                                    className="misiones-filters-button active"> { e } </button>
                                :<button onClick={ e => select( e, 'f-levels' ) }
                                    className="misiones-filters-button"> {`nivel ${e}`} </button>
                        })
                    }
                </div>
                <h2>Filtrar por conocimientos</h2>
                <div className="misiones-filters-types" id='f-types'>
                    {
                        types.map( e => <button onClick={ e => select( e, 'f-types' ) }
                        className="misiones-filters-button"> { e } </button> )
                    }
                </div>
            </div> */}
            
            <div className="misiones-container">
                {
                    example.map( e  => <CardMain name={e["title_mission"]} 
                    description={e.description} direction={{ path:'/mision/', id: e.uid }}/> )
                }
            </div>
        </div>
    );
};

export default Misiones;