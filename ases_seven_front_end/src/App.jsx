
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Header, Footer } from "./components/layout";
import { Home, Departments, MyChurch, Profile } from "./pages/";
import DetailsPage from "./components/departments/DetailsPage";
import AdminCursosPainel from "./components/courses/AdminCursosPainel";

export default function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/departamentos" element={<Departments />} />
        <Route path="/minha-igreja" element={<MyChurch />} />
        <Route path="/perfil" element={<Profile />} />
        <Route path="/departamento/:nome" element={<DetailsPage />} />
        <Route path="/cursos" element={<AdminCursosPainel />} />
      </Routes>
      <Footer />
    </Router>
  );
}
