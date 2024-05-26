// import React from 'react';
// import { Routes, Route } from 'react-router-dom';
// import Signup from './components/Signup';
// import Home from './components/Home';
// import Login from './components/Login';
// import Post from './components/Post';
// import Show from './components/Show';
// import Showid from './components/Showid';
// import Navbar from './components/Navbar';
// import Sidebar from './components/Sidebar';

// function App() {
//   return (
//     <div className='bg-[#f2f2f2] h-full w-full flex'>
//       <Signup/>
//       <Navbar/>
//       <Sidebar/>
//         <Routes>
//           <Route path="/" element={<Navbar />} />
//           <Route path="/" element={<Sidebar />} />
//           <Route path="/login" element={<Login />} />
//           <Route path="/post" element={<Post />} />
//           <Route path="/show" element={<Show />} />
//           <Route path="/showid" element={<Showid />} />
//           <Route path="/signup" element={<Signup />} />

//         </Routes>
//     </div>
//   );
// }

// export default App;


import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Signup from './components/Signup';
import Home from './components/Home';
import Login from './components/Login';
import Post from './components/Post';
import Show from './components/Show';
import Showid from './components/Showid';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import Profile from './components/Profile';

const HomeLayout = ({ children }) => (
  <>
    <Navbar  />
    <Sidebar />
    <div className="content bg-[#f2f2f2]">
      {children}
    </div>
  </>
);

function App() {
  return (
    <div className='bg-[#f2f2f2] h-full w-full flex'>
      <Routes>
        <Route path="/" element={<Signup />} />
        <Route path="/home" element={<HomeLayout><Home /></HomeLayout>} />
        <Route path="/login" element={<Login />} />
        <Route path="/post" element={<HomeLayout><Post /></HomeLayout>} />
        <Route path="/show" element={<HomeLayout><Show /></HomeLayout>} />
        <Route path="/showid" element={<HomeLayout><Showid /></HomeLayout>} />
        <Route path="/profile" element={<HomeLayout><Profile /></HomeLayout>} />
        <Route path="/signup" element={<Signup/>} />
      </Routes>
    </div>
  );
}

export default App;
