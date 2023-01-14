import { useState } from 'react';

import '../../styles/sass/PreviewFileImgLogro.scss';

import { BiCamera } from "react-icons/bi";

const PreviewFileImgLogro = () => {
    
    const [ img, setImg ] = useState('')

    const handleChangePreview = e =>{
        const files = e.target.files;
        const url = URL.createObjectURL( files[0] )
        setImg( url )
    }

    return (
        <div className='preview-contain'>
            <label htmlFor="img_logo">
                <BiCamera size={70} color={'#FFFFFF'} className={'camera'}/>
            </label>
            <input type="file" name="img_logo" id="img_logo" 
                accept='image/*' onChange={ handleChangePreview }/>
            <img src={ img } alt="" />
        </div>
    );
};

export default PreviewFileImgLogro;