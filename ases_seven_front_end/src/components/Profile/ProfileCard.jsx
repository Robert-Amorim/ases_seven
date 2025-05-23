import edgar from "../../../public/edigar_alves.jpg";

export default function ProfileCard() {
    const usuario = {
    nome: "João Lopes de Araujo Neto",
    igreja: "Nova Rosa da Penha 1",
    membroDesde: "2024",
    avatar: "",
    email: "joao.lopes@email.com",
    telefone: "(27) 99999-0000"
  };
  const { nome, igreja, membroDesde, avatar, email, telefone } = usuario;

  return (
    <div className="bg-white rounded-2xl shadow p-6 flex flex-col items-center gap-2">
      {/* Avatar */}
      <img
       src={edgar}
        alt={nome}
        className="w-20 h-20 rounded-full object-cover shadow mb-2"
      />
      {/* Nome */}
      <h2 className="text-lg font-bold text-blue-900">{nome}</h2>
      {/* Dados */}
      <div className="mt-1 mb-2 text-center">
        <p className="text-sm text-slate-700">Membro desde <span className="font-medium">{membroDesde}</span></p>
        <p className="text-sm"><span className="font-semibold text-blue-800">Igreja:</span> <span className="text-slate-800 font-medium">{igreja}</span></p>
        <p className="text-sm text-slate-600"><span className="font-semibold">Email:</span> {email}</p>
        <p className="text-sm text-slate-600"><span className="font-semibold">Telefone:</span> {telefone}</p>
      </div>
      {/* Botão */}
      <button className="mt-2 px-4 py-1 bg-blue-700 hover:bg-blue-800 text-white rounded-md shadow text-sm font-semibold transition-colors">
        Editar Perfil
      </button>
    </div>
  );
}
