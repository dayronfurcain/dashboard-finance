import { mainLinks, preferenceLinks } from '../constants';
import { NavItem } from './';

const NavList = () => {
  return (
    <ul className="flex flex-col gap-4 w-full">
      {mainLinks.map(({ id, icon, description }) => (
        <NavItem key={id} icon={icon} description={description} />
      ))}
      <h2 className="text-sm md:text-base uppercase pl-8 my-2">Preferences</h2>
      {preferenceLinks.map(({ id, icon, description }) => (
        <NavItem key={id} icon={icon} description={description} />
      ))}
    </ul>
  );
};

export default NavList;
