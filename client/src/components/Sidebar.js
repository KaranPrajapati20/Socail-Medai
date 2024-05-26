import React from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { GoHomeFill } from "react-icons/go";
import { IoCreate } from "react-icons/io5";
import { BsFillPostcardFill } from "react-icons/bs";
import { FaCircleUser } from "react-icons/fa6";

const Sidebar = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('userId'); // Adjust the key as needed
    localStorage.clear();
    navigate('/signup');
  };

  

  return (
    <div>
      <div className="lg:flex fixed w-[15%] rounded-md hidden h-[80%] bg-white mt-[95px] ml-[15%]">
        <div className='p-5'>
          <div className='flex flex-col space-y-4 gap-1'>
            <div className={`flex p-3 rounded-md hover:bg-[#f2f2f2] ${location.pathname === '/show' || location.pathname === '/' ? 'bg-[#f2f2f2]' : 'bg-[#FFFFFF]'}`}>
              <GoHomeFill className="text-2xl text-slate-800" />
              <Link className='ml-6 text-[18px] font-semibold text-slate-800' to='/show'> Home </Link>
            </div>
            <div className={`flex p-3 w-[180px] hover:bg-[#f2f2f2] rounded-md ${location.pathname === '/post' ? 'bg-[#f2f2f2]' : 'bg-[#ffffff]'}`}>
              <IoCreate className="text-2xl text-slate-800" />
              <Link className='ml-6 text-[18px] font-semibold text-slate-800' to='/post'> Post </Link>
            </div>
            <div className={`flex p-3 w-[180px] hover:bg-[#f2f2f2] rounded-md ${location.pathname === '/showid' ? 'bg-[#f2f2f2]' : 'bg-[#ffffff]'}`}>
              <BsFillPostcardFill className="text-2xl text-slate-800" />
              <Link className='ml-6 text-[18px] font-semibold text-slate-800' to='/showid'> My Post </Link>
            </div>
            <div className={`flex p-3 w-[180px] hover:bg-[#f2f2f2] rounded-md ${location.pathname === '/profile' ? 'bg-[#f2f2f2]' : 'bg-[#ffffff]'}`}>
              <FaCircleUser className="text-2xl text-slate-800" />
              <Link className='ml-6 text-[18px] font-semibold text-slate-800' to='/profile'> Profile </Link>
            </div>
            <div className='absolute w-[180px] flex p-3 bg-[#f2f2f2] rounded-md bottom-[10px] cursor-pointer' onClick={handleLogout}>
              <FaCircleUser className="text-2xl text-slate-800" />
              <span className='ml-6 text-[18px] font-semibold text-slate-800'> Logout </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
