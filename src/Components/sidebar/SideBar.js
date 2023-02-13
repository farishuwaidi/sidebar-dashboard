import React from 'react';
import logo from '../navbar/logo.svg';
import kontrol from './control.png';
import { useState } from 'react';
import { MdDashboard } from 'react-icons/md';
import { BsFillBagPlusFill } from 'react-icons/bs';
import { FaUserAlt } from 'react-icons/fa';
import { AiFillSetting } from 'react-icons/ai';
import { TbArrowsLeftRight } from 'react-icons/tb';
import { Link } from 'react-router-dom';

const SideBar = () => {
  const [open, setOpen] = useState(true);
  const menus = [
    { name: 'Dashboard', link: '/dashboard', icon: MdDashboard },
    { name: 'Produk', link: '/produk', icon: BsFillBagPlusFill },
    { name: 'transaksi', link: '/transaksi', icon: TbArrowsLeftRight },
    { name: 'Admin', link: '/user', icon: FaUserAlt },
    { name: 'Setting', link: '/setting', icon: AiFillSetting },
  ];

  return (
    <div className={`${!open ? 'w-16' : 'w-72'} duration-300 h-screen bg-dark p-5 pt-8 text-white relative`}>
      <img src={kontrol} alt="control" className={`absolute cursor-pointer rounded-full -right-3 top-9 w-7 border-2 border-dark ${!open && 'rotate-180 duration-500'}`} onClick={() => setOpen(!open)} />
      <div className="flex gap-x-4 items-center">
        <img src={logo} alt="logo" className={'w-5 mr-2 cursor-pointer duration-500'} />
        <h3 className={`text-white origin-left font-medium text-xl duration-300 ${!open && 'scale-0'}`}>Kasier</h3>
      </div>
      <div className="mt-10 flex flex-col gap-4 relative text-gray-300">
        {menus.map((menu, index) => (
          <Link key={index} to={menu?.link} className="flex items-center">
            <div>{React.createElement(menu?.icon, { size: '21' })}</div>
            <h2 className={`${!open && 'scale-0'} ml-2 text-sm`}>{menu?.name}</h2>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default SideBar;
