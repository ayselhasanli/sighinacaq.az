import { Route, Routes, useLocation } from "react-router-dom"
import HomePage from "./pages/Home/HomePage"
import MainLayout from "./layouts/MainLayout"
import AboutPage from "./pages/About/AboutPage";
import ServicesPage from "./pages/Services/ServicesPage";
import BlogsPage from "./pages/Blogs/BlogsPage";
import ProjectsPage from "./pages/Projects/ProjectsPage";
import ContactPage from "./pages/Contact/ContactPage";
import ServiceDetail from "./pages/ServiceDetail/ServiceDetail";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import ProjectDetailPage from "./pages/ProjectDetail/ProjectDetailPage";
import BlogDetail from "./pages/BlogDetail/BlogDetail";

function App() {
  const location = useLocation();

  return (
    <TransitionGroup>
      <CSSTransition key={location.key} classNames="fade" timeout={500}>
        <Routes location={location}>
          <Route path="/" element={<MainLayout />}>
            <Route index element={<HomePage />} />
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/blogs" element={<BlogsPage />} />
            <Route path="/projects" element={<ProjectsPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/services/:id" element={<ServiceDetail />} />
            <Route path="/projects/:id" element={<ProjectDetailPage />} />
            <Route path="/blogDetail" element={<BlogDetail />} />
          </Route>
        </Routes>
      </CSSTransition>
    </TransitionGroup>
  );
}

export default App
