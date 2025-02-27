import React, { useState,useEffect } from 'react'
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { useNavigate,useParams } from 'react-router-dom';
import Switch from 'react-switch';
import axios from 'axios';
import { ToastContainer,toast } from 'react-toastify';
const MemberDetail = () => {
    const [status, setStatus] = useState("Pending");
    const [renew, setRenew] = useState(false);
    const [membership,setMembership] = useState([]);
    const [data,setData] = useState(null);
    const navigate = useNavigate();
    const [planMember,setPlanMember] = useState("");
    const {id} = useParams();

    useEffect(()=>{
        fetchData ();
        fetchMembership();
    },[])

    const fetchMembership= async()=>{
        // .       
            // .
            // Please Watch the youtube video for full code 
            // .
            // .
            // .
    }

    const fetchData=async()=>{
        // .       
            // .
            // Please Watch the youtube video for full code 
            // .
            // .
            // .
    }

    const handleSwitchBtn = async() => {
        // .       
            // .
            // Please Watch the youtube video for full code 
            // .
            // .
            // .
    }

    const isDateInPast = (inputDate) => {
        const today = new Date(); // Get the current date
        const givenDate = new Date(inputDate); // Convert the input to a Date object
      
        return givenDate < today; // Check if the given date is before today
    };

    const handleOnChangeSelect =(event)=>{
        let value = event.target.value;
        setPlanMember(value);
    }
    const handleRenewSaveBtn = async()=>{
        // .       
            // .
            // Please Watch the youtube video for full code 
            // .
            // .
            // .
    }

    return (
        <div className='w-3/4 text-black p-5'>
            <div onClick={() => { navigate(-1) }} className='border-2 w-fit text-xl font-sans text-white p-2 rounded-xl bg-slate-900 cursor-pointer'>
                <ArrowBackIcon /> Go Back
            </div>
            <div className='mt-10 p-2'>
                <div className='w-[100%] h-fit flex'>
                    <div className='w-1/3  mx-auto'>
                        <img src={data?.profilePic} className='w-full  mx-auto' />
                    </div>
                    <div className='w-2/3 mt-5 text-xl p-5'>
                        {/* // .       
            // .
            // Please Watch the youtube video for full code 
            // .
            // .
            // . */}
                        <div className='mt-1 mb-2 text-2xl font-semibold'>Joined Date : {data?.createdAt.slice(0,10).split('-').reverse().join('-')}</div>
                        <div className='mt-1 mb-2 text-2xl font-semibold'>Next Bill Date : {data?.nextBillDate.slice(0,10).split('-').reverse().join('-')}</div>
                        <div className='mt-1 mb-2 flex gap-4 text-2xl font-semibold'> Status : <Switch onColor='#6366F1' checked={status === "Active"} onChange={() => { handleSwitchBtn() }} /></div>
                        {isDateInPast(data?.nextBillDate) && <div onClick={() => { setRenew(prev => !prev) }} className={`mt-1 rounded-lg p-3 border-2 border-slate-900 text-center ${renew && status === "Active" ? 'bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white' : null}  w-full md:w-1/2 cursor-pointer hover:text-white hover:bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500`}>Renew</div>}

                        {
                            renew && status === "Active" ? (
                                {/* // .       
            // .
            // Please Watch the youtube video for full code 
            // .
            // .
            // . */}
                            ) : null
                        }

                    </div>
                </div>


            </div>
            <ToastContainer/>
        </div>
    )
}

export default MemberDetail