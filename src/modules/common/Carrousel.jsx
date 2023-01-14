import { useState } from 'react';
import '../../styles/sass/Carrousel.scss'

import { BsChevronLeft, BsChevronRight } from "react-icons/bs";

const Carrousel = ({ children, }) => {
    const [ show, setShow ] = useState(0)
    
    const handleOnClick = num =>{
        if( show + num < 0 ) setShow( children.length - 1 )
        else if (show + num > children.length - 1 ) setShow( 0 )
        else setShow( show => show + num )
    }
    return (
        <div className='carrousel'>
            <div className="carrousel-container">
                {children[show]}
            </div>
            <div className="carrousel-button">
                <BsChevronLeft size={30} onClick={ ()=> handleOnClick(-1) } />
                <BsChevronRight size={30} onClick={ ()=> handleOnClick(1) }/>
            </div>
        </div>
    );
};

export default Carrousel;