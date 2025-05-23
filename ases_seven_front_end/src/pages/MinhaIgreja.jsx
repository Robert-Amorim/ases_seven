
import {
  TalkPastor,
  ChurchCard,
  DistrictHighlights,
  SpacePastors,
  DistrictGoals,
} from "../components/mychurch";

export default function MyChurch() {
  const igrejaDoUsuario = "Igreja de Nova de Nova Rosa da Penha I";

  const igrejas = [
    {
      nome: "Igreja Nova Esperança",
      endereco: "Rua das Oliveiras, 123",
      lider: "João Pereira",
      status: "Ativa",
    },
    {
      nome: "Igreja de Nova Rosa da Penha I",
      endereco: "Av. Central, 456",
      lider: "Maria Souza",
      status: "Ativa",
    },
    {
      nome: "Igreja de Nova de Nova de Nova Rosa da Penha II",
      endereco: "Rua da Paz, 789",
      lider: "Carlos Lima",
      status: "Ativa",
    },
    {
      nome: "Igreja Porto Belo",
      endereco: "Rua Mar Azul, 321",
      lider: "Ana Martins",
      status: "Em reforma",
    },
    {
      nome: "Igreja Porto de Cariacica",
      endereco: "Rua do Porto, 222",
      lider: "Fábio Nunes",
      status: "Ativa",
    },
    {
      nome: "Igreja Vila Merlo",
      endereco: "Rua das Flores, 999",
      lider: "Fernanda Dias",
      status: "Ativa",
    },
    {
      nome: "Igreja Vila Progresso",
      endereco: "Av. Progresso, 100",
      lider: "Lucas Rocha",
      status: "Ativa",
    },
  ];

  const igrejasFiltradas = igrejas.sort((a, b) => {
    if (a.nome === igrejaDoUsuario) return -1;
    if (b.nome === igrejaDoUsuario) return 1;
    return 0;
  });

  return (
    <div className="min-h-screen bg-slate-100">
      <div className="p-6 space-y-6">
        <h1 className="text-2xl font-bold mb-2">Distrito de Porto Belo</h1>
        <p className="text-lg text-blue-800 font-semibold">
          Pastor Distrital: Pr. Edigar Alves
        </p>
        <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-4">
          <div className="w-full bg-gradient-to-r from-yellow-100 to-yellow-50 border-l-4 border-yellow-500 rounded-xl shadow p-6 md:w-3/4">
            <DistrictHighlights />
            <SpacePastors />
          </div>
          <div className="md:w-1/4 space-y-4">
            <DistrictGoals />
            <TalkPastor />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {igrejasFiltradas.map((igreja) => (
            <ChurchCard
              key={igreja.nome}
              nome={igreja.nome}
              endereco={igreja.endereco}
              status={igreja.status}
              isUserChurch={igreja.nome === igrejaDoUsuario}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
