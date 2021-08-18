import axios from "axios";
import React, { useEffect, useState } from "react";
import HistoryCard from "./HistoryCard";
import './history.css'
// import { useParams } from 'react-router-dom';
// const {id} = useParams()
export default function Paylist_info() {
  const storeids = localStorage.getItem("res_owlmall_version");
  const tableids = localStorage.getItem("lagotech_version");
  const url =
    "https://owlmall.la/ton/api/rest_owlmall/query/history.php?store_id="+storeids+"&table_id="+tableids+"&order_status_id=2" ;
  const [products, setProducts] = useState({
    loading: false,
    data: null,
    error: false,
  });

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
        <HistoryCard product={product} />
      </div>
    ));
  }

  return (
    <div>
      <div className="boxtop"></div>
      {content}
      {/* <spa>ສະແດງສູງສຸດ 50 ລາຍການ</spa> */}
      <div className = "boxbottom"></div>

    </div>
  );
}
