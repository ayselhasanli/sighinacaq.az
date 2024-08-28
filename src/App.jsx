import { Route, Routes } from "react-router-dom"
import HomePage from "./pages/Home/HomePage"
import MainLayout from "./layouts/MainLayout"
import AboutPage from "./pages/About/AboutPage";

function App() {

  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<HomePage/>}/>
        <Route path="/about" element={<AboutPage/>}/>
      </Route>
    </Routes>
  );
}

export default App
