import '../styles/sass/Tecnologi.scss'

import img1 from '../assets/tecnologias/js.png'
import img2 from '../assets/tecnologias/redux.jpg'
import img3 from '../assets/tecnologias/sass.png'
import img4 from '../assets/tecnologias/firebase_logo.png'
import img5 from '../assets/tecnologias/styled-components.png'
import img6 from '../assets/tecnologias/react.png'

const Tecnologi = () => {

    const images = [
        img1, img2, img3,
        img4, img5, img6
    ]

    return (
        <div className="tecnologias">
            <h2>Tecnologías implementadas</h2>
            <div className="tecnologias-container">
                {
                    images.map( e => <img src={e} alt="Not Found" /> )
                }
            </div>
        </div>
    );
};

export default Tecnologi;