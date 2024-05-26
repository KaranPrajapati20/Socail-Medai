// // import React, { useState, useEffect } from 'react';
// // import axios from 'axios';

// // const Post = () => {
// //   const [formData, setFormData] = useState({
// //     title: '',
// //     desc: '',
// //     image: ''
// //   });

// //   const [message, setMessage] = useState('');
// //   const [userId, setUserId] = useState(null);

// //   useEffect(() => {
// //     // Retrieve user ID from local storage
// //     const storedUserId = localStorage.getItem('userId');
// //     if (storedUserId) {
// //       setUserId(storedUserId);
// //     } else {
// //       setMessage('User not logged in.');
// //     }
// //   }, []);

// //   const handleChange = (e) => {
// //     const { name, value } = e.target;
// //     setFormData(prevState => ({
// //       ...prevState,
// //       [name]: value
// //     }));
// //   };

// //   const handleSubmit = async (e) => {
// //     e.preventDefault();

// //     if (!userId) {
// //       setMessage('User not logged in.');
// //       return;
// //     }

// //     try {
// //       const response = await axios.post('/api/v1/post/put-post', { ...formData, user: userId });
// //       console.log('Post created:', response.data);
// //       setMessage('Post created successfully!');
// //     } catch (error) {
// //       console.error('Error creating post:', error.response?.data?.message || error.message);
// //       setMessage('Failed to create post.');
// //     }
// //   };

// //   return (
// //     <div>
// //       <h2>Create Post</h2>
// //       {message && <p>{message}</p>}
// //       <form onSubmit={handleSubmit}>
// //         <div>
// //           <label htmlFor="title">Title:</label>
// //           <input
// //             type="text"
// //             id="title"
// //             name="title"
// //             value={formData.title}
// //             onChange={handleChange}
// //             required
// //           />
// //         </div>
// //         <div>
// //           <label htmlFor="desc">Description:</label>
// //           <textarea
// //             id="desc"
// //             name="desc"
// //             value={formData.desc}
// //             onChange={handleChange}
// //             required
// //           />
// //         </div>
// //         <div>
// //           <label htmlFor="image">Image URL:</label>
// //           <input
// //             type="text"
// //             id="image"
// //             name="image"
// //             value={formData.image}
// //             onChange={handleChange}
// //             required
// //           />
// //         </div>
// //         <button type="submit">Create Post</button>
// //       </form>
// //     </div>
// //   );
// // };

// // export default Post;





// //-------------------------------------------------------------------------------------



// import React, { useState, useEffect } from 'react';
// import axios from 'axios';

// const Post = () => {
//   const [formData, setFormData] = useState({
//     title: '',
//     desc: '',
//     image: ''
//   });

//   const [message, setMessage] = useState('');
//   const [userId, setUserId] = useState(null);
//   const [imageFile, setImageFile] = useState(null);

