import { BsGrid, BsCart2, BsCartDash } from 'react-icons/bs';
import {
  RiWallet3Line,
  RiArrowDownSLine,
  RiRestaurant2Fill,
} from 'react-icons/ri';
import { AiOutlineBarChart, AiOutlineUser } from 'react-icons/ai';
import { HiOutlineLogout, HiOutlineMicrophone } from 'react-icons/hi';
import { IoNotificationsOutline } from 'react-icons/io5';
import { TbBottle, TbMessageCircle } from 'react-icons/tb';
import { FiSettings, FiSearch, FiArrowUpRight } from 'react-icons/fi';
import { BiCalendar } from 'react-icons/bi';
import perfil1 from '../assets/perfil1.jpg';
import apple from '../assets/apple.svg';
import netflix from '../assets/netflix.svg';
import spotify from '../assets/spotify.svg';
import tinder from '../assets/tinder.svg';

export const mainLinks = [
  { id: 1, icon: <BsGrid />, description: 'Dashboard' },
  { id: 2, icon: <RiWallet3Line />, description: 'Wallets' },
  { id: 3, icon: <AiOutlineBarChart />, description: 'Statistic' },
  { id: 4, icon: <BsCart2 />, description: 'Sales' },
  { id: 5, icon: <HiOutlineMicrophone />, description: 'Invoices' },
  { id: 6, icon: <IoNotificationsOutline />, description: 'Notifications' },
  { id: 7, icon: <TbMessageCircle />, description: 'Messages' },
];

export const preferenceLinks = [
  { id: 1, icon: <AiOutlineUser />, description: 'My Friends' },
  { id: 2, icon: <FiSettings />, description: 'Setting' },
];

export const brands = [
  {
    id: 1,
    icon: apple,
    description: 'Apple Store',
    hour: '10:57 AM',
    value: '-145 $',
  },
  {
    id: 2,
    icon: netflix,
    description: 'Netflix',
    hour: '10:37 AM',
    value: '-15 $',
  },
  {
    id: 3,
    icon: tinder,
    description: 'Tinder',
    hour: '08:37 AM',
    value: '-50 $',
  },
  {
    id: 4,
    icon: spotify,
    description: 'Spotify',
    hour: '08:30 AM',
    value: '-25 $',
  },
];

export const logout = {
  icon: <HiOutlineLogout />,
  description: 'Logout',
};

export const search = {
  icon: <FiSearch />,
};

export const calendar = { icon: <BiCalendar /> };

export const arrow = { icon: <RiArrowDownSLine /> };

export const person = perfil1;

export const cards = [
  {
    id: 1,
    icon: (
      <span className="bg-[#2884FF] w-8 h-8 rounded-[50%] flex justify-center items-center">
        <FiArrowUpRight />
      </span>
    ),
    description: 'Revenue',
    stateOfPrice: 'decremented',
    price: '$1.037',
    valueOfState: '10%',
  },
  {
    id: 2,
    icon: (
      <span className="bg-[#70CF98] w-8 h-8 rounded-[50%] flex justify-center items-center">
        <BsCartDash />
      </span>
    ),
    description: 'Orders',
    stateOfPrice: 'incremented',
    price: '806',
    valueOfState: '20%',
  },
  {
    id: 3,
    icon: (
      <span className="bg-[#F9C057] w-8 h-8 rounded-[50%] flex justify-center items-center">
        <TbBottle />
      </span>
    ),
    description: 'Take away',
    stateOfPrice: 'decremented',
    price: '315',
    valueOfState: '5%',
  },
  {
    id: 4,
    icon: (
      <span className="bg-[#FC626F] w-8 h-8 rounded-[50%] flex justify-center items-center">
        <RiRestaurant2Fill />
      </span>
    ),
    description: 'Dine in',
    stateOfPrice: 'incremented',
    price: '610',
    valueOfState: '10%',
  },
];
