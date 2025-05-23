
import { useState } from "react";
import { Link } from "react-router-dom";
import DetailsCard from "../components/departments/DetailsCard";
import SearchBar from "../components/shared/SearchBar";

export default function Departments() {
  const [busca, setBusca] = useState("");

  const departamentos = [
    { nome: "Aventureiros" },
    { nome: "Ancionato" },
    { nome: "Capelania" },
    { nome: "Comunicação" },
    { nome: "Desbravadores" },
    { nome: "Diaconato" },
    { nome: "Educação" },
    { nome: "Escola Sabatina" },
    { nome: "Evangelismo", pastor: "Pr. Alex Fonseca" },
    { nome: "Família" },
    { nome: "Ministério da Criança" },
    { nome: "Ministério da Mulher" },
    { nome: "Ministério de Mordomia" },
    { nome: "Ministério Jovem" },
    { nome: "Ministério Pessoal" },
    { nome: "Música" },
    { nome: "Publicações" },
    { nome: "Saúde" },
    { nome: "Secretaria" },
    { nome: "Tesouraria" },
    { nome: "Universitários" },
    { nome: "Liberdade Religiosa" }
  ];

  const departamentosFiltrados = departamentos.filter((dep) =>
    dep.nome.toLowerCase().includes(busca.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-slate-100">
      <div className="p-6">
        <h2 className="text-2xl font-bold mb-6">Departamentos da Igreja</h2>
        <div className="mb-6">
          <SearchBar value={busca} onChange={e => setBusca(e.target.value)} placeholder="Buscar departamento..." />
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {departamentosFiltrados.map((dep) => (
            <Link
              key={dep.nome}
              to={`/departamento/${encodeURIComponent(dep.nome)}`}
              className="block"
            >
              <DetailsCard nome={dep.nome} pastor={dep.pastor} />
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
