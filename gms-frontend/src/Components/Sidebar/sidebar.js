import React,{useState,useEffect} from 'react'
import HomeIcon from '@mui/icons-material/Home';
import GroupIcon from '@mui/icons-material/Group';
import LogoutIcon from '@mui/icons-material/Logout';
import { Link,useLocation,useNavigate } from 'react-router-dom';
const Sidebar = () => {

    const [greeting, setGreeting] = useState("");
    const location = useLocation(); // Get the current location
    const navigate = useNavigate()

    const greetingMessage = ()=>{
        // .       
            // .
            // Please Watch the youtube video for full code 
            // .
            // .
            // .
    }

    useEffect(()=>{
        greetingMessage()
    },[])

    const handleLogout = async()=>{
        localStorage.clear();
        navigate('/')
    }

  return (
    <div className='w-1/4 h-[100vh] border-2 bg-black text-white p-5 font-extralight'>
        <div className='text-center text-3xl'>
            {localStorage.getItem('gymName')}
        </div>
        {/* // .       
            // .
            // Please Watch the youtube video for full code 
            // .
            // .
            // . */}

        <div className='mt-10 py-10 border-t-2 border-gray-700'>
            <Link to='/dashboard' className={`flex items-center gap-8 font-semibold text-xl bg-slate-800 p-3 rounded-xl cursor-pointer hover:bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 hover:text-black ${location.pathname==="/dashboard"?'border-2 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500':null}`}>               
                <div><HomeIcon/></div>
                <div>Dashboard</div>
            </Link>

            <Link to='/member' className={`flex items-center mt-5 gap-8 font-semibold text-xl bg-slate-800 p-3 rounded-xl cursor-pointer hover:bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 hover:text-black ${location.pathname==="/member"?'border-2 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500':null}`}>
                <div><GroupIcon/></div>
                <div>Members</div>
            </Link>

            {/* // .       
            // .
            // Please Watch the youtube video for full code 
            // .
            // .
            // . */}
        </div>
    </div>
  )
}

export default Sidebar