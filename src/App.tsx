import "./App.css";

import { Providers } from "../provider";
import { Route, Routes } from "react-router-dom";
import { Layout } from "./pages/Layout";

function App() {
  return (
    <Providers>
      <Routes>
        <Route path="/" element={<Layout />} />
      </Routes>
    </Providers>
  );
}

export default App;
