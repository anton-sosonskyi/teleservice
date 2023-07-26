import { Routes, Route, Navigate, useLocation } from "react-router-dom";
import { PageNotFound } from "./pages/PageNotFound";
import { LoginPage } from "./features/login/pages/LoginPage";
import { HomePage } from "./features/home/pages/HomePage";
import { DevicesPage } from "./features/devices/pages/DevicesPage";
import { useContext } from "react";
import { DeviceDetails } from "./features/devices/pages/DeviceDetails";
import { Menu } from "./features/menu/components/Menu";
import { ThemeContext } from "./features/theme/ThemeContext";
import { SupportPage } from "./features/support/pages/SupportPage";
import { TicketPage } from "./features/support/pages/TicketPage";
import { useStore } from "./store/store";
import { NewTicketPage } from "./features/support/pages/NewTicketPage";
import { TicketDetailsPage } from "./features/support/pages/TicketDetailsPage";

function App() {
  const { currentColor } = useContext(ThemeContext);
  const { pathname } = useLocation();
  const isAuth = useStore((state) => state.isAuth);
  const isMenuVisible = isAuth || pathname !== "/login";

  return (
    <div
      className={`w-full h-screen relative flex flex-col justify-center bg-[${currentColor}] overflow-y-scroll`}
    >
      <main className={`w-full h-full max-sm:px-[32px] grow`}>
        <Routes>
          <Route path="/" element={<Navigate to="/login" replace />} />
          <Route path="home" element={<HomePage />} />
          <Route path="device">
            <Route index element={<DevicesPage />} />
            <Route path=":deviceId" element={<DeviceDetails />} />
          </Route>
          <Route path="support">
            <Route index element={<SupportPage />} />

            <Route path=":ticketTopic">
              <Route index element={<TicketPage />} />
              <Route path=":newTicket" element={<NewTicketPage />} />
            </Route>

            <Route path="ticket">
              <Route path=":ticketId" element={<TicketDetailsPage />} />
            </Route>
          </Route>
          <Route path="login" element={<LoginPage />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </main>

      {isMenuVisible && <Menu />}
    </div>
  );
}

export default App;
