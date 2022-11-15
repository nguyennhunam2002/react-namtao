import "./App.css";
import SideBar from "./components/Sidebar/SideBar";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import ProductManager from "./components/ManagerProduct/Product";
import ClientManager from "./components/ManagerClient/ManagerClient";
import DatHang from "./pages/DatHang";
import ThongKe from "./components/ThongKe/ThongKe";
import UserDetail from "./components/ManagerClient/Detail";
import UserEdit from "./components/ManagerClient/Edit"
import PrDetail from "./components/ManagerProduct/Detail";
import PrEdit from "./components/ManagerProduct/Edit";
import PrCreate from "./components/ManagerProduct/Create"
function App() {
  return (
    <Router>
      <SideBar>
        <Routes>
          <Route path="/" element={<Home />}  />
          <Route path="/QLSanPham" element={<ProductManager />} />
          <Route path='/QLSanPham/create' element={<PrCreate />}></Route>
          <Route path='/QLSanPham/detail/:pid' element={<PrDetail />}></Route>
          <Route path='/QLSanPham/edit/:pid' element={<PrEdit />}></Route>
          <Route path="/thongke" element={<ThongKe />} />
          <Route path="/qltaikhoan" element={<ClientManager />} />
          <Route path="/dathang" element={<DatHang />} />
          <Route path='/qltaikhoan/detail/:uid' element={<UserDetail />}></Route>
          <Route path='/qltaikhoan/edit/:uid' element={<UserEdit />}></Route>
        </Routes>
      </SideBar>
    </Router>
  );
}

export default App;
