import React from "react";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import Avatar from "@material-ui/core/Avatar";
import "../styles/App.css";
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';

export default function HistoryCard(props) {

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
          <ListItemText primary={props.product.food_name + space + priceformat+ space + kip} secondary={props.product.order_time} className = 'lists'/>

        </ListItem>
        
        </CardContent>
    </Card>
    
    </div>
  );
}
