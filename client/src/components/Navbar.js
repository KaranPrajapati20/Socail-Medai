import React, { useState, useEffect } from 'react';

const Navbar = () => {
  const [userName, setUserName] = useState(localStorage.getItem('userName'));

  useEffect(() => {
    const timer = setTimeout(() => {
      setUserName(localStorage.getItem('userName'));
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="">
      <div>
        <div className="w-full flex fixed justify-center z-20 mt-2">
          <div className="bg-white w-[70%] flex justify-between rounded-tl-xl rounded-tr-xl p-4">
            <div className="relative flex items-center w-full text-[#D92525] font-bold text-2xl">
              <div>
                <span>Social</span>
                <span className="poller-one text-4xl absolute left-[4.5rem]">X</span>
              </div>
              <span className="h-1 bg-[#D92525] w-12 absolute bottom-0 left-0 mt-2"></span>
            </div>
            <div className="bg-[#F2F2F2] font-semibold text-slate-900 min-w-[200px] text-opacity-70 rounded p-3 text-left">
              <h1>{userName}</h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
