import React, { useState,useEffect } from 'react'
import axios from 'axios';

import Stack from '@mui/material/Stack';
import LinearProgress from '@mui/material/LinearProgress';
import { ToastContainer,toast } from 'react-toastify';

const Addmembers = () => {

  const [inputField, setInputField] = useState({ name: "", mobileNo: "", address: "", membership: "", profilePic: "https://th.bing.com/th/id/OIP.gj6t3grz5no6UZ03uIluiwHaHa?rs=1&pid=ImgDetMain", joiningDate: "" })
  const [imageLoader, setImageLoader] = useState(false);
  const [membershipList,setMembershipList] = useState([]);
  const [selectedOption,setSelectedOption] = useState("");
  const handleOnChange = (event, name) => {
    setInputField({ ...inputField, [name]: event.target.value })
  }
  console.log(inputField)

  const uploadImage = async (event) => {
    setImageLoader(true)
    console.log("Image Uploading")
    const files = event.target.files;
    const data = new FormData();
    data.append('file', files[0]);

    

    data.append('upload_preset', 'gym-management');

    try {
      const response = await axios.post("https://api.cloudinary.com/v1_1/mashhuudanny/image/upload", data);
      console.log(response)
      const imageUrl = response.data.url;
      setInputField({ ...inputField, ['profilePic']: imageUrl })
      setImageLoader(false)

    } catch (err) {
      console.log(err)
      setImageLoader(false)

    }



  }

  const fetchMembership = async()=>{
    await axios.get('http://localhost:4000/plans/get-membership',{withCredentials:true}).then((response)=>{

      // .       
            // .
            // Please Watch the youtube video for full code 
            // .
            // .
            // .

    }).catch(err=>{
      console.log(err);
      toast.error("Something Wrong Happedned")
    })
  }

  useEffect(()=>{
    console.log(inputField)
    fetchMembership();
  },[])

  const handleOnChangeSelect = (event) => {
    let value = event.target.value;
    // .       
            // .
            // Please Watch the youtube video for full code 
            // .
            // .
            // .
    
  };

  const handleRegisterButton=async()=>{
    // .       
            // .
            // Please Watch the youtube video for full code 
            // .
            // .
            // .
  }
  return (
    <div className='text-black'>
      <div className='grid gap-5 grid-cols-2 text-lg'>

        <input value={inputField.name} onChange={(event) => { handleOnChange(event, "name") }} placeholder='Name of the Joinee' type='text' className='border-2 w-[90%] pl-3 pr-3 pt-2 pb-2 border-slate-400 rounded-md h-12' />
        {/* // .       
            // .
            // Please Watch the youtube video for full code 
            // .
            // .
            // . */}
        <select value={selectedOption} onChange={handleOnChangeSelect} className='border-2 w-[90%] h-12 pt-2 pb-2 border-slate-400 rounded-md placeholder:text-gray'>
          {
           membershipList.map((item,index)=>{
            return(
              <option key={index} value={item._id}>{item.months} Months Membership</option>
            );
           }) 
          }

        </select>

        <input type='file' onChange={(e) => uploadImage(e)} />

        {/* // .       
            // .
            // Please Watch the youtube video for full code 
            // .
            // .
            // . */}


        <div onClick={()=>handleRegisterButton()} className='p-3 border-2 w-28 text-lg h-14 text-center bg-slate-900 text-white rounded-xl cursor-pointer hover:bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500'>Register</div>

      </div>
      <ToastContainer/>
    </div>
  )
}

export default Addmembers