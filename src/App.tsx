import { Routes, Route, Navigate } from "react-router-dom";
import { PageNotFound } from "./pages/PageNotFound";
import { LoginPage } from "./pages/LoginPage";
import { HomePage } from "./pages/HomePage";
import { MenuMobile } from "./components/MenuMobile";

function App() {
  
  return (
    <div className="w-full h-screen">
      <main className="w-full h-full">
        <Routes>
          <Route path="/" element={<Navigate to="/login" replace />} />
          <Route path="home" element={<HomePage /> } />
          <Route path="login" element={<LoginPage />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </main>
      <MenuMobile />
    </div>
  );
}

export default App;
