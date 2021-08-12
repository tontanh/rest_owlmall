import React ,{useState,useEffect}from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import '../styles/App.css';
import { ReactComponent as basket } from '../assets/icons/basket.svg';
import { Button,SvgIcon} from '@material-ui/core';
import { Link } from "react-router-dom";
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import Home from '@material-ui/icons/Home';
import PlaylistAddCheck from '@material-ui/icons/PlaylistAddCheck';
import FavoriteIcon from '@material-ui/icons/Favorite';
import { useHistory } from "react-router-dom";
import { useParams } from 'react-router-dom';
import axios from 'axios';

const useStyles = makeStyles((theme) => ({
    root: {
      '& > *': {
        margin: theme.spacing(1),
        width: '20ch',
      },
    },
  }));

  const useStylesb = makeStyles({
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

export default function Foodview_info() {
 
    const {fid} = useParams()
    const classes = useStyles();
    const classesb = useStylesb();
    const [value, setValue] = React.useState(0);
    const [count, setCount] = useState(1);
   
    const decrementCount = () => {
      if (count > 1) setCount(count - 1);
    };
  
    const incrementCount = () => {
      setCount(count + 1);
    };

    const history = useHistory()

    const goBack = () => {
      history.goBack()
    }
    const [store,setStore]=useState([])
    const [pic,setPic]=useState([])
    const [pri,setPri]=useState([])
    const storeids = localStorage.getItem('storeid');
    const urlpick = '&store_id=';
    const url = 'https://owlmall.la/ton/api/rest_owlmall/query/foodsingle.php?food_id='+fid+urlpick+storeids;
    // console.log('======'+fid)
    useEffect(()=>{
        // axios.get('https://owlmall.la/ton/api/rest_owlmall/query/food.php?food_id='+ fid + urlpick + storeids )
      
         axios.get(url)
        .then(res => {
            // console.log(res)
            // setSt(res.status)
            setStore(res.data);
            setPic(res.data.map(it => it.food_picture));
            setPri(res.data.map(it => it.food_price));
        })
        .catch(err=>{
            console.log(err)
        })

    },[url])
    const price = pri
    var nf = new Intl.NumberFormat();
   const priceformat = nf.format(price);
    return (
       <div>
        <h3><span> { store.map(str => <span>{str.food_name}</span>) }</span> {priceformat} ກິບ </h3>
        <span className = "detail">   <span> { store.map(str => <span>{str.food_detail}</span>) }</span> </span> 
        <br></br>
        <img className="logo_img" src={'https://owlmall.la/ton/api/rest_owlmall/images/'+pic} alt=""/>
        <br></br>
        <div>
        <br></br>
      <button  className='mountm' onClick={decrementCount}>{' < '}</button>
      <input className='mount'
          type="number"
          name="clicks"
          value={count}
          onChange={(event) => {
            setCount(event.target.value);
          }}
        />
      <button className='mountp' onClick={incrementCount}>{' > '}</button>
      <form className={classes.root} noValidate autoComplete="off">
        <TextField id="standard-basic" label="ລາຍລະອຽດ" />
        </form>
       </div>
       <div>
       <br></br>
    
        <Button onClick={goBack}
         variant="contained"
            >
           <h3  className="adds" >ເພີ່ມລົງລາຍການ</h3>
           <SvgIcon component={basket} viewBox="0 0 512 512"/>
        </Button> 
  
    </div>
    <div>
    <BottomNavigation
        value={value}
        onChange={(event, newValue) => {
          setValue(2);
        }}
        showLabels
        className={classesb.root}
        >
        <BottomNavigationAction label="ໜ້າຫຼັກ" icon={<Home />} component={Link} to={'/groupfood'}/>
        <BottomNavigationAction label="ລາຍການ" icon={<PlaylistAddCheck />} component={Link} to={'/paylist'}/>
        <BottomNavigationAction label="ຍອດນິຍົມ" icon={<FavoriteIcon />} component={Link} to={'/favorites'}/>
       </BottomNavigation>
    </div>
       </div>
    );
    
}