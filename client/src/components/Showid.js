import React, { useState, useEffect } from 'react';
import axios from 'axios';
import shape1 from '../assets/logo.png';

import { FaCircleUser } from "react-icons/fa6";
import { AiFillLike } from "react-icons/ai";
import { AiFillDislike } from "react-icons/ai";

const Showid = () => {
  const [posts, setPosts] = useState([]);
  const [message, setMessage] = useState('');
  const [userName, setUserName] = useState('');
  const userId = localStorage.getItem('userId'); // Get user ID from local storage

  useEffect(() => {
    if (userId) {
      fetchUserPosts();
      fetchUserName();
    } else {
      setMessage('User not logged in.');
    }
  }, [userId]);

  const fetchUserPosts = async () => {
    try {
      const response = await axios.get(`/api/v1/user/${userId}/posts`);
      const postsWithDefaults = response.data.map((post) => ({
        ...post,
        likes: post.likes || 0,
        dislikes: post.dislikes || 0, // Use 'dislikes' instead of 'unlikes' to match the backend field
      }));
      setPosts(postsWithDefaults);
    } catch (error) {
      console.error('Error fetching posts:', error.response?.data?.message || error.message);
      setMessage('Failed to fetch posts.');
    }
  };

  const fetchUserName = async () => {
    try {
      const response = await axios.get(`/api/v1/user/users/${userId}`);
      setUserName(response.data.name);
    } catch (error) {
      console.error('Error fetching user data:', error.response?.data?.message || error.message);
      setUserName('User');
    }
  };

  return (
    <div className='bg-[#f2f2f2] w-full h-full flex flex-col items-center'>
      <div className="hidden lg:flex justify-center items-start w-[175%] bg-[#f2f2f2] h-[80px]"></div>

      {message  && <p className='flex justify-center items-center absolute text-green-700 ml-12' >{message}</p>}

      {posts.length === 0 ? (
        <div className='mt-[18px] ml-[480px] hidden lg:flex justify-center items-start w-[820px] relative bg-white rounded-md h-[480px]'>
          <div className='w-[90%] bg-white absolute h-[400px] rounded-md mt-8 border border-[#dedede] flex items-center justify-center'>
            <img className='flex justify-center items-center w-[200px] h-[200px]' src="https://img.freepik.com/free-vector/no-data-concept-illustration_114360-536.jpg?size=626&ext=jpg&ga=GA1.1.1578114858.1702025584&semt=sph" alt="" />
          </div>
        </div>
      ) : (
        posts.map((post) => (
          <div key={post.id} className='bg-[#f2f2f2] mb-[110px] mt-[-80px] w-full h-[480px]'>
            <div className='mt-[100px] ml-[470px] hidden lg:flex justify-center items-start w-[175%] relative bg-white rounded-md h-full'>
              <div className='w-[90%] bg-white absolute h-[400px] rounded-md mt-8 border border-[#dedede] border-x-2'>
                <img className='w-full h-full z-0 p-7 rounded-md absolute' src={post.image} alt="" />
                {/* <div className='absolute p-6 top-[-20px]  hover:top-0  bg-white hover:shadow-inner shadow rounded-br-xl rounded-bl-xl  min-h-28 w-full flex opacity-0  transition-all ease-in-out duration-300 hover:opacity-100'>
                  <img className='w-10 h-10 rounded-full flex' src={shape1} alt="" />
                  <div className='flex flex-col ml-4'>
                    <span>{userName}</span>
                    <span>{new Date(post.createdAt).toLocaleString()}</span>
                  </div>
                </div> */}
                {/* <div className='absolute p-6 bottom-[-20px]  hover:bottom-0  bg-white hover:shadow-inner rounded-tr-xl rounded-tl-xl  min-h-60 w-full flex opacity-0  transition-all ease-in-out duration-300 hover:opacity-100'>
                  <div className='flex flex-col ml-4'>
                    <span className='font-bold'>{post.title} :</span>
                    <span className='font-semibold text-slate-900'>{post.desc}</span>
                  </div>
                </div> */}
                <div className='absolute p-6 bottom-[-20px]  hover:bottom-0  bg-white hover:shadow-inner rounded-tr-xl rounded-tl-xl   w-full flex opacity-0  transition-all ease-in-out duration-300 hover:opacity-100'>
                    <div className='flex flex-col ml-4'>
                    <div className='flex'>
                    <FaCircleUser className='text-5xl text-[#dedede]'/>
                    <div className='flex flex-col ml-3 mt-[-8px]' >
                      <div className='flex justify-between w-full mb-3'>
                      <span className='text-xl text-slate-800 mt-2 font-semibold font-sans w-full ' >{userName}</span>
                      <span className='text-md font-italic normal font-sans flex ml-[180px]  w-[400px] mt-2  ' >{new Date(post.createdAt).toLocaleDateString()}</span>
                      </div>
                      <span className='text-md mt-[-17px]'>{post.title}</span>
                    </div>
                    </div>
                    <p className="ml-2 mr-4 mt-4 font-semibold text-slate-800" >{post.desc}</p>
                    <div className="flex mt-2 p-4 ml-[-10px] " >
                    <div className="flex text-center p-2 bg-[#f2f2f2] rounded-md justify-between w-[60px] " >
                    <button className="flex flex-start  w-fit rounded text-xl" ><AiFillLike /></button>
                    <p className="" >{post.likes}</p>
                    </div>
                    <div className="flex text-center p-2 bg-[#f2f2f2] rounded-md justify-between w-[60px] ml-2 " >
                    <button className="flex flex-start  w-fit rounded text-xl" ><AiFillDislike /></button>
                    <p className="" >{post.dislikes}</p>
                    </div>
                    </div>
                    
                    </div>
                  </div>
              </div>
            </div>
          </div>
        ))
      )}
    </div>
  );
};

export default Showid;
