import React, { useEffect, useState } from 'react';
import { onAuthStateChanged } from 'firebase/auth';
import { useDispatch } from 'react-redux';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { useParams } from 'react-router-dom';

import HomeRegister from '../components/home/HomeRegister';
import LandingPage from '../components/home/LandingPage';

import { authentication } from '../firebase.config';
import { login } from '../redux/actions/actionLogin';
import { createDBUser, existUser } from '../helpers/user';

import { PublicRouter as PubR } from './PublicRouter';
import { PrivateRouter as PriR } from './PrivateRouter';
import { PrivateRouterC as PriRC } from './PrivateRouterC';

import Navbar from '../modules/Navbar';
import SingIn from '../components/SingIn';
import SingUp from '../components/SingUp';
import PageNivel from '../components/PageNivel';
import TrainingGround from '../components/TrainingGround';
import Features from '../components/Features';
import Profile from '../components/Profile';

import NotFound from '../components/NotFound';

import Misiones from '../components/Misiones/Misiones';
import Mision from '../components/Misiones/Mision';

import CrearCuestionario from '../components/Create/CrearCuestionario';
import CrearMisiones from '../components/Create/CrearMisiones';
import CrearClases from '../components/Create/CrearClases';
import CrearBoss from '../components/Create/CrearBoss';

const AppRouters = () => {

    const [isAuth, setIsAuth] = useState(false)
    const [isAdmin, setIsAdmin] = useState(false)

    const dispatch = useDispatch()

    useEffect(() => {
        onAuthStateChanged(authentication,
            user => {
                if (user?.uid) {
                    setIsAuth(true)
                    //dispatch(login( user.uid, user.email, '', user.displayName ))
                    existUser( user.uid )
                        .then( e => {
                            dispatch(login( e ))
                            if( e == null) {
                                createDBUser( user.uid, user.displayName, user.email, user.photoURL )
                            }
                        })
                }
                else ''
            
                
            
            })
    }, [])


    return (
        <BrowserRouter>
            <Navbar isAuth={isAuth} />
            <Routes>
                <Route path="/"
                    element={
                        isAuth
                            ? <HomeRegister />
                            : <LandingPage />
                    } />
                
                <Route path="/sing-in"
                    element={
                        <PubR isAuth={isAuth}> <SingIn /> </PubR>
                    }
                />
                <Route path="/sing-up"
                    element={
                        <PubR isAuth={isAuth}> <SingUp /> </PubR>
                    }
                />

                <Route path="/perfil"
                    element={
                        <PriR isAuth={isAuth}> <Profile/> </PriR>
                    }
                />

                <Route path="/crear/cuestionario"
                    element={
                        <PriRC> <CrearCuestionario /> </PriRC>
                    }
                />

                <Route path="/crear/mision"
                    element={
                        <PriR isAuth={isAuth} > <CrearMisiones/> </PriR>
                    }
                />

                <Route path="/crear/boss"
                    element={
                        <PriRC > <CrearBoss/> </PriRC>
                    }
                />

                <Route path="/crear/clase"
                    element={
                        <PriRC> <CrearClases /> </PriRC>
                    }
                />

                {/* ---- misiones ----- */}
                <Route path="/misiones"
                    element={
                        <PriR isAuth={isAuth}>
                            <Misiones />
                        </PriR>
                    } />
                <Route path="/mision/:idMision"
                    element={
                        <PriR isAuth={isAuth}>
                            <Mision />
                        </PriR>
                    } />

                <Route path="/nivel/:id"
                    element={
                        <PriR isAuth={isAuth}>
                            <PageNivel />
                        </PriR>
                    } />

                {/* prueba de componente */}
                <Route path="/sobre_nosotros" element={ <Features /> }/>
                <Route path="/trainingGround" 
                    element={ 
                        <PriR isAuth={isAuth}>
                            <TrainingGround />
                        </PriR>
                    }/>
                
                <Route path="*" element={ <NotFound/> } />

            </Routes>
        </BrowserRouter>
    );
};

export default AppRouters;