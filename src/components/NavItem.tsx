interface NavItemProps {
  icon: JSX.Element;
  description: string;
}

const NavItem = ({ icon, description }: NavItemProps) => {
  return (
    <li className="group flex items-center justify-start gap-2 pl-8 pr-4 cursor-pointer hover:bg-purple-50 rounded-sm transition-colors">
      <div className="text-base md:text-xl group-hover:text-[#5A66FF]">
        {icon}
      </div>
      <span className="text-base md:text-lg font-medium group-hover:text-[#5A66FF] flex-1">
        {description}
      </span>
    </li>
  );
};

export default NavItem;
