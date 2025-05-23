export default function TabsSelector({ abaAtiva, setAbaAtiva }) {
  const tabs = [
    { id: "curso", label: "📘 Cursos" },
    { id: "treinamento", label: "📚 Treinamentos" },
    { id: "palestra", label: "🎤 Palestras" }
  ];

  return (
    <div className="flex flex-wrap gap-4 mb-6 items-center">
      {tabs.map(tab => (
        <button
          key={tab.id}
          onClick={() => setAbaAtiva(tab.id)}
          className={`px-4 py-2 rounded-full text-sm font-semibold ${
            abaAtiva === tab.id ? "bg-blue-700 text-white" : "bg-white border text-blue-700"
          }`}
        >
          {tab.label}
        </button>
      ))}
    </div>
  );
}
