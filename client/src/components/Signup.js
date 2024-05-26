// // import React, { useState } from 'react';
// // import axios from 'axios'; 
// // import { useNavigate } from 'react-router-dom';
// // import shape1 from '../assets/shape1.png';
// // import shape2 from '../assets/shape2.png';
// // import shape3 from '../assets/shape3.png';
// // import shape4 from '../assets/shape4.png';
// // import { Link } from 'react-router-dom';

// // const Signup = () => {
// //     const navigate = useNavigate();
// //   const [formData, setFormData] = useState({
// //     name: '',
// //     email: '',
// //     password: ''
// //   });

// //   const handleChange = (e) => {
// //     const { name, value } = e.target;
// //     setFormData(prevState => ({
// //       ...prevState,
// //       [name]: value
// //     }));
// //   };

// //   const handleSubmit = async (e) => {
// //     e.preventDefault();
// //     try {
// //       const response = await axios.post('/api/v1/user/put-data', formData); // Make HTTP POST request
// //       console.log('Form data sent to server');
// //       const userId = response.data._id; 
// //       localStorage.setItem('userId', userId);
// //       console.log('userId:', userId); 
// //       navigate('/')
// //       setFormData({
// //         name: '',
// //         email: '',
// //         password: ''
// //       });
// //     } catch (error) {
// //       console.error('Error submitting form:', error);
// //     }
// //   };

// //   return (
// //     <div className='overflow-hidden relative'>
// //       {/* <h2 className='text-3xl'>Sign Up</h2>
// //       <form onSubmit={handleSubmit}>
// //         <div>
// //           <label htmlFor="name">Name:</label>
// //           <input
// //             type="text"
// //             id="name"
// //             name="name"
// //             value={formData.name}
// //             onChange={handleChange}
// //             required
// //           />
// //         </div>
// //         <div>
// //           <label htmlFor="email">Email:</label>
// //           <input
// //             type="email"
// //             id="email"
// //             name="email"
// //             value={formData.email}
// //             onChange={handleChange}
// //             required
// //           />
// //         </div>
// //         <div>
// //           <label htmlFor="password">Password:</label>
// //           <input
// //             type="password"
// //             id="password"
// //             name="password"
// //             value={formData.password}
// //             onChange={handleChange}
// //             required
// //           />
// //         </div>
// //         <button type="submit">Sign Up</button>
// //       </form> */}


                  
// //               <img className='absolute hidden xl:flex' src={shape1} alt="Shape 1" />
// //               <img className='absolute hidden xl:flex bottom-[100px]' src={shape2} alt="Shape 2" />
// //               <img className='absolute hidden xl:flex mt-[600px] ml-[300px]' src={shape3} alt="Shape 3" />
// //               <img className='absolute hidden xl:flex mt-[600px] right-0' src={shape4} alt="Shape 3" />
// //               <img className='absolute hidden xl:flex ml-[600px] top-0 rotate-180' src={shape3} alt="Shape 3" />


// //               <div className="flex justify-around items-center h-screen bg-[#f2f2f2] w-screen">
// //                 <div className="justify-center items-center hidden lg:flex">
// //                   <h1 className="text-[#D92525] text-6xl font-bold ">Social</h1>
// //                   <span className="text-[#D92525] text-8xl font-extrabold poller-one">X</span>
// //                   <div className=" flex flex-col ">
// //                   <span className="text-black ml-[-240px] mt-[180px] font-semibold w-[600px]">SocialX helps you to connect with other people in any corner SocialX helps you to connect with other people in any corner SocialX helps you to connect with other people in any corner</span>
// //                   </div>
// //                 </div>
// //                 <div className="">
// //                   <div className="w-[500px] h-[480px] rounded-md bg-white shadow-2xl shadow-slate-400 ">
// //                                       <h2 className='text-3xl text-[#000000] px-12 pt-7 font-bold text-opacity-70 p-5'>Sign Up</h2>
// //                                       <span className='text-black  mx-12 w-[400px] flex mt-[-10px] mb-[-20px]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia ducimus voluptates quos.</span>
// //                       <form onSubmit={handleSubmit} className='p-12'>
// //                         <div>
// //                           <input className='border border-[#dedede]  rounded w-full p-3 border-opacity-60 text-black bg-[#f2f2f2] mb-2 mt-[-800px]'
// //                           placeholder='Username'
// //                             type="text"
// //                             id="name"
// //                             name="name"
// //                             value={formData.name}
// //                             onChange={handleChange}
// //                             required
// //                           />
// //                         </div>
// //                         <div>
// //                           <input className='border border-[#dedede]  rounded text-black border-opacity-60 w-full p-3 bg-[#f2f2f2] mb-2'
// //                             type="email"
// //                             placeholder='Email'
// //                             id="email"
// //                             name="email"
// //                             value={formData.email}
// //                             onChange={handleChange}
// //                             required
// //                           />
// //                         </div>
// //                         <div>
// //                           <input className='border border-[#dedede]  rounded text-black border-opacity-60 w-full p-3 bg-[#f2f2f2] mb-2'
// //                             type="password"
// //                             placeholder='Password'
// //                             id="password"
// //                             name="password"
// //                             value={formData.password}
// //                             onChange={handleChange}
// //                             required
// //                           />
// //                         </div>
// //                         <span className="text-black ml-[270px] flex py-1 font-semibold">Forgot password?</span>
// //                         <button className="flex w-full justify-center rounded-md  text-center font-bold text-white poppins bg-black p-4 mt-3 "type="submit">Sign Up</button>
// //                         <Link className="text-black font-semibold flex my-2 text-center w-full ml-[60px] mt-5" to="/login">Aready have an account? want to login </Link>
// //                       </form>
// //                   </div>
// //                 </div>
// //               </div>




