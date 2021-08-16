import React from "react";

import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import Avatar from "@material-ui/core/Avatar";
import "../styles/App.css";
import { Link } from "react-router-dom";

export default function GroupfoodCard(props) {
  let gfPic = props.product.groupfood_picture;
  const urlpic = "https://owlmall.la/ton/api/rest_owlmall/images/";
  let gfId = props.product.groupfood_id;
  const urllink = "/foodlists/";
  return (
    <div>
      <Link
        to={urllink + gfId}
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
          <ListItemText primary={props.product.groupfood_name} />
          {/* <ListItemText primary={props.product.groupfood_name} secondary={gfPic} /> */}
        </ListItem>
        {/* </CardContent>
    </Card> */}
      </Link>
    </div>
  );
}
