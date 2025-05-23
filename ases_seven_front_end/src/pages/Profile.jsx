import ProfileCard from "../components/Profile/ProfileCard";

export default function Profile() {
  // Esses dados poderiam vir do contexto/auth futuramente
  const usuario = {
    nome: "João Lopes de Araujo Neto",
    igreja: "Nova Rosa da Penha 1",
    membroDesde: "2024",
    avatar: "",
    email: "joao.lopes@email.com",
    telefone: "(27) 99999-0000"
  };

  return (
    <div className="min-h-screen bg-slate-100 flex flex-col items-center py-8">
      <h1 className="text-2xl font-bold text-blue-900 mb-4">Perfil do Usuário</h1>
      <ProfileCard {...usuario} />
      {/* Se quiser adicionar outros cards/blocos, pode colocar abaixo */}
    </div>
  );
}