// //     </div>
// //   );
// // };

// // export default Signup;



// import React, { useState } from 'react';
// import axios from 'axios'; 
// import { useNavigate } from 'react-router-dom';
// import shape1 from '../assets/shape1.png';
// import shape2 from '../assets/shape2.png';
// import shape3 from '../assets/shape3.png';
// import shape4 from '../assets/shape4.png';
// import { Link } from 'react-router-dom';

// const Signup = () => {
//   const navigate = useNavigate();
//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//     password: ''
//   });

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData(prevState => ({
//       ...prevState,
//       [name]: value
//     }));
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const response = await axios.post('/api/v1/user/put-data', formData); // Make HTTP POST request
//       console.log('Form data sent to server');
//       const userId = response.data._id; 
//       localStorage.setItem('userId', userId);
//       console.log('userId:', userId); 
//       navigate('/show'); // Navigate to home page after successful signup
//       setFormData({
//         name: '',
//         email: '',
//         password: ''
//       });
//     } catch (error) {
//       console.error('Error submitting form:', error);
//     }
//   };

//   return (
//     <div className='overflow-hidden relative'>
//       <img className='absolute hidden xl:flex' src={shape1} alt="Shape 1" />
//       <img className='absolute hidden xl:flex bottom-[100px]' src={shape2} alt="Shape 2" />
//       <img className='absolute hidden xl:flex mt-[600px] ml-[300px]' src={shape3} alt="Shape 3" />
//       <img className='absolute hidden xl:flex mt-[600px] right-0' src={shape4} alt="Shape 3" />
//       <img className='absolute hidden xl:flex ml-[600px] top-0 rotate-180' src={shape3} alt="Shape 3" />

//       <div className="flex justify-around items-center h-screen bg-[#f2f2f2] w-screen">
//         <div className="justify-center items-center hidden lg:flex">
//           <h1 className="text-[#D92525] text-6xl font-bold ">Social</h1>
//           <span className="text-[#D92525] text-8xl font-extrabold poller-one">X</span>
//           <div className="flex flex-col">
//             <span className="text-black ml-[-240px] mt-[180px] font-semibold w-[600px]">
//               SocialX helps you to connect with other people in any corner SocialX helps you to connect with other people in any corner SocialX helps you to connect with other people in any corner
//             </span>
//           </div>
//         </div>
//         <div className="">
//           <div className="w-[500px] h-[480px] rounded-md bg-white shadow-2xl shadow-slate-400 ">
//             <h2 className='text-3xl text-[#000000] px-12 pt-7 font-bold text-opacity-70 p-5'>Sign Up</h2>
//             <span className='text-black mx-12 w-[400px] flex mt-[-10px] mb-[-20px]'>
//               Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia ducimus voluptates quos.
//             </span>
//             <form onSubmit={handleSubmit} className='p-12'>
//               <div>
//                 <input className='border border-[#dedede] rounded w-full p-3 border-opacity-60 text-black bg-[#f2f2f2] mb-2 mt-[-800px]'
//                   placeholder='Username'
//                   type="text"
//                   id="name"
//                   name="name"
//                   value={formData.name}
//                   onChange={handleChange}
//                   required
//                 />
//               </div>
//               <div>
//                 <input className='border border-[#dedede] rounded text-black border-opacity-60 w-full p-3 bg-[#f2f2f2] mb-2'
//                   type="email"
//                   placeholder='Email'
//                   id="email"
//                   name="email"
//                   value={formData.email}
//                   onChange={handleChange}
//                   required
//                 />
//               </div>
//               <div>
//                 <input className='border border-[#dedede] rounded text-black border-opacity-60 w-full p-3 bg-[#f2f2f2] mb-2'
//                   type="password"
//                   placeholder='Password'
//                   id="password"
//                   name="password"
//                   value={formData.password}
//                   onChange={handleChange}
//                   required
//                 />
//               </div>
//               <span className="text-black ml-[270px] flex py-1 font-semibold">Forgot password?</span>
//               <button className="flex w-full justify-center rounded-md text-center font-bold text-white poppins bg-black p-4 mt-3" type="submit">Sign Up</button>
//               <Link className="text-black font-semibold flex my-2 text-center w-full ml-[60px] mt-5" to="/login">Already have an account? Want to login</Link>
//             </form>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Signup;



import React, { useState } from 'react';
import axios from 'axios'; 
import { useNavigate } from 'react-router-dom';
import shape1 from '../assets/shape1.png';
import shape2 from '../assets/shape2.png';
import shape3 from '../assets/shape3.png';
import shape4 from '../assets/shape4.png';
import { Link } from 'react-router-dom';

const Signup = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: ''
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const response = await axios.post('/api/v1/user/put-data', formData); // Make HTTP POST request
      console.log('Form data sent to server');
      const userId = response.data._id; 
      localStorage.setItem('userId', userId);
      console.log('userId:', userId); 
      
      setTimeout(() => {
        navigate('/show'); // Navigate to home page after successful signup
        setLoading(false);
        setFormData({
          name: '',
          email: '',
          password: ''
        });
      }, 5000);
    } catch (error) {
      console.error('Error submitting form:', error);
      setLoading(false);
    }
  };

  return (
    <div className='overflow-hidden relative'>
      {/* <img className='absolute hidden xl:flex' src={shape1} alt="Shape 1" />
      <img className='absolute hidden xl:flex bottom-[100px]' src={shape2} alt="Shape 2" />
      <img className='absolute hidden xl:flex mt-[600px] ml-[300px]' src={shape3} alt="Shape 3" />
      <img className='absolute hidden xl:flex mt-[600px] right-0' src={shape4} alt="Shape 3" />
      <img className='absolute hidden xl:flex ml-[600px] top-0 rotate-180' src={shape3} alt="Shape 3" /> */}

      <div className="flex justify-around items-center h-screen bg-[#f2f2f2] w-screen">
        <div className="justify-center items-center hidden lg:flex mt-[-50px]">
          <h1 className="text-[#D92525] text-6xl font-bold ">Social</h1>
          <span className="text-[#D92525] text-8xl font-extrabold poller-one">X</span>
          <div className="flex flex-col">
            <span className="text-black ml-[-240px] mt-[180px] font-semibold w-[600px]">
              SocialX helps you to connect with other people in any corner SocialX helps you to connect with other people in any corner SocialX helps you to connect with other people in any corner
            </span>
          </div>
        </div>
        <div className="">
          <div className="w-[500px] h-[480px] rounded-md bg-white shadow-2xl shadow-slate-400 ">
            <h2 className='text-3xl text-[#000000] px-12 pt-7 font-bold text-opacity-70 p-5'>Sign Up</h2>
            <span className='text-black mx-12 w-[400px] flex mt-[-10px] mb-[-20px]'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia ducimus voluptates quos.
            </span>
            <form onSubmit={handleSubmit} className='p-12'>
              <div>
                <input className='border focus:outline-none focus:border-blue-500 border-[#dedede] rounded w-full p-3 border-opacity-60 text-black bg-[#f2f2f2] mb-2 mt-[-800px]'
                  placeholder='Username'
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>
              <div>
                <input className='border focus:outline-none focus:border-blue-500 border-[#dedede] rounded text-black border-opacity-60 w-full p-3 bg-[#f2f2f2] mb-2'
                  type="email"
                  placeholder='Email'
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
              <div>
                <input className='border focus:outline-none focus:border-blue-500 border-[#dedede] rounded text-black border-opacity-60 w-full p-3 bg-[#f2f2f2] mb-2'
                  type="password"
                  placeholder='Password'
                  id="password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  required
                />
              </div>
              <span className="text-black ml-[270px] flex py-1 font-semibold">Forgot password?</span>
              <button 
                className="flex w-full justify-center rounded-md text-center font-bold text-white poppins bg-blue-600 p-4 mt-3" 
                type="submit" 
                disabled={loading}
              >
                {loading ? (
                  <svg className="animate-spin h-5 w-5 mr-3" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C6.48 0 2 4.48 2 10h2zm2 5.292A7.962 7.962 0 014 12H2c0 3.313 2.688 6 6 6v-2.708z"></path>
                  </svg>
                ) : 'Sign Up'}
              </button>
              <Link className="text-black font-semibold flex my-2 text-center w-full ml-[60px] mt-5" to="/login">Already have an account? Want to login</Link>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;

