import React from 'react';
import Box from '@mui/material/Box';
import Switch from '@mui/material/Switch';
import Paper from '@mui/material/Paper';
import Grow from '@mui/material/Grow';
import FormControlLabel from '@mui/material/FormControlLabel';
import { useTheme } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import ItemCard from './ItemCard';
import initialState from '../config/api';
import { Fade, Zoom } from '@mui/material';
import Skeleton from '@mui/material/Skeleton';
import { Accordion } from 'react-bootstrap';


const icon = (
    <div  className="accordion-body border-danger ">
    <strong>This is the first item's accordion body.</strong> It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
  <br/>
  </div>
  );
export default function Menu() {
    const [checked, setChecked] = React.useState(false);
    const theme = useTheme();
    const [loading,setLoading] = React.useState(false)

    const handleChange = () => {
      setChecked((prev) => !prev);
    };
    

  return (
    <div style={{}}>
       

      <div className='m-3 '>

      {/* <div className={{}}>
      <Accordion defaultActiveKey="0">
    <Accordion.Item eventKey="0">
      <Accordion.Header>Item #1</Accordion.Header>
      <Accordion.Body>
      <ul>
            <div>
            {loading? (<Box sx={{ width: '300px' }}>
      <div className="m-2"sx={{ width: '100px',position:'absolute',left:'50%',transform:'translate(-50%,-50%)' }}>
      <Skeleton  />
      <Skeleton animation="wave" />
      <Skeleton animation={false} />
      </div>
      {setTimeout(setLoading(false),2000)
      
      }
    </Box>) :  
           <Grow  style={{ transformOrigin: '0 0 0' }}
          {...(checked ? { timeout: 2000 } : {})} in={checked}><ItemCard itemImage=".." itemName='Pizza' itemPrice=''/></Grow>

 }
            



            </div>
            <br/>
            <div>


            {loading? (<Box sx={{ width: 300 }}>
      <Skeleton />
      <Skeleton animation="wave" />
      <Skeleton animation={false} />
    </Box>) :  
           <Grow style={{ transformOrigin: '0 0 0' }}
          {...(checked ? { timeout: 2000 } : {})} in={checked}><ItemCard itemImage=".." itemName='Pizza' itemPrice=''/></Grow>

 }            </div>
            <br/>
            <div>
            {loading? (<Box sx={{ width: 300 }}>
      <Skeleton />
      <Skeleton animation="wave" />
      <Skeleton animation={false} />
    </Box>) :     
    <Grow style={{ transformOrigin: '0 0 0' }}
          {...(checked ? { timeout: 2000 } : {})} in={checked}><ItemCard itemImage=".." itemName='Pizza' itemPrice=''/></Grow>
    
 }            </div>
            <br/>
            <div>
            {loading? (<Box sx={{ width: 300 }}>
      <Skeleton />
      <Skeleton animation="wave" />
      <Skeleton animation={false} />
    </Box>) :
    <Grow style={{ transformOrigin: '0 0 0' }}
          {...(checked ? { timeout: 2000 } : {})} in={checked}><ItemCard itemImage=".." itemName='Pizza' itemPrice=''/></Grow>
  }            </div>
            <br/>
            <div>
            {loading? (<Box sx={{ width: 300 }}>
      <Skeleton />
      <Skeleton animation="wave" />
      <Skeleton animation={false} />
    </Box>) : 
    <Grow style={{ transformOrigin: '0 0 0' }}
          {...(checked ? { timeout: 2000 } : {})} in={checked}><ItemCard itemImage=".." itemName='Pizza' itemPrice=''/></Grow>
  }            </div>
            <br/>
          </ul>
      </Accordion.Body>
    </Accordion.Item>
    <Accordion.Item eventKey="1">
      <Accordion.Header>Accordion Item #2</Accordion.Header>
      <Accordion.Body>
      


      </Accordion.Body>
    </Accordion.Item>
  </Accordion>
       


</div> */}
</div>
<div className="accordion" id="accordionExample-2">

<div className="accordion-item border-danger" style={{margin:"10px"}}>
  <h2 className="accordion-header rounded shadow" id="headingTwo" >
    <button className="accordion-button collapsed"
     type="button"
      data-bs-toggle="collapse"
       data-bs-target="#collapseTwo"
        aria-expanded="false"
         aria-controls="collapseTwo"
         onClick={handleChange}
         >
       Item #1
    </button>
  </h2>
  <div id="collapseTwo" className="accordion-collapse  "  aria-labelledby="headingTwo" data-bs-parent="#accordionExample-2">
    <div  className="accordion-body border-danger ">
        <ul>
          <li>
          <ItemCard/>
          </li>

          <li>
          <ItemCard/>
          </li>
          <li>
          <ItemCard/>
          </li>
          <li>
          <ItemCard/>
          </li>
          <li>
          <ItemCard/>
          </li>
        </ul>


      </div>
  </div>

</div>



</div>
 {/* <p>
  <a className="btn btn-primary" data-bs-toggle="collapse" href="#collapseExample" role="button" aria-expanded="false" aria-controls="collapseExample">
    Link with href
  </a>
  <button className="btn btn-primary" type="button" data-bs-toggle="collapse" data-bs-target="#collapseExample" aria-expanded="false" aria-controls="collapseExample">
    Button with data-bs-target
  </button>
</p>
<div className="collapse" id="collapseExample">
  <div className="card card-body">
    Some placeholder content for the collapse component. This panel is hidden by default but revealed when the user activates the relevant trigger.
  </div>
</div> */}
{/* <p>
  <a className="btn btn-primary" data-bs-toggle="collapse" href="#multiCollapseExample1" role="button" aria-expanded="false" aria-controls="multiCollapseExample1">Toggle first element</a>
  <button className="btn btn-primary" type="button" data-bs-toggle="collapse" data-bs-target="#multiCollapseExample2" aria-expanded="false" aria-controls="multiCollapseExample2">Toggle second element</button>
  <button className="btn btn-primary" type="button" data-bs-toggle="collapse" data-bs-target=".multi-collapse" aria-expanded="false" aria-controls="multiCollapseExample1 multiCollapseExample2">Toggle both elements</button>
</p>
<div className="row">
  <div className="col">
    <div className="collapse multi-collapse" id="multiCollapseExample1">
      <div className="card card-body">
        Some placeholder content for the first collapse component of this multi-collapse example. This panel is hidden by default but revealed when the user activates the relevant trigger.
      </div>
    </div>
  </div>
  <div className="col">
    <div className="collapse multi-collapse" id="multiCollapseExample2">
      <div className="card card-body border-danger rounded">
        Some placeholder content for the second collapse component of this multi-collapse example. This panel is hidden by default but revealed when the user activates the relevant trigger.
      <hr/>
      <div>
        hello
      </div>
      </div>
    </div>
  </div>
</div> */}

    </div>
  );
}



