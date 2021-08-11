import axios from 'axios';
import React, { useEffect, useState } from 'react';
import GroupfoodCard from './GroupfoodCard';
// import { useParams } from 'react-router-dom';

export default function Groupfood_info(){
    const storeids = localStorage.getItem('storeid');
    // const {id} = useParams()
    const url = 'https://owlmall.la/ton/api/rest_owlmall/query/searchgroupfood.php?store_id='+ storeids
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
            ມີຂໍ້ຜິດພາດ
        </p>
    }
    if (products.loading) {
        content = <p>
        ກຳລັງໂຫລດ...
    </p>
    }
    if (products.data) {
        content = 
        products.data.map((product, key) =>
        <div key={product.groupfood_id}>
            <GroupfoodCard
                product={product}
            />
        </div>
        )
    }

    return(
        <div>
            <h3>
                 ເລືອກປະເພດ ອາຫານ
            </h3>
            {content}
        </div>
    );
}