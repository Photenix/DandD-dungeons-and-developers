import '../../styles/sass/CardMain.scss'

import js from '../../assets/JS.png'
import StyleCode from '../../tools/styleCode';
import { useNavigate } from 'react-router-dom';


const FooterCardMain = ({ level, types }) =>{
    return (
        <footer>

        </footer>
    )
}

const CardMainTwo = ({ name, description,uid,isAuto= false, exampleCode= false, quality={} }) => {

    const nav = useNavigate()
    

    const cardMainClass = isAuto ?'card-main' :'card-main not-auto'

    const code = `//this is a example
const x = 1
const y = true ?1 :0
console.log( y + x )
for( let i = 0; i<10; i++) console.log( i )
`   
    const { path, id } = { path:'/nivel/', id:uid}

    return (
        <div className={ cardMainClass }>
            <div className="card-main-text">
                <img src={ js } alt="java script" />
                <h2 onClick={ () => nav( path + id ) }>{ name }</h2>
            </div>
            <div className="card-main-info" >
                <h3  >{ description  }</h3>
            </div>
            {
                exampleCode
                    ?<StyleCode code={ code } />
                    :''
            }
            {
                !quality?.level
                    ?''
                    :<FooterCardMain level={ quality.level } types={ quality?.types }/>
            }
        </div>
    );
};

export default CardMainTwo;