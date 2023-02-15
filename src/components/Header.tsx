import { search, person, arrow } from '../constants';

const Header = () => {
  return (
    <header className="bg-white p-4 lg:pl-60 flex flex-wrap justify-between items-center gap-2">
      <h2 className="text-2xl md:text-3xl font-bold min-w-[230px] flex-[1.2]">
        Analytics Overview
      </h2>
      <div className="flex items-center justify-between min-w-[280px] flex-1">
        <div className="relative flex justify-between items-center flex-1">
          <input
            type="text"
            placeholder="Search or type command"
            className="bg-[#F8F9FE] text-sm md:text-base outline-none rounded-full py-1 md:py-2 pl-8 flex-1 max-w-[280px]"
          />
          <div className="absolute top-1/2 -translate-y-1/2 left-2 text-gray-500 text-base md:text-xl">
            {search.icon}
          </div>
        </div>
        <div className="ml-2 flex justify-center items-center">
          <img
            src={person}
            alt="perfil1"
            className="w-8 h-8 md:w-10 md:h-10 rounded-full "
          />
          <div className="text-base md:text-xl">{arrow.icon}</div>
        </div>
      </div>
    </header>
  );
};

export default Header;
