import React from "react";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import Avatar from "@material-ui/core/Avatar";
import "../styles/App.css";

import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import axios from "axios";



export default function PaylistCard(props) {
 let orderId = props.product.order_id;
  const ordersput = () => {
        const urls = "https://owlmall.la/ton/api/rest_owlmall/query/deletepaylist.php?order_id=" +orderId;
    
        axios.post(urls).then((response) => {
          // console.log(response);
          window.location.reload(); 
        });
      };

      const kip = "ກິບ";
      const space = " ";
  
    let gfPic = props.product.food_picture;
    const urlpic = "https://owlmall.la/ton/api/rest_owlmall/images/";
    let price = props.product.food_price;
    var nf = new Intl.NumberFormat();
    const priceformat = nf.format(price);
 

  return (
    <div>
    
        <Card variant="outlined" CardContent className = 'payCard'>
      <CardContent >
        <ListItem className = 'list'>
          <ListItemAvatar className = 'list'>
            <Avatar src={urlpic + gfPic} alt="" className = 'list'>
 
            </Avatar>
          </ListItemAvatar>
          <ListItemText primary={props.product.food_name+space+priceformat+ space + kip} secondary={props.product.order_detail} className = 'lists'/>

          <div className = 'delete'>
          <button className="deletebt" onClick={ordersput}>
          {" X "} 
        </button>
          </div>

        </ListItem>
        
        </CardContent>
    </Card>
    
    </div>
  );
}
