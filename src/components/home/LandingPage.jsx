import { useNavigate } from 'react-router-dom';
import Carrousel from '../../modules/common/Carrousel';
import '../../styles/sass/LandingPage.scss'

import img from '../../assets/gioele-fazzeri-mm1yH-RaU2s-unsplash.jpg'
import img2 from '../../assets/jonathan-kemper-4_ZvmLAeIZk-unsplash.jpg'
import img3 from '../../assets/nik-shuliahin-JOzv_pAkcMk-unsplash.jpg'
import Tecnologi from '../../modules/Tecnologi';
import Features from '../Features';
import HomeFooter from './HomeFooter';
import imgSebastian from '../../assets/perfil/sebastian.jpeg'
import tavern from '../../assets/tavern.jpg'
import imgEsteban from '../../assets/perfil/Esteban.jpg'
import juanimg from '../../assets/perfil/Juan.jpeg'

const Card = ({ color, info={ title:'', description:'' } }) =>{
    const style = { background: color }
    return(
        <div className="landing-page-card" style={style}>
            <h2>{ info.title }</h2>
            <p>{ info.description }</p>
        </div>
    )
}

const LandingPage = () => {
    const nav = useNavigate()

    const TM =`D
  &
     D`

const TINFO = `Dungeons and Developers por su siglas D&D queremos que empieces tu camino de programacion de manera divertida.
¿eres un novato? Sin problema te queremos aqui
¿Ya se algunas cosas? Ponte retos y completa nuestros desafios
¿Te gustaria aportar con retos? Haberlo dicho antes te estas demorando

Nuestras masmorras te esperan`

    const niveles = [
        {
            title:'Aspirante a aventurero',
            description:'Comienza con una introducion por los conceptos basicos para introducirte en este maravilloso mundo.'
        },
        {
            title:'Aventurero',
            description:'Si tenes los conecptos basicos claros, podes seguir adquiriendo conocimientos desde aqui.'
        },
        {
            title:'Veterano',
            description:'Aprende los trucos y herramientas mas avanzadas para que termines de convertirte en un profesional.'
        }
    ]


    const descriptionJuan = `La programacion puede llegar a ser uno de los artes mas bellos y un reto logico bastante interesante, que solo la perseverancia dara sus frutos.`
    const linkJuan = 'https://github.com/Photenix'

    const descriptionEsteban = `Creo que gran parte del por que me gusta programar, es el tener la posibilidad de crear y resolver problemas`
    const linkEsteban = 'https://github.com/Gladiiadorcibernetico'

    const descriptionSebastian = `Soy un fiel creyente en la tecnologica como vía de crecimiento y apoyo social, para la contrstución de una sociedad mejor a través de los sistemas de información`
    const linkSebastian = 'https://github.com/sebastianzapateiro'

    const node = [
        <div className='pre-con'>
            <img src={img2} alt="" />
            <Card color={"#FF6B6B"} info={ niveles[0] } />
        </div>,
        <div className='pre-con'>
            <img src={img3} alt="" />
            <Card color={"#EA4848"} info={ niveles[1] } />
        </div>,
        <div className='pre-con'>
            <img src={img2} alt="" />
            <Card color={"#FF6B6B"} info={ niveles[0] } />
        </div>
    ]
    
    return (
        <div className="landing-page">
            <div className="landing-page-info">
                <div className="landing-page-info-text">
                    <pre><h1 className="text-main">{ TM }</h1></pre>
                    <pre style={{whiteSpace: "pre-wrap"}}><p>{ TINFO }</p></pre>
                    
                    <button onClick={()=>nav('/sobre_nosotros')}>FAQ</button>
                </div>
                <img style={{borderRadius:'10px'}} src={tavern} alt="Mockup" />
            </div>

            <Carrousel>
                <div className='pre-con'>
                    <img src={img2} alt="" />
                    <Card color={"#FF6B6B"} info={ niveles[0] } />
                </div>
                <div className='pre-con'>
                    <img src={img3} alt="" />
                    <Card color={"#EA4848"} info={ niveles[1] } />
                </div>
                <div className='pre-con'>
                    <img src={img} alt="" />
                    <Card color={"#931323"} info={ niveles[2] } />
                </div>
            </Carrousel>

            <Features name='Juan Manuel Pino'
                quienSoy={ descriptionJuan } urlGitHub={ linkJuan } photo={juanimg} />
            <Features name='Sebastian Zapateiro' 
                quienSoy={ descriptionSebastian } urlGitHub= { linkSebastian } photo={imgSebastian}/>
            <Features name='Esteban M  Gilabert' 
                quienSoy={ descriptionEsteban } urlGitHub= { linkEsteban } photo={imgEsteban} />
            <Tecnologi/>
            <HomeFooter/>
        </div>
    );
};

export default LandingPage;