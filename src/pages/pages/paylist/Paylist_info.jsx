import axios from "axios";
import React, { useEffect, useState } from "react";
import PaylistCard from "./PaylistCard";
import './paylist.css'
// import { useParams } from 'react-router-dom';
// const {id} = useParams()
export default function Paylist_info() {
  const storeids = localStorage.getItem("res_owlmall_version");
  const tableids = localStorage.getItem("lagotech_version");
  const url =
    "https://owlmall.la/ton/api/rest_owlmall/query/paylist.php?store_id="+storeids+"&table_id="+tableids+"&order_status_id=1" ;
  const [products, setProducts] = useState({
    loading: false,
    data: null,
    error: false,
  });
  const [orderId,setOrderId] =useState();
  let content = null;

  useEffect(() => {
    setProducts({
      loading: true,
      data: null,
      error: false,
    });
    axios
      .get(url)
      .then((response) => {
        setProducts({
          loading: false,
          data: response.data,
          error: false,
        });
        setOrderId(response.data.map(id=>id.order_id));
      })
      .catch(() => {
        setProducts({
          loading: false,
          data: null,
          error: true,
        });
      });
  }, [url]);

  if (products.error) {
    content = (
      <p>
        <br></br>
        ມີບໍ່ມີລາຍການ
      </p>
    );
  }
  if (products.loading) {
    content = (
      <p>
        <br></br>
        ກຳລັງໂຫລດ...
      </p>
    );
  }
  if (products.data) {
    
    content = products.data.map((product, key) => (
      <div key={product.order_id}>
        <PaylistCard product={product} />
        
      </div>
    ));
  }

  const orderBt = () => {
  
    
  const urls = "https://owlmall.la/ton/api/rest_owlmall/query/updateorderbyuser.php?order_id=("+orderId+")&order_status_id=2" ;
    // console.log('====================ok')
    axios.post(urls).then((response) => {
      // console.log(response);
      window.location.reload(); 
      // console.log(orderId);

    });
  };

  return (
    <div>
      <div className="boxtop"></div>
      {content}
        <div className="box"></div>
          <div >
          <button className="orderBt" onClick={orderBt}>
          {" ສັ່ງອາຫານ "} 
        </button>
          </div>

      <div className = "boxbottom"></div>
     
    </div>
  );
}
