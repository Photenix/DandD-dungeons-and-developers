import { useState } from "react";
import { deletClass, updateClass } from "../helpers/class";

import { IoTrashOutline } from "react-icons/io5";
import { BsCheckLg, BsXLg, BsPencil } from "react-icons/bs";
import Select from "./Select";
import salones from "../tools/salones";

const CardMentoria = ({ date, hour, materia, salon,
    semestre, cedula, uid }) => {

    const [ myUid, setMyUid ] = useState( uid )
    const [ canEdit, setCanEdit ] = useState( false )

    const [ salonC, setSalonC ] = useState( salon )

    const handleDelet = (e) =>{
        if( !canEdit ){
            let node = e.target
            //let node = e.target.className        
            while (true) {
                if( node.className == 'd-e' ){
                    node.parentElement.remove();
                    break
                }
                node = node.parentNode
            }
            
            deletClass( myUid )
        }
        else{
            setCanEdit( false )
        }
    }

    const handleEdit = e =>{
        let s
        if( !canEdit ){
            setCanEdit( true )
        }
        else{
            let node = e.target
            
            while (true) {
                if( node.className == 'card-class' ){
                    s = node
                    break
                }
                node = node.parentNode
            }
            s = s.querySelector("#salon").value
            setSalonC( s )

            /* const json ={
                date, hour, materia,
                semestre, cedula
            } */
            /* json.salon = salonC */
            
            updateClass( uid, salonC )
                .then( e => setCanEdit( false ) )
                .catch( e => console.error(e) )
            
        }
    }

    

    return (
        <div className="card-class">
            <img src="" alt={ `${materia}`} />
            <div className="info">
                <div className="info-name">
                    <p>Encargad@</p>
                    <h3>{ cedula }</h3>
                </div>
                <div className="info-date">
                    <div className="time">
                        <h3>{ date }</h3>
                        <h3>{ hour }</h3>
                    </div>
                    {   
                        canEdit
                            ?<Select array={ salones } name='salon' />
                            :<h2>{ salonC }</h2>
                    }
                    <h2>{ semestre }</h2>
                </div>
            </div>
            <div className="d-e">
                <button className="e" onClick={ handleEdit }>
                    {
                        canEdit
                            ?<BsCheckLg size={20}/>
                            :<BsPencil size={20}/>
                    }
                </button>
                <button className="d" onClick={ handleDelet }>
                    {
                        canEdit
                            ?<BsXLg size={20}/>
                            :<IoTrashOutline size={20} />
                    }
                </button>
            </div>
        </div>
    );
};

export default CardMentoria;