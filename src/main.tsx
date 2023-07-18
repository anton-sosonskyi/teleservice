import ReactDOM from "react-dom/client";
import { HashRouter as Router } from "react-router-dom";
import App from "./App";
import "./index.scss";
import { ThemeContextProvider } from "./features/theme/ThemeContext";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <Router>
    <ThemeContextProvider>
      <App />
    </ThemeContextProvider>
  </Router>
);
