import { useDispatch, useSelector } from 'react-redux';
import BigBoss from '../../modules/BigBoss';
import ChangeTitle from '../../tools/ChangeTitle';
import ComponentOne from './ComponentOne';
import HomeFooter from './HomeFooter';
import HomeMisiones from './HomeMisiones';

const HomeRegister = () => {
    
    const  { user }  = useSelector( state => state.login ) 

    return (
        <div className="home" style={{"width": "100%"}}>
            <ChangeTitle title={'Home'}/>
            <ComponentOne/>
            <BigBoss/>
            <HomeMisiones/>
            <HomeFooter/>
        </div>
    );
};

export default HomeRegister;