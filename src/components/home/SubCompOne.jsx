import React from 'react';
import CardMain from '../../modules/common/CardMain';



const SubCompOne = ({array}) => {
    return (
           
                    <CardMain name={array.named} uid={array.uid}  description={array.description}/>
        

            
    );
};

export default SubCompOne;