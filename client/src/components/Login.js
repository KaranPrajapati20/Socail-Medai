// // import React, { useState } from 'react';
// // import axios from 'axios';
// // import { useNavigate } from 'react-router-dom';

// // const Login = () => {
// //   const navigate = useNavigate();
// //   const [formData, setFormData] = useState({
// //     email: '',
// //     password: ''
// //   });
// //   const [error, setError] = useState('');

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
// //       const response = await axios.get('/api/v1/user/login', formData); // Change to POST request
// //       console.log('Login successful:', response.data);
// //       // Store user ID in local storage
// //       localStorage.setItem('userId', response.data._id);
// //       // Redirect user to another page upon successful login
// //       navigate('/');
// //     } catch (error) {
// //       console.error('Login failed:', error.response.data.message);
// //       setError(error.response.data.message);
// //     }
// //   };

// //   return (
// //     <div>
// //       <h2>Login</h2>
// //       {error && <p>{error}</p>}
// //       <form onSubmit={handleSubmit}>
// //         <div>
// //           <label htmlFor="email">Email:</label>
// //           <input
// //             type="email"
// //             id="email"
// //             name="email"
// //             value={formData.email} // Use formData.email
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
// //         <button type="submit">Login</button>
// //       </form>
// //     </div>
// //   );
// // };

// // export default Login;



// import React, { useState } from 'react';
// import axios from 'axios';
// import { useNavigate } from 'react-router-dom';

// const Login = () => {
//   const navigate = useNavigate();
//   const [formData, setFormData] = useState({
//     email: '',
//     password: ''
//   });
//   const [error, setError] = useState('');

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
//       const response = await axios.post('/api/v1/user/login', formData);
//       console.log('Login successful:', response.data);

//       // Store user ID in local storage
//       localStorage.setItem('userId', response.data.userId);

//       // Redirect user to another page upon successful login
//       navigate('/show');
//     } catch (error) {
//       console.error('Login failed:', error.response?.data?.message);
//       setError(error.response?.data?.message || 'An unexpected error occurred');
//     }
//   };

//   return (
//     <div>
//       <h2>Login</h2>
//       {error && <p>{error}</p>}
//       <form onSubmit={handleSubmit}>
//         <div>
//           <label htmlFor="email">Email:</label>
//           <input
//             type="email"
//             id="email"
//             name="email"
//             value={formData.email}
//             onChange={handleChange}
//             required
//           />
//         </div>
//         <div>
//           <label htmlFor="password">Password:</label>
//           <input
//             type="password"
//             id="password"
//             name="password"
//             value={formData.password}
//             onChange={handleChange}
//             required
//           />
//         </div>
//         <button type="submit">Login</button>
//       </form>
//     </div>
//   );
// };

// export default Login;

import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate, Link } from 'react-router-dom';

const Login = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });
  const [error, setError] = useState('');
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
      const response = await axios.post('/api/v1/user/login', formData);
      console.log('Login successful:', response.data);

      // Store user ID in local storage
      localStorage.setItem('userId', response.data.userId);

      // Redirect user to another page upon successful login
      navigate('/show');
    } catch (error) {
      console.error('Login failed:', error.response?.data?.message);
      setError(error.response?.data?.message || 'An unexpected error occurred');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className='overflow-hidden relative'>
      <div className="flex justify-around items-center h-screen bg-[#f2f2f2] w-screen ">
        <div className="justify-center items-center hidden lg:flex mt-[-50px] ">
          <h1 className="text-[#D92525] text-6xl font-bold">Social</h1>
          <span className="text-[#D92525] text-8xl font-extrabold poller-one">X</span>
          <div className="flex flex-col">
            <span className="text-black ml-[-240px] mt-[180px] font-semibold w-[600px]">
              SocialX helps you to connect with other people in any corner. SocialX helps you to connect with other people in any corner. SocialX helps you to connect with other people in any corner.
            </span>
          </div>
        </div>
        <div className="">
          <div className="w-[500px] h-[440px] rounded-md bg-white shadow-2xl shadow-slate-400">
            <h2 className='text-3xl text-[#000000] px-12 pt-7 font-bold text-opacity-70 p-5'>Login</h2>
            <p className='pl-12 pr-12' >Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eveniet deleniti sed odit?</p>
            {error && <span className='text-red-500 mx-12 '>{error}</span>}
            <form onSubmit={handleSubmit} className='p-12 mt-[-30px]'>
              <div>
                <input className='border focus:outline-none focus:border-blue-500 border-[#dedede] rounded w-full p-3 border-opacity-60 text-black bg-[#f2f2f2] mb-2'
                  placeholder='Email'
                  type="email"
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
                ) : 'Login'}
              </button>
              <Link className="text-black font-semibold flex my-2 text-center w-full ml-[60px] mt-5" to="/signup">Don't have an account? Sign Up</Link>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;

