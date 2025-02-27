import React, { useState, useEffect, useRef } from 'react'
import MenuIcon from '@mui/icons-material/Menu';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';

import SignalCellularAltIcon from '@mui/icons-material/SignalCellularAlt';
import AccessAlarmIcon from '@mui/icons-material/AccessAlarm';
import ErrorIcon from '@mui/icons-material/Error';
import ReportIcon from '@mui/icons-material/Report';
import { Link } from 'react-router-dom';

const Dashboard = () => {
  const [accordianDashboard, setAccordianDashboard] = useState(false);
  const ref = useRef();

  useEffect(()=>{

    // .       
            // .
            // Please Watch the youtube video for full code 
            // .
            // .
            // .
},[accordianDashboard])

  const handleOnClickMenu = (value)=>{
    sessionStorage.setItem('func',value);
  }

  return (
    <div className='w-3/4 text-black p-5 relative'>
      <div className='w-full bg-slate-900 text-white rounded-lg flex  p-3 justify-between items-center'>
        <MenuIcon sx={{ cursor: "pointer" }} onClick={() => { setAccordianDashboard(prev => !prev) }} />

        <img className='w-8 h-8 rounded-3xl border-2' src='https://static.vecteezy.com/system/resources/previews/002/265/650/large_2x/unknown-person-user-icon-for-web-vector.jpg' alt='Image' />

      </div>

      {
        accordianDashboard && <div ref={ref} className=' absolute p-3 bg-slate-900 text-white rounded-xl text-lg font-extralight'>
          <div>Hi Welcome to our Gym Management System.</div>
          <p>Feel free to ask any querries</p>
        </div>
      }

      <div className='mt-5 pt-3 bg-slate-100 bg-opacity-50 grid gap-5 grid-cols-3 w-full pb-5 overflow-x-auto h-[80%]'>

        {/* this is the card block */}
        {/* // .       
            // .
            // Please Watch the youtube video for full code 
            // .
            // .
            // . */}

        {/* this is the card block */}
        <Link to={'/specific/monthly'} onClick={()=>handleOnClickMenu("monthlyJoined")} className='w-full h-fit border-2 bg-white rounded-lg cursor-pointer'>
          <div className='h-3 rounded-t-lg bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500'></div>

          <div className='py-7 px-5 flex-col justify-center items-center w-full text-center rounded-b-lg hover:bg-slate-900 hover:text-white '>
            <SignalCellularAltIcon sx={{ color: "purple", fontSize: "50px" }} />
            <p className='text-xl my-3 font-semibold font-mono'>Monthly Joined</p>
          </div>
        </Link>

        {/* this is the card block */}
        {/* // .       
            // .
            // Please Watch the youtube video for full code 
            // .
            // .
            // . */}

        {/* this is the card block */}
        <Link to={'/specific/expire-with-in-4-7-days'} onClick={()=>handleOnClickMenu("fourToSevenDaysExpire")} className='w-full h-fit border-2 bg-white rounded-lg cursor-pointer'>
          <div className='h-3 rounded-t-lg bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500'></div>

          <div className='py-7 px-5 flex-col justify-center items-center w-full text-center rounded-b-lg hover:bg-slate-900 hover:text-white '>
            <AccessAlarmIcon sx={{ color: "red", fontSize: "50px" }} />
            <p className='text-xl my-3 font-semibold font-mono'>Expiring Within 4-7 Days</p>
          </div>
        </Link>

        {/* this is the card block */}
        <Link to={'/specific/expired'} onClick={()=>handleOnClickMenu("expired")} className='w-full h-fit border-2 bg-white rounded-lg cursor-pointer'>
          <div className='h-3 rounded-t-lg bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500'></div>

          <div className='py-7 px-5 flex-col justify-center items-center w-full text-center rounded-b-lg hover:bg-slate-900 hover:text-white '>
            <ErrorIcon sx={{ color: "red", fontSize: "50px" }} />
            <p className='text-xl my-3 font-semibold font-mono'>Expired</p>
          </div>
        </Link>

        {/* this is the card block */}
        {/* // .       
            // .
            // Please Watch the youtube video for full code 
            // .
            // .
            // . */}

      </div>


      <div className='md:bottom-4 p-4 w-3/4 mb-4 md:mb-0 absolute bg-black text-white mt-20 rounded-xl text-xl'>
        Contact
      </div>


    </div>
  )
}

export default Dashboard