import React from 'react';
import { useParams } from 'react-router-dom';

export default function Foodlists(){
    const { id } = useParams()
    console.log('====='+id)
    return(
        <div>
          foodlist {id}
        </div>
    );
}