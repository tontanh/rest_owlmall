import { Button,SvgIcon} from '@material-ui/core';
import { Link } from "react-router-dom";
import { ReactComponent as lao } from './assets/icons/laos.svg';
import { ReactComponent as eng } from './assets/icons/english.svg';
import {  toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import "./styles/App.css"

toast.configure()

function Home() {
    const notify = () => toast.info("Coming soon!" , { position: toast.POSITION.TOP_LEFT});
    // function getAlert(){
    //     alert("Coming soon!")
    // }
    return (
        <div>
    <div>
    <Link to="/qr_scanner"style={{ textDecoration: 'none' }}>
        <Button
         variant="contained"
         color= "white"
            >
           <SvgIcon component={lao} viewBox="0 0 512 512"/>
           <h2 className = "textlao">ພາສາລາວ</h2>
        </Button> 
     </Link>
    </div>
    <br></br>
        <Button
         variant="contained"  onClick={notify}
        >
           <SvgIcon component={eng} viewBox="0 0 512 512"/>
           <h2 className = "textlao">english</h2>
          
        </Button> 
        </div>
    );
  }
  export default Home;
  