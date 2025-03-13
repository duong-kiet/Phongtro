import MainLayout from "./components/layouts/MainLayout";
import CanHoChungCuPage from "./pages/CanHoChungCuPage";
import CanHoDichVuPage from "./pages/CanHoDichVuPage";
import CanHoMiniPage from "./pages/CanHoMiniPage";
import NhaNguyenCanPage from "./pages/NhaNguyenCanPage";
import OGhepPage from "./pages/OGhepPage";
import PhongTroPage from "./pages/PhongTroPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<PhongTroPage />} />
          <Route path="nha-cho-thue" element={<NhaNguyenCanPage />} />
          <Route path="cho-thue-can-ho" element={<CanHoChungCuPage />} />
          <Route
            path="cho-thue-can-ho-chung-cu-mini"
            element={<CanHoMiniPage />}
          />
          <Route path="cho-thue-can-ho-dich-vu" element={<CanHoDichVuPage />} />
          <Route path="tim-nguoi-o-ghep" element={<OGhepPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
