import React from "react";

import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import Avatar from "@material-ui/core/Avatar";
import "../styles/App.css";
import { Link } from "react-router-dom";

export default function FoodCard(props) {
  let gfPic = props.product.food_picture;
  const kip = "ກິບ";
  const space = " ";
  let price = props.product.food_price;
  var nf = new Intl.NumberFormat();
  const priceformat = nf.format(price);
  let fId = props.product.food_id;
  const urlpic = "https://owlmall.la/food/api/rest_owlmall/images/";
  // const urllink = '/foodlists/'
  return (
    <div>
      {/* <Link to={urllink+gfId} style={{ textDecoration: 'none' } } className='fgtext'>  */}
      <Link
        to={"/foodview/" + fId}
        style={{ textDecoration: "none" }}
        className="fgtext"
      >
        {/* <Card variant="outlined">
      <CardContent> */}
        <ListItem>
          <ListItemAvatar>
            <Avatar src={urlpic + gfPic} alt="">
              {/* <img className="gf_pic"  src={urlpic+gfPic} alt=""/> */}
            </Avatar>
          </ListItemAvatar>
          {/* <ListItemText primary={props.product.food_name}  /> */}
          <ListItemText
            primary={
              props.product.food_name + space + priceformat + space + kip
            }
            secondary={props.product.food_detail}
          />
        </ListItem>
        {/* </CardContent>
    </Card> */}
      </Link>
    </div>
  );
}
