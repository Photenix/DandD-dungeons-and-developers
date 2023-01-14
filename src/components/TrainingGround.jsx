import React from 'react';
import CardMain from '../modules/common/CardMain';
import { Div, H3, Input, Div1, Div2, Img, Div3, ContainerTGCard } from '../styles/trainigGround';
import { getDocs, collection, addDoc, query, where, doc,getDoc, deleteDoc, updateDoc, Firestore ,setDoc} from "firebase/firestore";
import { db } from "../firebase.config";
import ChangeTitle from '../tools/ChangeTitle';
const image = "https://res.cloudinary.com/dnezkinuo/image/upload/v1662141608/trofeo_jd9z3h.png"
const image2 = "https://res.cloudinary.com/dnezkinuo/image/upload/v1662142367/kisspng-united-states-awards-for-excellence-nomination-pri-winner-ribbon-png-transparent-images-5a765d477940c0.5511496215177065674967_o5ll4p.png"

const CardTraining = ({ image, name, description= '' }) => {
    return(
        <Div1>
            <CardMain name={'Variables'} description={ description }/>
            <Div3>
                <Img src={image} alt="" />
            </Div3>
        </Div1>
    )
}
const updateClasesUser = async ( uid, id ) =>{
    await updateDoc(doc( db, "usuarios", uid ) , {
        clases_creadas: arrayUnion( id )
      });
} 
console.log(updateClasesUser.doc) 
const TrainingGround = () => {
    return (
        <div>
            <ChangeTitle title={'Niveles'}/>
            <Div>
                <H3>Campo de entrenamiento</H3>
                <Input type="text" />
            </Div>
            <ContainerTGCard>
                <CardTraining image={ image }/>
                {/* 
                    le coloque una opcion para que se ponga al reves intercalado 
                    Puedes ver mas del proceso en el div1
                    pd: quite el div2
                */}
                <CardTraining image={ image2 }/>
                <CardTraining image={ image }/>
                <CardTraining image={ image2 }/>
                <CardTraining image={ image }/>
            </ContainerTGCard>
        </div>
    );
};

export default TrainingGround;