import React, { useEffect } from 'react';

const ChangeTitle = ({ title }) => {
    useEffect(()=>{
        document.title= title
    },[])
};

export default ChangeTitle;