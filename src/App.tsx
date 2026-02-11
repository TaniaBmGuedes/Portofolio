import "./App.css";

import { Providers } from "../provider";
import { Route, Routes } from "react-router-dom";
import { Layout } from './pages/Layout';
//TODO: NAVARBAR;SCROLL and THEME
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
