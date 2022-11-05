import "./App.css";
import SideBar from "./components/Sidebar/SideBar";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import ProductManager from "./components/ManagerProduct/Product";
import ClientManager from "./components/ManagerClient/ManagerClient";
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
          <Route path="/qltaikhoan" element={<ClientManager />} />
          <Route path="/dathang" element={<DatHang />} />
          <Route path="*" element={<h1>Rỗng</h1>} />
        </Routes>
      </SideBar>
    </Router>
  );
}

export default App;
