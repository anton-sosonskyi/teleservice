import { Routes, Route, Navigate } from "react-router-dom";
import { PageNotFound } from "./pages/PageNotFound";
import { LoginPage } from "./pages/LoginPage";
import { HomePage } from "./pages/HomePage";
import { Menu } from "./components/MenuMobile";
import { DevicesPage } from "./pages/DevicesPage";
import { useState } from "react";
import { DeviceDetails } from "./pages/DeviceDetails";

function App() {
  const [isAuth, setIsAuth] = useState(false);
  return (
    <div className="w-full h-screen bg-[#fff]">
      <main className="w-full h-[calc(100%-72px)] max-sm:px-[32px]">
        <Routes>
          <Route path="/" element={<Navigate to="/login" replace />} />
          <Route path="home" element={<HomePage />} />
          <Route path="device">
            <Route index element={<DevicesPage />} />
            <Route path=":deviceId" element={<DeviceDetails />} />
          </Route>
          <Route path="login" element={<LoginPage setIsAuth={setIsAuth} />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </main>

      {isAuth && <Menu />}
    </div>
  );
}

export default App;
