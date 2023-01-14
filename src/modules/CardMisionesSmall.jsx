import '../styles/sass/CardMisionesSmall.scss'
import js_image from '../assets/js.svg'
import { useNavigate } from 'react-router-dom'

function CardMisionesSmall({ titulo, uid }) {

    const nav = useNavigate()

    return (

        <div className='card-small'>
            <img src={ js_image } alt="" />
            {/* <div className='card-img' style={{backgroundImage:`url(${js_image})`}}>
            </div> */}
            <div className='text-section'>
                <p className='text-titulo' onClick={() => nav( '/mision/'+ uid )}>
                    { titulo }
                </p>
                <p className='text-description'>
                </p>
            </div>
        </div>

    )
}

export default CardMisionesSmall