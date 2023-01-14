import React, { useRef } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { logoutAsync } from '../redux/actions/actionLogin';
import { Div2, Button, Div, Div1, H3, Img, Button2 } from '../styles/Home/Navbar'
import '../styles/sass/NavBar.scss'

//const logo  = "https://res.cloudinary.com/dnezkinuo/image/upload/v1661987726/Vector_1_pd8tc0.png"
import logo from "../assets/logo_t.png"

const SingInUp = () => {
    const nav = useNavigate()

    const style = {
        display: 'flex',
        gap: "12px"
    }

    const handleSingIn = () => nav('/sing-in')

    const handleSingUp = () => nav('/sing-up')

    return (
        <div style={style}>
            <Button onClick={handleSingIn} >Sign In</Button>
            <Button onClick={handleSingUp} >Sign Up</Button>
        </div>
    )
}

const SingOutProfile = () => {

    const dispatch = useDispatch()
    const nav = useNavigate()

    const style = {
        display: 'flex',
        gap: "12px"
    }

    return (
        <div className='btn-auth' style={style}>
            <Button onClick={() => nav('/perfil')}>Mi perfil</Button>
            <Button onClick={() => {
                dispatch(logoutAsync())
                location.reload();
            }}>Sing Out</Button>
        </div>
    )
}

const Navbar = ({ isAuth }) => {

    const nav = useNavigate()
    const dispatch = useDispatch()

    /* let navigate = [
        {
            name: 'Campo de entrenamiento',
            nav: '/trainingGround'
        },
        {
            name: 'Misiones',
            nav: '/misiones'
        },
        {
            name: 'Enfrentamiento de jefe',
            nav: '/'
        },
    ] */
    let navigate = [
        {
            name: 'Campo de entrenamiento',
            nav: '/trainingGround'
        },
        {
            name: 'Misiones',
            nav: '/misiones'
        },
    ]

    if (!isAuth) {
        navigate = [
        ]
    }


    const elemento = useRef('');

    const closeNav = () => {
        elemento.current.classList.toggle("width-size");

    }
    const openNav = () => {
        console.log("Que si enras")
        elemento.current.classList.toggle("width-size");
    }
    return (
        <>

        <div className='container-topnav'>
            <Div class="topnav" id="myTopnav" ref={elemento} >

                <Div1 onClick={() => nav('/')} >
                    <Img src={logo} alt="img" /><H3>{'D&D'}</H3>
                </Div1>

                <Div2 className='btn-list' >
                    {
                        navigate.map(e => <Button2 onClick={() => nav(e.nav)}>
                            {e.name}
                        </Button2>)
                    }
                </Div2>

                {
                    isAuth
                        ? <SingOutProfile />
                        : <SingInUp />
                }

            </Div>
            <i class="fa fa-bars btn-open" style={{display:'none'}} onClick={openNav} ></i>

            </div>
        </>
    );
};

export default Navbar;