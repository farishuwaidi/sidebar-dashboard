import Home from './Components/home/Home';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ProdukList from './Components/produk/ProdukList';
import AddProduk from './Components/produk/AddProduk';
import EditProduk from './Components/produk/EditProduk';
import ListTransaksi from './Components/transaksi/ListTransaksi';
import AddTransaksi from './Components/transaksi/Addtransaksi';
import EditTransaksi from './Components/transaksi/EditTransaksi';
import Dashboard from './Components/dashboard/Dashboard';
import ListUser from './Components/user/ListUser';
import AddUser from './Components/user/AddUser';
import EditUser from './Components/user/EditUser';
import Setting from './Components/pengaturan/Setting';
import Login from './Components/login/Login';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={'/'} element={<Home />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path={'/produk'} element={<ProdukList />} />
        <Route path={'/addproduk'} element={<AddProduk />} />
        <Route path={'/editproduk'} element={<EditProduk />} />
        <Route path={'/transaksi'} element={<ListTransaksi />} />
        <Route path={'/addtransaksi'} element={<AddTransaksi />} />
        <Route path={'/edittransaksi'} element={<EditTransaksi />} />
        <Route path={'/user'} element={<ListUser />} />
        <Route path={'/adduser'} element={<AddUser />} />
        <Route path={'/edituser'} element={<EditUser />} />
        <Route path={'/setting'} element={<Setting />} />
        <Route path={'/login'} element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
