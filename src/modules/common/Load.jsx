import img from '../../assets/johnny_automatic_dove_with_love_letter.svg'
import '../../styles/sass/Load.scss'

const Load = () => {
    return (
        <div className='load'>
            <img src={ img } alt="" />
            <h1>La paloma esta recibiendo tu mision</h1>
        </div>
    );
};

export default Load;