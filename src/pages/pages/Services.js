import React from "react";
import { Button, SvgIcon } from "@material-ui/core";
import { ReactComponent as booking } from "./assets/icons/booking.svg";
import { ReactComponent as eating } from "./assets/icons/eating.svg";
import { ReactComponent as food_delivery } from "./assets/icons/food_delivery.svg";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import "./styles/App.css";

export default function Services() {
  const notify = () =>
    toast.info("Coming soon!", { position: toast.POSITION.TOP_LEFT });

  return (
    <div>
      <div>
        <Link to="/qr_table_scanner" style={{ textDecoration: "none" }}>
          <Button variant="contained" color="white">
            <SvgIcon component={eating} viewBox="0 0 70 70" />
            <h2 className="textlao">ກິນໃນຮ້ານ</h2>
          </Button>
        </Link>
      </div>
      <br></br>

      <div>
        <Button variant="contained" onClick={notify}>
          <SvgIcon component={food_delivery} viewBox="0 0 512 512" />
          <h2 className="textlao">ຮັບກັບບ້ານ</h2>
        </Button>
      </div>

      <br></br>
      <div>
        <Button variant="contained" onClick={notify}>
          <SvgIcon component={booking} viewBox="0 0 300 300" />
          <h2 className="textlao">ຈ່ອງໂຕ</h2>
        </Button>
      </div>
    </div>
  );
}
