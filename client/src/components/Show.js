import React, { useState, useEffect } from 'react';
import axios from 'axios';
import shape1 from '../assets/logo.png';
import { FaCircleUser } from "react-icons/fa6";
import { AiFillLike } from "react-icons/ai";
import { AiFillDislike } from "react-icons/ai";

const Show = () => {
  const [posts, setPosts] = useState([]);
  const [message, setMessage] = useState('');
  const [userName, setUserName] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const userId = localStorage.getItem('userId');
        if (userId) {
          const response = await axios.get(`/api/v1/user/users/${userId}`);
          const { name } = response.data;
          setUserName(name);
          localStorage.setItem('userName', name);
          fetchAllPosts();
        } else {
          setMessage('User not logged in.');
        }
      } catch (error) {
        console.error('Error fetching user data:', error);
        setMessage('Failed to fetch user data.');
      }
    };

    fetchData();
  }, []);

  const fetchAllPosts = async () => {
    try {
      const response = await axios.get('/api/v1/post/all-posts');
      const postsWithDefaults = response.data.map((post) => ({
        ...post,
        dislikes: post.dislikes || 0,
      }));
      setPosts(postsWithDefaults.reverse());
    } catch (error) {
      console.error('Error fetching posts:', error.response?.data?.message || error.message);
      setMessage('Failed to fetch posts.');
    }
  };

  const handleLike = async (postId) => {
    try {
      await axios.post(`/api/v1/post/${postId}/like`);
      setPosts((prevPosts) =>
        prevPosts.map((post) =>
          post._id === postId ? { ...post, likes: post.likes + 1 } : post
        )
      );
      // setMessage('Post liked successfully!');
    } catch (error) {
      console.error('Error liking post:', error.response?.data?.message || error.message);
      // setMessage('Failed to like post.');
    }
  };

  const handleDislike = async (postId) => {
    try {
      await axios.post(`/api/v1/post/${postId}/dislike`);
      setPosts((prevPosts) =>
        prevPosts.map((post) =>
          post._id === postId ? { ...post, dislikes: post.dislikes + 1 } : post
        )
      );
      setMessage('Post disliked successfully!');
    } catch (error) {
      console.error('Error disliking post:', error.response?.data?.message || error.message);
      setMessage('Failed to dislike post.');
    }
  };

  return (
    // <div className='h-[1000px]'>
    //   <h2 className='text-red-500'>All Posts</h2>
    //   {message && <p>{message}</p>}
    //   <ul>
    //     {posts.map((post) => (
    //       <li key={post._id}>
    //         <h3>{post.title}</h3>
    //         <p>{post.desc}</p>
    //         <img src={post.image} alt="Post" style={{ maxWidth: '300px', maxHeight: '300px' }} />
    //         <p>Posted by: {userName}</p>
    //         <p>Likes: {post.likes}</p>
    //         <p>Dislikes: {post.dislikes}</p>
    //         <p>Timestamp: {new Date(post.createdAt).toLocaleString()}</p>
    //         <button onClick={() => handleLike(post._id)}>Like</button>
    //         <button onClick={() => handleDislike(post._id)}>Dislike</button>
    //       </li>
    //     ))}
    //   </ul>
    //   {userName && <p>Current user: {userName}</p>}
    // </div>

    <div>
      <div className='bg-[#f2f2f2] w-full '>

  <div className=" ml-[470px] hidden lg:flex justify-center items-start w-[175%] relative bg-[#f2f2f2] rounded-md h-[80px]">

  </div>

  
</div>



            {message && <p>{message}</p>}
            {
              posts.map((post) => (
                <div className='bg-[#f2f2f2] mt-[-80px]  w-full h-[480px]'>
            <div className='mt-[100px] ml-[470px] hidden overflow-hidden lg:flex justify-center items-start w-[175%] relative bg-white rounded-md h-full'>
              <div className='w-[90%] bg-white absolute h-[400px] rounded-md mt-8 border border-[#dedede] border-x-2'>
                <img className='w-full h-full z-0 p-7 rounded-md absolute' src={post.image} alt="" />
                  {/* hover:bg-gradient-to-t from-slate-900 */}
                  <div className='absolute p-6 bottom-[-20px]  hover:bottom-0  bg-white hover:shadow-inner rounded-tr-xl rounded-tl-xl   w-full flex opacity-0  transition-all ease-in-out duration-300 hover:opacity-100'>
                    <div className='flex flex-col ml-4'>
                    <div className='flex'>

                    <FaCircleUser className='text-5xl text-[#dedede]'/>
                    <div className='flex flex-col ml-3 mt-[-8px] ' >
                      <div className='flex justify-between w-full mb-3'>
                      <span className='text-xl text-slate-800 mt-2 font-semibold font-sans w-full ' >{post.name}</span>
                      {/* <span className='text-md font-italic normal font-sans flex ml-[100px]  w-[400px] mt-2 ' >{new Date(post.createdAt).toLocaleString()}</span> */}
                      <span className='text-md font-italic normal font-sans flex ml-[180px]  w-[400px] mt-2 ' >{new Date(post.createdAt).toLocaleDateString()}</span>
                      </div>
                      <span className='text-md mt-[-17px]'>{post.title}</span>
                    </div>

                    </div>
                    <p className="ml-2  pr-16 mt-4 font-semibold text-slate-800" >{post.desc}</p>
                    <div className="flex mt-2 p-4 ml-[-10px] " >
                    <div className="flex text-center p-2 bg-[#f2f2f2] rounded-md justify-between w-[60px] " >
                    <button className="flex flex-start  w-fit rounded text-xl" onClick={() => handleLike(post._id)}><AiFillLike /></button>
                    <p className="" >{post.likes}</p>
                    </div>
                    <div className="flex text-center p-2 bg-[#f2f2f2] rounded-md justify-between w-[60px] ml-2 " >
                    <button className="flex flex-start  w-fit rounded text-xl" onClick={() => handleDislike(post._id)}><AiFillDislike /></button>
                    <p className="" >{post.dislikes}</p>
                    </div>
                    </div>
                    
                    </div>
                  </div>
              </div>
            </div>  
        </div>
              ))
            }





    </div>

  );
};

export default Show;










