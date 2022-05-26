import { useState, React } from 'react'
import { ArrowBackIosNew } from '@mui/icons-material';
import NotesIcon from '@mui/icons-material/Notes';
import SegmentIcon from '@mui/icons-material/Segment';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import { Link, useLocation } from 'react-router-dom';



export default function Header({ setIsOpen }) {
  const [drawerState, setDrawerState] = useState(false);
  const location = useLocation()
  // const toggleDrawer = (open)=>{
  //   setDrawerState(open)
  // }
  // const component = (button) =>(
  //   <Box
  //   sx={{width:'auto'}}
  //   role='presentation'
  //   onClick={setDrawerState(false)}
  //   onKeyDown={setDrawerState(false)}
  //   >
  //     <List>
  //       {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
  //         <ListItem button key={text}>
  //           <ListItemIcon>
  //             {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
  //           </ListItemIcon>
  //           <ListItemText primary={text} />
  //         </ListItem>
  //       ))}
  //     </List>
  //     <Divider />
  //     <List>
  //       {['All mail', 'Trash', 'Spam'].map((text, index) => (
  //         <ListItem button key={text}>
  //           <ListItemIcon>
  //             {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
  //           </ListItemIcon>
  //           <ListItemText primary={text} />
  //         </ListItem>
  //       ))}
  //     </List>
  //   </Box>
  // )
  console.log(location)
  return (
    <div className={`flex  ${location.pathname === '/store' ? 'justify-between' : 'justify-end'} p-3 md:border-r-2`}>
      {/* <div  style={{display:'flex',
        position:'relative',
        // justifyContent:'center'
        }}>
            <button className='btn btn-white shadow  ' style={{position:'absolute',left:'0%',width:"40px",height:"40px",justifyItems:"center"}}>
               <ArrowBackIosNew style={{width:'20px',height:'20px',position:'absolute',top:'50%',left:'50%',transform:'translate(-50%,-50%)'}}
/>
            </button>
            
                <div style={{width:'25px',height:'40px',position:"absolute",left:'50%',justifyItems:'center'}}>
                <img  style={{width:'75px',height:'75px',position:"absolute",left:'50%',top:'50%',transform:'translate(-50%,-50%)'}} src="https://i.etsystatic.com/20646407/r/il/4d331f/1985567355/il_fullxfull.1985567355_85xe.jpg"/>

                </div>
                <Drawer
      anchor='bottom'
      open={drawerState}
      onClose={setDrawerState(false)}
    >
     Helllooooo
    </Drawer>
            <button onClick={()=>{setDrawerState(true)}} className='btn btn-white shadow '
             style={{position:'absolute',right:'0%',width:'40px',height:'40px'}}>
                  <NotesIcon style={{width:'20px',height:'20px',position:'absolute',top:'50%',left:'50%',transform:'translate(-50%,-50%)',}}/>
             </button>
        </div>   */}



      {location.pathname === '/store' ?
        <div>
          <Link to='/' >
            <button className='rounded pointer p-4 shadow'>
              <svg className='rotate-180 fill-gray-900' width="16" height="16" viewBox="0 0 24 26" fill="currentColor"  ><path d="M6.92 1c.255 0 .509.138.636.275l10.158 11.157c.381.413.381.964 0 1.377L7.683 24.69c-.381.413-.89.413-1.27 0-.381-.413-.381-.964 0-1.377l9.396-10.192L6.287 2.652c-.381-.413-.381-.964 0-1.378A.932.932 0 016.92 1z" fill="null" stroke="null" stroke-width="0.25"></path>
              </svg>
            </button>
          </Link>


        </div> : null}
      {location.pathname === '/store' ?

        <div className='flex items-center justify-center '>

          <div className='w-[63px] h-[63px] '>
            <img src="https://i.etsystatic.com/20646407/r/il/4d331f/1985567355/il_fullxfull.1985567355_85xe.jpg" alt="logo" />

          </div>
        </div> : null}
      <button className=' flex justify-center items-center rounded pointer p-4 font-bold text-lg shadow ' onClick={() => setIsOpen(true)}
      >
        <svg width="16" height="16" viewBox="0 0 24 24" fill="#575962"><path fill-rule="evenodd" clip-rule="evenodd" d="M0 5.59C0 4.989.488 4.5 1.09 4.5h21.82a1.09 1.09 0 110 2.182H1.09A1.09 1.09 0 010 5.59zM0 12.136c0-.602.488-1.09 1.09-1.09h21.82a1.09 1.09 0 110 2.181H1.09A1.09 1.09 0 010 12.137zM10.91 18.682c0-.603.488-1.091 1.09-1.091h10.91a1.09 1.09 0 110 2.182H12a1.09 1.09 0 01-1.09-1.091z" fill="null"></path>
        </svg>
      </button>

    </div>
  )
}
