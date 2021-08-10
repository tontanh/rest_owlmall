
import React, {useEffect, useState} from 'react'
import QrScan from 'react-qr-reader'
import {Link } from "react-router-dom";
import  welcome  from '../assets/icons/welcome.png';
import axios from 'axios';
// import Storeid from '../class/Storeid';
import '../styles/App.css'
// import Rest from '../pages/Rest';


function QRscanner() {
    
    const [qrscan, setQrscan] = useState('Null');
    const handleScan = data => {
        if (data) {
            setQrscan(data)
            
        } 
    }
    const handleError = err => {
    console.error(err)
    }

    const [store,setStore]=useState([])
    const [codeSt,setSt]=useState([]);
    // const [post,setPosts]=useState([]);

    var qrcut = qrscan.slice(8,20);

    useEffect(()=>{
        axios.get('https://owlmall.la/rest/api/rest_owlmall/query/search.php?store_id='+ qrcut)
        .then(res => {
            // console.log(res)
            // setSt(res.status)
            setStore(res.data);
            setSt(res.status);
            // setPosts(res.data.map(it => it.store_id));
        })
        .catch(err=>{
            console.log(err)
        })

    },)
 
    if(codeSt === 200) 
    {
        localStorage.setItem('storeid', qrcut );
        return(
           
            <div>
            <img className="logo_img" src={welcome} alt=""/>
            <h3> <span> { store.map(str => <span>{str.store_name}</span>) }</span>  ຍີນດີຕ້ອນຮັບ</h3>
            <Link to='/services' style={{ textDecoration: 'none' } }  >
            
                <button 
                variant="contained"
                 color= "white">
                    <span className='Rest_go'>ເຂົ້າສູ້ຮ້ານ <span> { store.map(str => <span>{str.store_name}</span>) }</span></span>
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
           <span className="HeaderText">ສະແກນ QR Code</span>
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

            {/* <TextareaAutosize
                style={{fontSize:18, width:320, height:100, marginTop:100}}
                rowsMax={4}
                defaultValue={qrscan}
                value={qrscan}
            /> */}

      </div>
    );
  }




  export default QRscanner;
  