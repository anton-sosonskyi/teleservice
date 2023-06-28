import { Navigate, Route, Routes } from "react-router-dom";
import { PageNotFound } from "./pages/PageNotFound";

function App() {
  return (
    <div className="App">
      <h1 className="text-3xl font-bold underline">Some text!</h1>

      <main>
        <Routes>
          <Route path="/" element={<></>} />
          <Route path="home" element={<Navigate to="/" replace />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
