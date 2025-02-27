
import './App.css';
import Sidebar from './Components/Sidebar/sidebar.js';
import Dashboard from './Pages/Dashboard/dashboard.js';
import Home from './Pages/Home/home.js';
import {Routes,Route,useNavigate} from 'react-router-dom'
import { useState,useEffect } from 'react';
import Member from './Pages/Member/member.js';
import GeneralUser from './Pages/GeneralUser/generalUser.js';
import MemberDetail from './Pages/MemberDetail/memberDetail.js';
import 'react-toastify/dist/ReactToastify.css';
function App() {
  const navigate = useNavigate();
  const [isLogin, setIsLogin] = useState(false)

  useEffect(()=>{
    let isLogedIn = localStorage.getItem("isLogin");
    if(isLogedIn){
      setIsLogin(false);
      navigate('/dashboard')
      
    }else{
      setIsLogin(false)
      navigate('/dashboard');
    }
  },[localStorage.getItem("isLogin")])

  return (
    <div className="flex">
      {
        isLogin && <Sidebar />
      }
      <Sidebar />
      
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/dashboard' element={<Dashboard/>} />
        <Route path='/member' element={<Member/>} />
        <Route path='/specific/:page' element={<GeneralUser/>} />
        <Route path='/member/:id' element={<MemberDetail/>} />

      </Routes>

    </div>
  );
}

export default App;
