import "./App.css";
import SideBar from "./components/Sidebar/SideBar";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import ProductManager from "./components/ManagerProduct/Product";
import QLTaiKhoan from "./pages/QLTaiKhoan";
import TTTaiKhoan from "./pages/ThongTinTaiKhoan";
import BaoMatTT from "./pages/BaoMatTT";
import ThanhToan from "./pages/ThanhToan";
import DatHang from "./pages/DatHang";
import ThongKe from "./components/ThongKe/ThongKe";
function App() {
  return (
    <Router>
      <SideBar>
        <Routes>
          <Route path="/" element={<Home />}  />
          <Route path="/QLSanPham" element={<ProductManager />} />
          <Route path="/thongke" element={<ThongKe />} />
          <Route path="/qltaikhoan" element={<QLTaiKhoan />} />
          <Route path="/qltaikhoan/thongtin" element={<TTTaiKhoan />} />
          <Route path="/qltaikhoan/baomat" element={<BaoMatTT />} />
          <Route path="/qltaikhoan/thanhtoan" element={<ThanhToan />} />
          <Route path="/dathang" element={<DatHang />} />
          <Route path="*" element={<h1>Rỗng</h1>} />
        </Routes>
      </SideBar>
    </Router>
  );
}

export default App;
