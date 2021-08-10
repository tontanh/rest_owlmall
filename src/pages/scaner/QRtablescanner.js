

import React, {useEffect, useState} from 'react'
import QrScan from 'react-qr-reader'
// import {Link } from "react-router-dom";
import axios from 'axios';
// import Storeid from '../class/Storeid';
import '../styles/App.css'
import Groupfood from '../pages/Groupfood';

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
   

    var qrcut = qrscan.slice(6,20);
    useEffect(()=>{
       
        axios.get('https://owlmall.la/ton/api/rest_owlmall/query/search.php?store_id='+ qrcut)
        .then(res => {
            // console.log(res)
            // setSt(res.status)
            setSt(res.status);
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
           
            <Groupfood/>
           
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

  