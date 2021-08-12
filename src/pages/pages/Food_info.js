import axios from 'axios';
import React, { useEffect, useState } from 'react';
import FoodCard from './FoodCard';
import { useParams } from 'react-router-dom';

export default function Food_info(){
    // const storeids = localStorage.getItem('storeid');
    const {id} = useParams()

    const storeids = localStorage.getItem('storeid');

   
    const strurl ='&store_id=';
    const url = 'https://owlmall.la/ton/api/rest_owlmall/query/food.php?groupfood_id='+ id +strurl+storeids;
    const [products ,setProducts] = useState({
        loading : false,
        data:null,
        error: false
    })
    
    let content = null

    useEffect(()=>
    {
        setProducts({
            loading: true,
            data:null,
            error:false
        })
        axios.get(url)
        .then(response => {
            setProducts({
                loading : false,
                data: response.data,
                error:false
            })
        })
        .catch(()=>{
           setProducts({
            loading:false,
            data: null,
            error: true
           })
        })
    },[url])

    if (products.error) {
        content = <p>
            <br></br>
            ຍັງບໍ່ມີຂໍ້ມູນ
        </p>
    }
    if (products.loading) {
        content = <p>
             <br></br>
        ກຳລັງໂຫລດ...
    </p>
    }
    if (products.data) {
        content = 
        products.data.map((product, key) =>
        <div key={product.food_id}>
            <FoodCard
                product={product}
            />
        </div>
        )
    }

    return(
        <div>
            <h3>
                 ເລືອກ ອາຫານ
            </h3>
            {content}
        </div>
    );
}