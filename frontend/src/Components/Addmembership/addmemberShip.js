import React, { useState, useEffect } from 'react'
import axios from 'axios'
import {toast,ToastContainer} from 'react-toastify';
const AddmemberShip = ({handleClose}) => {

    const [inputField, setInputField] = useState({ months: "", price: "" });
    const [membership, setMembership] = useState([]);


    const handleOnChange = (event, name) => {
        setInputField({ ...inputField, [name]: event.target.value })
    }

    const fetchMembership = async () => {
       // .       
            // .
            // Please Watch the youtube video for full code 
            // .
            // .
            // .
    }

    useEffect(() => {
        fetchMembership()
    }, [])

    const handleAddmembership = async()=>{
        // .       
            // .
            // Please Watch the youtube video for full code 
            // .
            // .
            // .
    }

    return (
        <div className='text-black'>
            <div className='flex flex-wrap gap-5 items-center justify-center'>

                <div className='text-lg bg-slate-900 text-white border-2 pl-2 pr-2 flex-col gap-3 justify-between pt-1 pb-1 rounded-xl font-semibold hover:bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500'>
                    <div>1 Months Membersip</div>
                    <div>Rs 1000</div>
                </div>
                <div className='text-lg bg-slate-900 text-white border-2 pl-2 pr-2 flex-col gap-3 justify-between pt-1 pb-1 rounded-xl font-semibold hover:bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500'>
                    <div>2 Months Membersip</div>
                    <div>Rs 1800</div>
                </div>
                <div className='text-lg bg-slate-900 text-white border-2 pl-2 pr-2 flex-col gap-3 justify-between pt-1 pb-1 rounded-xl font-semibold hover:bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500'>
                    <div>3 Months Membersip</div>
                    <div>Rs 2600</div>
                </div>
                <div className='text-lg bg-slate-900 text-white border-2 pl-2 pr-2 flex-col gap-3 justify-between pt-1 pb-1 rounded-xl font-semibold hover:bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500'>
                    <div>4 Months Membersip</div>
                    <div>Rs 4000</div>
                </div>
                <div className='text-lg bg-slate-900 text-white border-2 pl-2 pr-2 flex-col gap-3 justify-between pt-1 pb-1 rounded-xl font-semibold hover:bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500'>
                    <div>6 Months Membersip</div>
                    <div>Rs 6000</div>
                </div>
                {/* // .       
            // .
            // Please Watch the youtube video for full code 
            // .
            // .
            // . */}



            </div>

            <hr className='mt-10 mb-10' />
            <div className='flex gap-10 mb-10'>

                <input value={inputField.months} onChange={(event) => handleOnChange(event, "months")} className='border-2 rounded-lg text-lg w-1/3 h-1/2 p-2' type='number' placeholder="Add No. of Months" />

                <input value={inputField.price} onChange={(event) => handleOnChange(event, "price")} className='border-2 rounded-lg text-lg w-1/3 h-1/2 p-2' type='number' placeholder="Add Price" />

                <div onClick={()=>{handleAddmembership()}} className='text-lg border-2 p-1 w-auto mt-0 rounded-xl cursor-pointer hover:bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500'> Add +</div>

            </div>
            <ToastContainer/>
        </div >
    )
}

export default AddmemberShip