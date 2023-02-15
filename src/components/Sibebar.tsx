import { useState } from 'react';
import { RiMenu3Fill } from 'react-icons/ri';
import { logout } from '../constants';
import { NavList } from '.';

const Sibebar = () => {
  const [showMenu, setShowMenu] = useState<boolean>(false);

  return (
    <>
      <nav
        className={`fixed ${showMenu ? 'left-0' : '-left-full'} lg:left-0 z-10 
         bg-white h-full w-56 p-2 pr-4 py-5 text-[#636E84] flex flex-col justify-start items-center transition-all overflow-y-auto border-r-[1px] border-gray-100 lg:border-transparent`}
      >
        <h1 className=" mb-4 text-xl md:text-2xl font-bold uppercase tracking-[4px] text-center text-[#090f31]">
          Logo
        </h1>
        <div className="flex flex-col items-start justify-between flex-1">
          <NavList />
          <div className="flex flex-col mt-4 w-full">
            <div className="group flex items-center justify-start gap-2 pl-8 pr-4 cursor-pointer hover:bg-purple-50 rounded-sm transition-colors">
              <div className="text-base md:text-xl group-hover:text-[#5A66FF]">
                {logout.icon}
              </div>
              <span className="text-base md:text-lg font-medium group-hover:text-[#5A66FF] flex-1">
                {logout.description}
              </span>
            </div>
          </div>
        </div>
      </nav>

      <button
        onClick={() => setShowMenu((prev) => !prev)}
        className="lg:hidden fixed right-4 bottom-4 z-10 bg-[#535EF6] w-[40px] h-[40px] rounded-full
       flex justify-center items-center"
      >
        <RiMenu3Fill className="text-white font-semibold text-base" />
      </button>
    </>
  );
};

export default Sibebar;
