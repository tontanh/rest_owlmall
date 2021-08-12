

import React, {useEffect, useState} from 'react'
import QrScan from 'react-qr-reader'
import {Link } from "react-router-dom";
import axios from 'axios';
import chair from '../assets/icons/chair.png';
// import  welcome  from '../assets/icons/welcome.png';
// import Storeid from '../class/Storeid';
import '../styles/App.css'


export default function QRtablescanner() {
 
    const [qrscan, setQrscan] = useState('Null');
    const handleScan = data => {
        if (data) {
            setQrscan(data)
        } 
       
    }
    const handleError = err => {
    console.error(err)
    }
    const [codeSt,setSt]=useState([]);
    // const [post,setPosts]=useState([]);
    const [store,setStore]=useState([])

    const storeids = localStorage.getItem('storeid');

   
    const strurl ='&store_id=';
    var qrcut = qrscan.slice(6,20);
    useEffect(()=>{
       
        axios.get('https://owlmall.la/ton/api/rest_owlmall/query/table_rest.php?table_number='+qrcut+strurl+storeids)
        .then(res => {
            // console.log(res)
            // setSt(res.status)
            setSt(res.status);
            setStore(res.data);
            // setPosts(res.data.map(it => it.store_id));
        })
        .catch(err=>{
            console.log(err)
        })

    },)
 

    if(codeSt === 200)
    { 
        localStorage.setItem('tableid', qrcut );
        return(
           
            <div>
            <img className="logo_img"  src={chair} alt=""/>
            <h3>ໂຕະເບີ <span> { store.map(str => <span>{str.table_number}</span>) }</span></h3>
            <Link to='/groupfood' style={{ textDecoration: 'none' } }  >
            
                <button 
                variant="contained"
                 color= "white">
                    <span className='Rest_go'>ສັ່ງອາຫານໃນໂຕະ <span> { store.map(str => <span>{str.table_number}</span>) }</span></span>
                    </button> 
            </Link> 
            </div>
        );
    }
    else{
        console.log('Not Found QR Code');  
    }
    return (
      <div>
           <span className="HeaderText">ສະແກນ QR Code ຂອງໂຕະ</span>
            <center>
            <div style={{marginBottom:250,marginTop:10}}>
           
                <QrScan
                    delay={300}
                    onError={handleError}
                    onScan={handleScan}
                    style={{ height: 250, width: 350 ,}}
                />
            </div>
            </center>

      </div>
    );
}

  