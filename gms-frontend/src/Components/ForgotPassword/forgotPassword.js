import React, { useState } from 'react'
import Loader from '../Loader/loader'
import axios from 'axios'
import { ToastContainer,toast } from 'react-toastify'
const ForgotPassword = () => {
    const [emailSubmit, setEmailSubmit] = useState(false)
    const [otpValidate,setOtpValidate] = useState(false);
    const [loader,setLoader] = useState(false)
    const [contentVal,setContentValue] = useState("Submit Your Email")

    const [inputField, setInputField] = useState({ email: "", otp: "", newPassword: "" });

    const handleSubmit = () => {
        if (!emailSubmit) {
            setEmailSubmit(true)
            setContentValue("Enter OTP")
            sendOtp();
        }else if(emailSubmit && !otpValidate){
            setOtpValidate(true)
            setContentValue("Enter New Pasword")
            verifyOTP();

        }else{
            changePassword()
        }
    }

    const changePassword = async()=>{
        setLoader(false)
        // .       
            // .
            // Please Watch the youtube video for full code 
            // .
            // .
            // .
    }


    const verifyOTP = async()=>{
        setLoader(false);
        // .       
            // .
            // Please Watch the youtube video for full code 
            // .
            // .
            // .
    }

    const sendOtp = async()=>{
        setLoader(false);
        // .       
            // .
            // Please Watch the youtube video for full code 
            // .
            // .
            // .
    }



    const handleOnChange =(event,name)=>{
        setInputField({...inputField,[name]:event.target.value})
    }
    return (
        <div className='w-full'>
            {/* // .       
            // .
            // Please Watch the youtube video for full code 
            // .
            // .
            // . */}
            <div className='w-1/2 mb-5'>           
              <input type='text' value={inputField.email} onChange={(event) => { handleOnChange(event, "email") }} className='w-full mb-10 p-2 rounded-lg' placeholder='Enter Email' />
            </div>

            {emailSubmit && <div className='w-1/2 mb-5'>
                <input type='text' value={inputField.otp} onChange={(event) => { handleOnChange(event, "otp") }} className='w-full mb-10 p-2 rounded-lg' placeholder='Enter OTP' />
            </div>}

            {otpValidate && <div className='w-1/2 mb-5'>
                <input type='text' value={inputField.newPassword} onChange={(event) => { handleOnChange(event, "newPassword") }} className='w-full mb-10 p-2 rounded-lg' placeholder='Enter New Password' />
            </div>}



            <div className='bg-slate-800 text-white mx-auto w-2/3 p-3 rounded-lg text-center font-semibold cursor-pointer border-2 hover:bg-white hover:text-black' onClick={() => handleSubmit()}>{contentVal}</div>
            {loader && <Loader />}
            <ToastContainer/>
        </div>
    )
}

export default ForgotPassword