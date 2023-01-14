import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { findMission } from '../../helpers/mission';
import Load from '../../modules/common/Load';

import '../../styles/sass/Mision.scss'

const Mision = () => {
    const { idMision } = useParams()

    const [ isload, setIsLoad ] = useState(false)

    const [ misionElement , setMisionElement ] = useState( {
        title: 'Titulo secreto',
        description: `Hola
Gracias por ser parte de nuestro proyecto
nos gusta mucho la educacion y por eso a la oda de la educacion aqui esta este escrito
es un escrito secreto que vera muy poca gente, muchas gracias por estar :)  --Es un honor
PD: Se que lo haras de todo modos, pero no hackees, este codigo es libre para todos
`,
        types:{
        },
        url_answer: '',
        url_info: '',
    })

    useEffect(()=>{
        
        findMission( idMision )
            .then( data => {
                //console.log( data )
                document.title = data['title_mission']
                setMisionElement({
                    title: data['title_mission'],
                    description: data.description,
                    types: data.entrena,
                    url_answer: data.url_answer,
                    url_info: data.url_info,
                })
                setIsLoad( true )
            })
            .catch( error => console.log( error ))
    },[])

    const types = () => {
        const { types } = misionElement
        const node = []
        for (const key in types ) {
            if (Object.hasOwnProperty.call(types, key)) {
                const element = types[key];
                const capitalized = key.charAt(0).toUpperCase() + key.slice(1);
                if( element ){
                    node.push(
                        <button>{ capitalized }</button>
                    )
                }
            }
        }
        return node 
    }
    
    const MisionShow = () => {
        return(
            <div className='mision'>
                <div className="mision-description">
                    <h1>{ misionElement.title }</h1>
                    <pre style={{whiteSpace: "pre-wrap"}}><p>{ misionElement.description }</p></pre>
                    <div className='mision-description-buttons'>
                        <a href={misionElement.url_info}><button>Informacion</button></a>
                        <a href={misionElement.url_answer}><button>Respuesta</button></a>
                    </div>
                </div>
                <div className="mision-types">
                    <h1>Te desafias</h1>
                    {
                        types()
                    }
                </div>
            </div>
        )
    }

    return (
        <>
            {
                isload
                    ?<MisionShow/>
                    :<Load/>
            }
        </>
    );
};

export default Mision;