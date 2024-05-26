import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { FaCircleUser } from "react-icons/fa6";

const UserDetails = () => {
  const [userDetails, setUserDetails] = useState(null);
  const [message, setMessage] = useState('');

  useEffect(() => {
    const fetchUserDetails = async () => {
      const userId = localStorage.getItem('userId');
      if (!userId) {
        setMessage('User not logged in.');
        return;
      }

      try {
        const response = await axios.get(`/api/v1/user/users/${userId}`);
        setUserDetails(response.data);
      } catch (error) {
        console.error('Error fetching user details:', error.response?.data?.message || error.message);
      }
    };

    fetchUserDetails();
  }, []);

  if (!userDetails) {
    return <div>{message || 'Loading...'}</div>;
  }

  return (
    <div>
      {/* <h2>User Details</h2>
      <p>Name: {userDetails.name}</p>
      <p>Email: {userDetails.email}</p>
      <p>Number of Posts: {userDetails.numberOfPosts}</p> */}

      <div className="bg-white flex w-[825px] p-10 rounded-md h-[520px] ml-[480px] mt-[100px]">
        <div className="flex flex-col" >
          <div className="flex " >
            <FaCircleUser className="text-6xl  text-[#dedede] mr-6 " />
            <div>
            <p className="text-2xl font-semibold text-slate-800 font-sans mb-1 " >{userDetails.name}</p>
            <p className="text-md text-slate-800 font-semibold font-sans " >{userDetails.email}</p>
            
          </div>
          </div>

            <div className="w-[140px] mt-12 justify-center items-center flex gap-2 h-[120px] rounded-md bg-[#f2f2f2]" >
                <div className="">
                  <h1 className='text-4xl mb-2 text-center  ' >{userDetails.numberOfPosts}</h1>
                  <p className="text-slate-800 font-semibold" >Total Post</p>
                </div>
            </div>

        </div>
      </div>

    </div>

  );
};

export default UserDetails;
