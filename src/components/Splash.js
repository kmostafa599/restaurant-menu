import React from 'react'
import { Fragment } from 'react'

import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { Button, makeStyles } from '@material-ui/core';
import FacebookRoundedIcon from '@mui/icons-material/FacebookRounded';
import NotesIcon from '@mui/icons-material/Notes';
import facebook from '../icons/facebook.svg'
import MessageOutlinedIcon from '@mui/icons-material/MessageOutlined';
import { Link } from 'react-router-dom';
import { Fade } from '@mui/material';
import { Menu, Transition } from '@headlessui/react'

export default function Splash() {
  const [age, setAge] = React.useState('');
  const [openTab, setOpenTab] = React.useState(1);

  const handleChange = (event) => {
    setAge(event.target.value);
  };
  // const style = makeStyles({
  //   root:{

  //   }
  // })
  function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
  }

  return (
    <Fade in={true} timeout={3000} >
      <div
        // style={{ display: "flex", flexDirection: "column", height: "100vh", position: "relative", justifyContent: "center", alignItems: "center" }}
        className='	flex flex-col justify-center align-center h-full space-y-8 md:border-r-2'
      >
        {/* <button className='btn btn-white shadow '
          style={{marginRight:"20px",marginTop:"20px",position:'absolute',right:'0%',width:'40px',height:'40px'}}>
          <NotesIcon style={{width:'20px',height:'20px',position:'absolute',top:'50%',left:'50%',transform:'translate(-50%,-50%)',}}/>
        </button>      
        <div  style={{display:"flex",width:"100%",height:"200px",margin:"auto"}}>
      <FormControl style={{ display:'flex',width:"500px",height:"100%",margin:"auto"}}>
      <InputLabel id="demo-simple-select-label">Age</InputLabel>
        <Select style={{width:"100%",height:"38px",margin:"50px 50px 50px"}}
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={age}
          label="Age"
          onChange={handleChange}
          style={{borderRadius:"35px"}}
        >
          <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
        </Select>
        <div style={{display:"flex",}}>
        <Button variant='contained' color="secondary"
         style={{
          //  marginLeft:"100px",
          //  marginRight:"100px",
          //  marginTop:"40px",  
          margin:"12px 50px 0px",
          padding:"8px",
           width:"100%",
           height:"50px",
           borderRadius:"35px"
           }}></Button>

        </div>
        <div style={{display:"flex",width:"50vw",}}>
          <FacebookRoundedIcon style={{
           margin:"auto",}}
           />
           <FacebookRoundedIcon style={{
              
           margin:"auto",}}/>

</div>
        </FormControl>
        


      </div>
       */}

        <div className='flex justify-center match-content w-auto h-auto'> <div className='w-[100px] h-[100px]'><img src="https://i.etsystatic.com/20646407/r/il/4d331f/1985567355/il_fullxfull.1985567355_85xe.jpg" alt="logo" /></div> </div>
        <div className='flex justify-center text-[#CCCCCC] text-3xl font-bold'>Restaurant name</div>

  
     

        <div className='flex justify-center align-center'>

          <Menu as="div" className=" relative w-full">
            <div className='flex justify-center '>
              <Menu.Button className="w-50 h-[55px] bg-white flex text-sm rounded-full  justify-center items-center relative shadow">
                <span className='left-2 absolute text-2xl p-3'>English</span>
                <div className='right-3 absolute '><svg className='fill-gray-300 w-[50px] h-[36px] hover:fill-gray-500' height="20" width="20" viewBox="0 0 20 20" aria-hidden="true" focusable="false" class="css-19bqh2r"><path d="M4.516 7.548c0.436-0.446 1.043-0.481 1.576 0l3.908 3.747 3.908-3.747c0.533-0.481 1.141-0.446 1.574 0 0.436 0.445 0.408 1.197 0 1.615-0.406 0.418-4.695 4.502-4.695 4.502-0.217 0.223-0.502 0.335-0.787 0.335s-0.57-0.112-0.789-0.335c0 0-4.287-4.084-4.695-4.502s-0.436-1.17 0-1.615z"></path></svg></div>

                <Transition
                  as={Fragment}
                  enter="transition ease-out duration-100"
                  enterFrom="transform opacity-0 scale-95"
                  enterTo="transform opacity-100 scale-100"
                  leave="transition ease-in duration-75"
                  leaveFrom="transform opacity-100 scale-100"
                  leaveTo="transform opacity-0 scale-95"
                >
                  <div className='relative w-full'>
                    <Menu.Items className="origin-top absolute  mt-[2rem] w-full  rounded-xl  shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
                      <Menu.Item className='border-b-2 text-4xl p-3 hover:text-[#E6034B]'>

                        <div className=''>
                          English
                        </div>
                      </Menu.Item>
                      <Menu.Item className='border-b-1 text-4xl p-3 hover:text-[#E6034B]'>
                        <div className=''>
                          العربية               </div>
                      </Menu.Item>

                    </Menu.Items>
                  </div>

                </Transition>
              </Menu.Button>
            </div>

          </Menu>
        </div>

        <div className='flex justify-center  '>
          <Link to='/store' className=' w-[305px] h-full'>
            <button className='text-white w-full h-full text-3xl bg-[#E6034B] p-3 rounded-full hover:bg-[#be123c] '>Tab to start</button>

          </Link>
        </div>
        <div className='flex justify-center'><button className='text-[#f43f5e] p-3 hover:bg-[#fecaca]'><MessageOutlinedIcon color='inherit' />Give Feedback</button></div>

        <div className='flex justify-center space-x-2.5'>
          <button className='text-white w-[40px] h-[40px] p-3 rounded-full bg-[#E6034B] hover:bg-[#be123c]'>
            <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 448 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"></path></svg>        </button>
          <button className='text-white w-[40px]   h-[40px]  p-3 rounded-full bg-[#E6034B] hover:bg-[#be123c]'>
            <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" height="16px" width="16px" xmlns="http://www.w3.org/2000/svg"><path d="M504 256C504 119 393 8 256 8S8 119 8 256c0 123.78 90.69 226.38 209.25 245V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.28c-30.8 0-40.41 19.12-40.41 38.73V256h68.78l-11 71.69h-57.78V501C413.31 482.38 504 379.78 504 256z"></path></svg>

            {/* <FacebookRoundedIcon color='inherit' className=' rounded-full ' /> */}
          </button>
        </div>

        {/* <div 
      // style={{ margin: "12px", position: "relative" }}
      className=''
      >     
        <img style={{ width: '75px', height: '75px', position: "absolute", left: '50%', top: '50%', transform: 'translate(-50%,-50%)' }} src="https://i.etsystatic.com/20646407/r/il/4d331f/1985567355/il_fullxfull.1985567355_85xe.jpg" />
      </div>

      <h1>Hello</h1>

      <Select variant='outlined' elevation={5} style={{ width: "75%", margin: "12px", borderRadius: "35px" }} value='English'>
       <option>
         العربية
       </option>
       <option>
          English
       </option>
      </Select>
      <Button variant='contained' style={{ width: "50%", height: "50px", margin: "12px", borderRadius: "35px", backgroundColor: "rgb(230 3 75)", color: "white" }}>Tab to start</Button>
      <div style={{ display: "flex", justifyContent: "center", alignItems: "center", margin: "12px" }}>
        <Button style={{ width: "40px", height: "40px", borderRadius: "50%", backgroundColor: "rgb(230 3 75)" }}>
          <FacebookRoundedIcon />
        </Button>
        <FacebookRoundedIcon />
      </div> */}
              <div className="w-full">

      <ul
            className="flex mb-0 list-none flex-wrap pt-3 pb-4 flex-row"
            role="tablist"
          >
            <li className="-mb-px mr-2 last:mr-0 flex-auto text-center">
              <a
                className={
                  "text-xs font-bold uppercase px-5 py-3 shadow-lg rounded block leading-normal " +
                  (openTab === 1
                    ? "text-white bg-"  + "-600"
                    : "text-"  + "-600 bg-white")
                }
                onClick={e => {
                  e.preventDefault();
                  setOpenTab(1);
                }}
                data-toggle="tab"
                href="#link1"
                role="tablist"
              >
                Profile
              </a>
            </li>
            <li className="-mb-px mr-2 last:mr-0 flex-auto text-center">
              <a
                className={
                  "text-xs font-bold uppercase px-5 py-3 shadow-lg rounded block leading-normal " +
                  (openTab === 2
                    ? "text-white bg-"  + "-600"
                    : "text-"  + "-600 bg-white")
                }
                onClick={e => {
                  e.preventDefault();
                  setOpenTab(2);
                }}
                data-toggle="tab"
                href="#link2"
                role="tablist"
              >
                 Settings
              </a>
            </li>
            <li className="-mb-px mr-2 last:mr-0 flex-auto text-center">
              <a
                className={
                  "text-xs font-bold uppercase px-5 py-3 shadow-lg rounded block leading-normal " +
                  (openTab === 3
                    ? "text-white bg-"  + "-600"
                    : "text-"  + "-600 bg-white")
                }
                onClick={e => {
                  e.preventDefault();
                  setOpenTab(3);
                }}
                data-toggle="tab"
                href="#link3"
                role="tablist"
              >
                 Options
              </a>
            </li>
          </ul>
<div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded">
            <div className="px-4 py-5 flex-auto">
              <div className="tab-content tab-space">
                <div className={openTab === 1 ? "block" : "hidden"} id="link1">
                  <p>
                    Collaboratively administrate empowered markets via
                    plug-and-play networks. Dynamically procrastinate B2C users
                    after installed base benefits.
                    <br />
                    <br /> Dramatically visualize customer directed convergence
                    without revolutionary ROI.
                  </p>
                </div>
                <div className={openTab === 2 ? "block" : "hidden"} id="link2">
                  <p>
                    Completely synergize resource taxing relationships via
                    premier niche markets. Professionally cultivate one-to-one
                    customer service with robust ideas.
                    <br />
                    <br />
                    Dynamically innovate resource-leveling customer service for
                    state of the art customer service.
                  </p>
                </div>
                <div className={openTab === 3 ? "block" : "hidden"} id="link3">
                  <p>
                    Efficiently unleash cross-media information without
                    cross-media value. Quickly maximize timely deliverables for
                    real-time schemas.
                    <br />
                    <br /> Dramatically maintain clicks-and-mortar solutions
                    without functional solutions.
                  </p>
                </div>
              </div>
            </div>
          </div>
      </div>
      </div>

    </Fade>

  )
}
