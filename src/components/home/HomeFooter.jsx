import React from 'react'
import '../../styles/sass/Footer.scss'

function HomeFooter() {

    /*
        TODO: Segun cuantas pestañas hacer un arreglo de objetos
        ?este debe entregarme una direccion y un nombre
    */

    const pestañas = [
        'Niveles', 'Misiones', 'Jefes'
    ]

    const FAQS = [
        'Nosotros', 'Que es D&D'
    ]

    return (
        <footer className='container-footer'>
            <div className="info-footer1">
                <p>
                    Buscamos llevar a la luz a nuestros valientes guerreros,
                    que se enfrentan con las sombras.
                </p>
                <p className='bold-text'>Contactanos</p>
                <p>Correogenerico@gmail.com</p>
            </div>
            {/* <div className="info-footer2">
                <p className='bold-text'>Programs</p>
                <p>Text</p>
                <p>Text</p>
                <p>Text</p>
                <p>Text</p>
                <p>Text</p>
            </div> */}
            <div className="info-footer3">
                <p className='bold-text'>General</p>
                {
                    pestañas.map( e => <p>{e}</p> )
                }
            </div>
        </footer>
    )
}

export default HomeFooter