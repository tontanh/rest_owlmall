import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import BottomNavigation from "@material-ui/core/BottomNavigation";
import BottomNavigationAction from "@material-ui/core/BottomNavigationAction";
import Home from "@material-ui/icons/Home";
import PlaylistAddCheck from "@material-ui/icons/PlaylistAddCheck";
import FavoriteIcon from "@material-ui/icons/Favorite";
import { Link } from "react-router-dom";
import Groupfoodinfo from "./Groupfood_info";
const useStyles = makeStyles({
  root: {
    //   width: 500,
    backgroundColor: "#F8F8F8",
    borderTop: "1px solid #E7E7E7",
    textAlign: "center",
    padding: "20px",
    position: "fixed",
    left: "0",
    bottom: "0",
    height: "60px",
    width: "100%",
  },
});

export default function Groupfood() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  return (
    <div>
      <div>
        <Groupfoodinfo />
      </div>
      <BottomNavigation
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
        showLabels
        className={classes.root}
      >
        <BottomNavigationAction
          label="ໜ້າຫຼັກ"
          icon={<Home />}
          component={Link}
          to={"/groupfood"}
        />
        <BottomNavigationAction
          label="ລາຍການ"
          icon={<PlaylistAddCheck />}
          component={Link}
          to={"/paylist"}
        />
        <BottomNavigationAction
          label="ຍອດນິຍົມ"
          icon={<FavoriteIcon />}
          component={Link}
          to={"/favorites"}
        />
      </BottomNavigation>
    </div>
  );
}
