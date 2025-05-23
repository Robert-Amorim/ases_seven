import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="h-full bg-blue-900 text-white py-4 px-6 shadow-md flex justify-between items-center sticky top-0 z-50">
      <div className="flex items-start">
      <img className="w-15 h-16" src="../../public/logo_sem_fundo_1.png" alt="ASES7" />
      {/* <h1 className="text-2xl font-bold">ASES7</h1> */}
      </div>
      <nav className="space-x-4 hidden md:block">
        <Link to="/" className="text-white no-underline hover:underline uppercase">Início</Link>
        <Link to="/departamentos" className="text-white no-underline hover:underline uppercase">Departamentos</Link>
        <Link to="/minha-igreja" className="text-white no-underline hover:underline uppercase">Minha Igreja</Link>
        <Link to="/cursos" className="text-white no-underline hover:underline uppercase">Cursos</Link>
        <a href="/perfil" className="text-white no-underline hover:underline uppercase">Perfil</a>
      </nav>
    </header>
  );
}
