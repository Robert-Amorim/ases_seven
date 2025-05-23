
import { useParams } from "react-router-dom";
import { CarrosselFotos } from "../Carrossel";
import { BookOpen, GraduationCap, Mic } from "lucide-react";

export default function DetailsPage() {
  const { nome } = useParams();

  return (
    <div className="min-h-screen bg-slate-100 text-slate-800">
      <main className="p-6 space-y-6 max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold mb-6">{nome}</h1>

        <section className="bg-white rounded-2xl shadow p-6">
          <p className="text-lg font-semibold text-center text-blue-800">
            “E este evangelho do reino será pregado em todo o mundo, em
            testemunho a todas as nações, e então virá o fim.” (Mateus 24:14)
          </p>
          <div className="mt-4 flex flex-wrap gap-4 justify-center">
            <button className="flex items-center gap-2 bg-blue-800 text-white font-semibold px-6 py-1 rounded-full shadow-md hover:bg-blue-600 transition-all duration-300">
              <BookOpen size={18} />
              Treinamentos
            </button>

            <button className="flex items-center gap-2 bg-yellow-600 text-white font-semibold px-6 py-1 rounded-full shadow-md hover:bg-yellow-500 transition-all duration-300">
              <GraduationCap size={18} />
              Cursos
            </button>

            <button className="flex items-center gap-2 bg-blue-800 text-white font-semibold px-6 py-1 rounded-full shadow-md hover:bg-blue-600 transition-all duration-300">
              <Mic size={18} />
              Palestras
            </button>
          </div>
        </section>

        <section className="bg-white rounded-2xl shadow p-6">
          <h2 className="text-xl font-bold text-red-700 mb-4">
            Escolhidos para Salvar
          </h2>
          <CarrosselFotos />
        </section>

                <section className="bg-white rounded-2xl shadow p-6">
          <h2 className="text-xl font-semibold text-blue-800 mb-4">
            📖 Estudos Bíblicos
          </h2>
          <div className="grid md:grid-cols-2 gap-4 mb-4">
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">
                Instrutor:
              </label>
              <input
                type="text"
                placeholder="Digite seu nome"
                className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">
                Quantidade de pessoas estudando:
              </label>
              <input
                type="number"
                placeholder="0"
                className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1">
              Nomes das pessoas:
            </label>
            <textarea
              rows="4"
              placeholder="Digite os nomes separados por vírgula ou linha"
              className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
            ></textarea>
          </div>
        </section>

        <section className="bg-white rounded-2xl shadow p-6">
          <h2 className="text-xl font-semibold text-blue-800 mb-2">
            📂 Materiais e Planejamento
          </h2>
          <ul className="list-disc list-inside text-sm text-slate-700 space-y-1">
            <li>
              <a href="#" className="text-blue-700 hover:underline">
                Plano de Evangelismo Distrital 2025 (PDF)
              </a>
            </li>
            <li>
              <a href="#" className="text-blue-700 hover:underline">
                Roteiro de Semana Evangelística
              </a>
            </li>
            <li>
              <a href="#" className="text-blue-700 hover:underline">
                Relatório de Estudos Bíblicos
              </a>
            </li>
          </ul>
        </section>
      </main>
    </div>
  );
}
