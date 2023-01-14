import React, { useRef } from 'react'
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

import '../../styles/sass/PreguntaCuestionario.scss'

function PreguntaCuestionario({ dato }) {

  //console.log( dato )
  
  let preguntas = [ ...dato ]

  let selectedAw = (e) => {

    //      e.target.classList.toggle('label-selected')


  }

  return (

    <>
      <Swiper slidesPerView={2} navigation={true} modules={[Navigation]} className="mySwiper">

        {

          preguntas.map( (valor, llave) => {
            //console.log( valor, llave )
            return (

            <SwiperSlide>
              <div className='contenedor-pregunta'>
                <h2 className='pregunta-number'>Pregunta #{(llave + 1)}</h2>
                <p className='pregunta-titulo'>{valor.nombre_pregunta}</p>
                <div className='listado-respuestas'>

                  <div className="respuesta">
                    <input type="radio" name={`pregunta` + (llave + 1)} id={`respuesta1t` + (llave + 1)} value={`respuesta_1t`} />
                    <label className='vista-r' htmlFor={`respuesta1t` + (llave + 1)}>
                      A
                    </label>
                    <p className='texto-respuesta'>
                      {valor.respuesta_1t}
                    </p>
                  </div>
                  <div className="respuesta">
                    <input type="radio" name={`pregunta` + (llave + 1)} id={`respuesta2t` + (llave + 1)} value={`respuesta_2t`} />
                    <label className='vista-r' htmlFor={`respuesta2t` + (llave + 1)}>

                      B

                    </label>
                    <p className='texto-respuesta'>
                      {valor.respuesta_2t}
                    </p>
                  </div>
                  <div className="respuesta">

                    <input type="radio" name={`pregunta` + (llave + 1)} id={`respuesta3t` + (llave + 1)} value={`respuesta_3t`} />
                    <label className='vista-r' htmlFor={`respuesta3t` + (llave + 1)}>

                      C

                    </label>
                    <p className='texto-respuesta'>
                      {valor.respuesta_3t}
                    </p>

                  </div>
                  <div className="respuesta">

                    <input type="radio" name={`pregunta` + (llave + 1)} id={`respuesta4t` + (llave + 1)} value={`respuesta_4t`} />
                    <label className='vista-r' htmlFor={`respuesta4t` + (llave + 1)}>

                      D

                    </label>
                    <p className='texto-respuesta'>
                      {valor.respuesta_4t}
                    </p>

                  </div>

                </div>
              </div>
            </SwiperSlide>

          )})

        }

      </Swiper>


    </>
  )
}

export default PreguntaCuestionario