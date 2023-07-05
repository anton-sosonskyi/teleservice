import { Routes, Route, Navigate } from "react-router-dom";
import { PageNotFound } from "./pages/PageNotFound";
import { LoginPage } from "./pages/LoginPage";
import { HomePage } from "./pages/HomePage";
import { MenuMobile } from "./components/MenuMobile";
import { DevicesPage } from "./pages/DevicesPage";
import { useState } from "react";

function App() {
  const [isAuth, setIsAuth] = useState(false);
  return (
    <div className="w-full h-screen bg-[#fff]">
      <main className="w-full h-full max-sm:px-[32px]">
        <Routes>
          <Route path="/" element={<Navigate to="/login" replace />} />
          <Route path="home" element={<HomePage />} />
          <Route path="device" element={<DevicesPage />} />
          <Route path="login" element={<LoginPage setIsAuth={setIsAuth} />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </main>

      {isAuth && <MenuMobile />}
    </div>
  );
}

export default App;
