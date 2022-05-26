import React, { useState } from 'react'

import Banner from './components/Banner';
import Test from './components/Test';

import Header from './components/Header';
import Logo from './components/Logo';
import './components/Menu'
import Menu from './components/Menu';
import Navigation from './components/Navigation';
import Splash from './components/Splash';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import Grow from '@mui/material/Grow';
import Product from './components/Product';
import { Box, Button, Collapse, createTheme, Fade, makeStyles, ThemeProvider } from '@material-ui/core';
import { ButtonBase, Divider, Grid } from '@mui/material';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import { styled } from '@mui/material/styles';
import { orange } from '@mui/material/colors';
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import './icons8-shopping-cart.gif'
import MyRoutes from './MyRoutes';
const theme = createTheme({
  palette:{
    primary:{
      main:"#fefefe"
    },
    secondary:{
      main:"#fefefe"
    },
  },
  typography:{

  },
});
const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark'  ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

const useStyles = makeStyles((theme)=>({
  logoLg:{
    display:"none",
    [theme.breakpoints.up(1200)]:{
      display:"block",  
      // justifyContent:"center",

      // alignItems:"center"
      
      // width:"75vw",
      // height:"100vh",
      
      },
    },
    logoSm:{
      display:"block",
      [theme.breakpoints.up("sm")]:{
       
        display:"none",
        
      },
    },
    product:{
      display:"block",
      [theme.breakpoints.up("sm")]:{
        width:"25vw",
        height:"100vh"
      },
    }
}));

function App() {
  const [checked, setChecked] = React.useState(true);
  const [filled,setFilled] = React.useState(false);
  const [loading, setLoading] = React.useState(false)
  const classes = useStyles();


  return (
    <div className=''>
<MyRoutes/>      

      {/* <Grid container> */}
        {/* <Grid item xs={12} lg={4}>
        <div style={{
          width:"100%",
          height:"100vh",
          // backgroundColor:"red"
          
          }}
        > */}
          {/* <Box sx={{ width: '50%' }}>
            <Collapse orientation="horizontal" in={checked} collapsedSize={20}>
              <Navigation/>
            </Collapse>
          </Box>
          <Header/>
          <Fade in={true} timeout={4000}>
            <div></div>
            <Navigation/>
            
            
          </Fade>
          
        <Fab style={{position:'fixed',bottom:"16px",right:"16px"}}  onClick = {()=>setFilled(!filled)}color="secondary" aria-label="add">
          {filled? <img src='./icons8-shopping-cart.gif'/>:<ShoppingCartOutlinedIcon/>}
          
        </Fab> */}
       
        
        {/* </div> */}
        {/* </Grid> */}
        {/* <Grid item xs={0} lg={8}> */}
        {/* <div  style={{
          width:"100%",
          height:"100vh", 
          display:"flex",
          position:'fixed',
          backgroundColor:"blue"
          }}
        >
          <div className={classes.logoLg} spacing={2} style={{
            margin:"auto"
            }}
          >
            <Divider />

            Logo
            Resturant name
          </div>
        </div> */}
        
        
        {/* </Grid>
      </Grid> */}
      

      














     
      
           {/* <Header/>
           <Grow style={{ transformOrigin: '0 0 0' }}
          {...(checked ? { timeout: 2000 } : {})} in={checked}><Navigation/></Grow>  */}
      {/* <div  style={{margin:'auto'}}>
      <button>Menu</button>
      </div> */}

      {/* <Banner /> */}
      {/* <Menu/> */}
    
    </div>
      
  );
}

export default App;

