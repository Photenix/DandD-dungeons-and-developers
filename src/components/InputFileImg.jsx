import React , { useState } from 'react';
import { useSelector } from 'react-redux';
import { Input } from 'reactstrap'
import { cargaImg , uploadImageFirestore} from '../helpers/boss';
import { updateImgUser } from '../helpers/user';

import '../styles/sass/InputFileImg.scss'

const InputFileImg = ({ callCardChange, setStateChange }) => {
    
    const [image, setImage] = useState("");
    const [loading, setLoading] = useState(false);

    const [ existUrl, setExistUrl ] = useState( false )
    const [ url, setUrl ] = useState( '' )

    const { user } = useSelector( state => state.login )

    const handleChangeFile = e =>{
        const files = e.target.files;
        const url = URL.createObjectURL( files[0] )
        try{
            callCardChange.img = url
        }catch( e ){ }
    }

    const setChange = e =>{
        const files = e.target.files;
        const url = URL.createObjectURL( files[0] )
        try{
            setStateChange( url )
        }catch( e ){ }
    }

    const uploadImage = async (e) => {
        e.preventDefault();
        const files = document.getElementById('exampleFile').files;
        const data = new FormData();
        data.append("file", files[0]);
        data.append("upload_preset", "images");

        // console.log( url );
        setLoading(true);
        const res = await fetch(
            "https://api.cloudinary.com/v1_1/dq5sd02fy/image/upload",
            {
                method: "POST",
                body: data,
            }
        )
        const file = await res.json();

        setUrl( file.secure_url )
        setExistUrl( true )
        /* setImage(file.secure_url)
        uploadImageFirestore(file.secure_url);
        setLoading(false)  */
        const info = user.info
        info.img = file.secure_url
        
        //updateImgUser( user.uid, info )

        console.log(file.secure_url) 
        console.log(image)
        //setTimeout(function(){ window.location.reload()},2000)
    }

    return (
        <div className='upload-img'>
            <h2>Subiendo imagenes</h2>
            <div>
                <Input id="exampleFile" name="file" type="file" 
                    placeholder='"Sube tu imagen aqui' 
                    onChange={ e =>{
                        handleChangeFile( e )
                        setChange( e )
                    }} 
                    accept='image/*'/>
                <button type="submit" onClick={uploadImage}>
                    Subir a la nube</button>
            </div>
            {
                existUrl
                    ?<h3 id='url_cloudinary'>{ url }</h3>
                    :''
            }
        </div>
    );
};


export default InputFileImg;