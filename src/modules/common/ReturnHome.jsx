import React from 'react';

import { FaHome } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';

const ReturnHome = () => {

    const nav = useNavigate()

    const style = {
        position: "absolute",
        left: '20px',
        top: '20px',
        cursor: 'pointer'
    }

    return (
        <FaHome size={40} style={style} onClick={ ()=>nav('/') }/>
    );
};

export default ReturnHome;