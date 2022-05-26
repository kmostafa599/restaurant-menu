import { height } from '@mui/system'
import React from 'react'
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { Link } from 'react-router-dom';


const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));
export default function Product() {

  return (

    <div style={{ display: "flex", flexDirection: "column", width: "100%", height: "100%", }}>
      {/* <div style={{}}>
            <button className='btn btn-white shadow' style={{width:"40px",height:"40px",backgroundColor:"white", position:"absolute",zIndex:"1",margin:"20px"}}>
            <img
                    style={{width:'20px',height:'20px',position:'absolute',top:'50%',left:'50%',transform:'translate(-50%,-50%)'}}
                    src="https://img.icons4.com/ios/50/000000/back--v1.png"/>
            </button>
            
            <img  style={{  backgroundRepeat: "no-repeat",
                backgroundPosition:"center",
                backgroundAttachment:"fixed",
                width:"100%",
                height:"100%",
                zIndex:"9"}}
                src="https://media.istockphoto.com/photos/full-table-of-italian-meals-on-plates-pizza-pasta-ravioli-carpaccio-picture-id1227415751?k=20&m=1227415751&s=170667a&w=0&h=jSWQmXeJbgjpMPbC141v52dN0TATyhHGG20qrgvW1OE=" />
        
        </div> */}
      {/* <div style={{display:"flex", flexDirection:"column",justifyContent:"center",alignItems:"center"}}>
           <h1 >Description</h1>
           <h6 style={{color:"rgba(0,0,0,0.5)"}}>5 min</h6>
           <h5> Iceberg lettuce, pesto crouton ,grapes and parmesan shavings

VAT EXCLUDED</h5>
           
       </div> */}
      {/* <Grid container spacing={2}>
  <Grid item xs={4}>
    <Item>xs=4</Item>
  </Grid>
  <Grid item xs={4}>
    <Item>Description</Item>
  </Grid>
  <Grid item xs={4}>
    <Item>xs=4</Item>
  </Grid>
  <Grid item xs={4}>
    <Item>xs=4</Item>
  </Grid>
  <Grid item xs={4}>
    <Item>xs=4</Item>
  </Grid>
  <Grid item xs={4}>
    <Item>xs=4</Item>
  </Grid>
</Grid> */}
      {/* <div  >
<div ><h1 style={{display:"flex", justifyContent:"center", alignItems:"center"}}>Pizza</h1></div>
<div><h6 style={{display:"flex", justifyContent:"center", alignItems:"center"}}>5 min</h6></div>
<div  style={{display:"flex", justifyContent:"center", alignItems:"center"}}>(Icon)</div>
<div  style={{display:"flex", justifyContent:"center", alignItems:"center"}}>paragraph</div>
        <div style={{display:"flex", justifyContent:"center", alignItems:"center"}}>paragraph</div>

</div> */}
      <div className='w-full h-full'>
        <div className=''>
        <Link to='/store'>
          <button  className='w-[40px] h-[40px] z-10 absolute top-5 m-5 bg-white p-3 shadow rounded '>
            <svg className='rotate-180' width="16" height="16" viewBox="0 0 24 26" fill="currentColor"  ><path d="M6.92 1c.255 0 .509.138.636.275l10.158 11.157c.381.413.381.964 0 1.377L7.683 24.69c-.381.413-.89.413-1.27 0-.381-.413-.381-.964 0-1.377l9.396-10.192L6.287 2.652c-.381-.413-.381-.964 0-1.378A.932.932 0 016.92 1z" fill="null" stroke="null" stroke-width="0.25"></path>
            </svg>
          </button>
        </Link>
          <img className=' w-full' src="https://img.freepik.com/free-photo/top-view-pepperoni-pizza-with-mushroom-sausages-bell-pepper-olive-corn-black-wooden_141793-2158.jpg?w=2000" alt="product_image" /> </div>
      </div>
      <div className='flex flex-col justify-center items-center m-5'>
        <div>product name</div>
        <div>time to deliver</div>
        <div>icon</div>
        <div>description</div>
        <div className='w-full m-3 divide-y divide-slate-400  space-y-5'>
          <div className='grid grid-cols-2 '>
            <div>Chiken</div>
            <div className='justify-self-end text-[#E6034B]'>
              AED59.00</div>
          </div>
          <div className='grid grid-cols-2 '>
            <div>Chiken</div>
            <div className='justify-self-end text-[#E6034B]'>
              AED59.00</div>
          </div>
          <div className='grid grid-cols-2 '>
            <div>Chiken</div>
            <div className='justify-self-end text-[#E6034B]'>
              AED59.00</div>
          </div>
        </div>
        <div>Add</div>
        <div>required</div>
        <div className='w-full m-3 divide-y divide-slate-400  space-y-5'>
          <div className='grid grid-cols-2 '>
            <div>Chiken</div>
            <div className='justify-self-end text-[#E6034B]'>
              AED59.00</div>
          </div>
          <div className='grid grid-cols-2 '>
            <div>Chiken</div>
            <div className='justify-self-end text-[#E6034B]'>
              AED59.00</div>
          </div>

        </div>


      </div>

    </div>
  )
}
