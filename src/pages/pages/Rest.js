import React from "react";

// import storeid from '../scaner/QRscanner';
// import '../styles/App.css'

function Rest() {
  //    console.log('======'+strid)

  const storeids = localStorage.getItem("res_owlmall_version");
  return (
    <div className="Rest">
      <h1>hiiiii{storeids}</h1>
    </div>
  );
}
export default Rest;
