import React from 'react'
import '../../styles/sass/DescriptionLevel.scss'

function DescriptionLevel(props) {
  
  //console.log(props.arreglo);
  
  return (
    <div className='contenedor-description'>

      <h1 className='titulo'>{props.arreglo.title_clase}</h1>
      <p className='description'>
      
      {props.arreglo.form_descripcion}
      </p>

    </div>
  )
}

export default DescriptionLevel