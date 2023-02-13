import React from 'react';
import SideBar from '../sidebar/SideBar';

const ListTransaksi = () => {
  return (
    <div className="flex">
      <SideBar />
      <div className="p-8">
        <h1 className="text-2xl font-bold">Daftar transaksi</h1>
      </div>
    </div>
  );
};

export default ListTransaksi;