//   useEffect(() => {
//     // Retrieve user ID from local storage
//     const storedUserId = localStorage.getItem('userId');
//     if (storedUserId) {
//       setUserId(storedUserId);
//     } else {
//       setMessage('User not logged in.');
//     }
//   }, []);

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData(prevState => ({
//       ...prevState,
//       [name]: value
//     }));
//   };

//   const handleImageChange = (e) => {
//     const file = e.target.files[0];
//     setImageFile(file);
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     if (!userId) {
//       setMessage('User not logged in.');
//       return;
//     }

//     // Convert the image file to a base64 string
//     const getBase64 = (file) => {
//       return new Promise((resolve, reject) => {
//         const reader = new FileReader();
//         reader.readAsDataURL(file);
//         reader.onload = () => resolve(reader.result);
//         reader.onerror = (error) => reject(error);
//       });
//     };

//     try {
//       let base64Image = '';
//       if (imageFile) {
//         base64Image = await getBase64(imageFile);
//       }

//       const response = await axios.post('/api/v1/post/put-post', { ...formData, image: base64Image, user: userId });
//       console.log('Post created:', response.data);
//       setMessage('Post created successfully!');
//     } catch (error) {
//       console.error('Error creating post:', error.response?.data?.message || error.message);
//       setMessage('Failed to create post.');
//     }
//   };

//   return (
//     <div className='h-[540px] w-[810px] p-12 rounded-md ml-[470px] mt-[100px] bg-white  '>
//       {message && <p>{message}</p>}
//       <form onSubmit={handleSubmit}>
//         <div className='flex gap-14' >
//           {/* <label  htmlFor="title">Title:</label> */}
//           <input className='border p-4'
//           placeholder='Title'
//             type="text"
//             id="title"
//             name="title"
//             value={formData.title}
//             onChange={handleChange}
//             required
//           />
//         </div>
//         <div className='flex gap-flex gap-14 mt-4'>
//           {/* <label htmlFor="desc">Description:</label> */}
//           <textarea className='w-[400px] h-[100px] border p-4  '
//           placeholder='Description'
//             id="desc"
//             name="desc"
//             value={formData.desc}
//             onChange={handleChange}
//             required
//           />
//         </div>
//         {/* <div>
//           <label htmlFor="image">Image:</label>
//           <input
//             type="file"
//             id="image"
//             name="image"
//             accept="image/*"
//             onChange={handleImageChange}
//             required
//           />
//         </div> */}

//             <div class="flex items-center justify-center w-full">
//                 <label for="image" class="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-gray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600">
//                     <div class="flex flex-col items-center justify-center pt-5 pb-6">
//                         <svg class="w-8 h-8 mb-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 16">
//                             <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"/>
//                         </svg>
//                         <p class="mb-2 text-sm text-gray-500 dark:text-gray-400"><span class="font-semibold">Click to upload</span> or drag and drop</p>
//                         <p class="text-xs text-gray-500 dark:text-gray-400">SVG, PNG, JPG or GIF (MAX. 800x400px)</p>
//                     </div>
//                     <input type="file" id="image" name="image" accept="image/*" onChange={handleImageChange} required class="hidden" />
//                 </label>
//             </div>


//         <button type="submit">Create Post</button>
//       </form>
//     </div>
//   );
// };

// export default Post;


import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Post = () => {
  const [formData, setFormData] = useState({
    title: '',
    desc: ''
  });

  const [message, setMessage] = useState('');
  const [userId, setUserId] = useState(null);
  const [selectedImage, setSelectedImage] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    // Retrieve user ID from local storage
    const storedUserId = localStorage.getItem('userId');
    if (storedUserId) {
      setUserId(storedUserId);
    } else {
      setMessage('User not logged in.');
    }
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setSelectedImage(URL.createObjectURL(file));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!userId) {
      setMessage('User not logged in.');
      return;
    }

    setLoading(true);

    // Simulating a delay of 3 seconds before submission
    setTimeout(async () => {
      try {
        const response = await axios.post('/api/v1/post/put-post', { ...formData, image: selectedImage, user: userId });
        console.log('Post created:', response.data);
        // setMessage('Post created successfully!');
      } catch (error) {
        console.error('Error creating post:', error.response?.data?.message || error.message);
        setMessage('Failed to create post.');
      } finally {
        setLoading(false);
      }
    }, 3000);
  };

  return (
    <div className='h-[570px] w-[840px] p-12 rounded-md ml-[470px] mt-[100px] bg-white'>
      {message && <p>{message}</p>}
      <form onSubmit={handleSubmit}>
        <div className='flex gap-14'>
          <input
            className='border p-4 w-full focus:outline-none focus:border-blue-500'
            placeholder='Title'
            type='text'
            id='title'
            name='title'
            value={formData.title}
            onChange={handleChange}
            required
          />
        </div>
        <div className='flex gap-14 mt-4 '>
          <textarea
            className='w-full h-[100px] border p-4 focus:outline-none focus:border-blue-500'
            placeholder='Description'
            id='desc'
            name='desc'
            value={formData.desc}
            onChange={handleChange}
            required
          />
        </div>
        <div className='flex items-center justify-center w-full mt-4'>
          <label htmlFor='image' className='flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-gray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600'>
            {selectedImage ? (
              <img src={selectedImage} alt='Selected' className='max-w-full h-auto' />
            ) : (
              <>
                <div className='flex flex-col items-center justify-center pt-5 pb-6'>
                  <svg className='w-8 h-8 mb-4 text-gray-500 dark:text-gray-400' aria-hidden='true' xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 16'>
                    <path stroke='currentColor' strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2'/>
                  </svg>
                  <p className='mb-2 text-sm text-gray-500 dark:text-gray-400'><span className='font-semibold'>Click to upload</span> or drag and drop</p>
                  <p className='text-xs text-gray-500 dark:text-gray-400'>SVG, PNG, JPG or GIF (MAX. 800x400px)</p>
                </div>
              </>
            )}
            <input type='file' id='image' name='image' accept='image/*' onChange={handleImageChange} required className='hidden' />
          </label>
        </div>
        <button type='submit' className={`mt-4 bg-blue-500 w-full text-white p-2 rounded ${loading ? 'opacity-50 cursor-not-allowed' : ''}`}>
          {loading ? 'Loading...' : 'Create Post'}
        </button>
      </form>
    </div>
  );
};

export default Post;

