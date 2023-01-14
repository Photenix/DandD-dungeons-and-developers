import React, { useState, useEffect } from 'react';

import '../styles/sass/Search.scss'


const Search = () =>{

    const handleSubmit = e =>{
        e.defaultEvent()

        console.log( e.target );
        console.log( 'vivo en un mundo de mentiras fabricando fantasias' );
    }

    return(
        <form className="search" 
            onSubmit={ handleSubmit }>
            <input type="text" placeholder='Search'/>
            <button type="submit">O</button>
        </form>
    )
}

export default Search