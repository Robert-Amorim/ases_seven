export default function ContentCard({ item }) {
    const capa = "../../public/cursos.jpg";
  return (
    <div className="bg-stone-100 rounded-xl shadow hover:shadow-lg transition">
      <img
        src={capa}
        alt={item.titulo}
        className="rounded-t-1x2 w-64 h-64 object-cover mx-auto pt-6"
      />
      <div className="p-3">
        <h3 className="text-lg font-bold text-blue-800 mb-1 truncate">{item.titulo}</h3>
        <p className="text-xs text-gray-500">Tema: {item.tema}</p>
        <p className="text-xs text-gray-500">Duração: {item.duracao}</p>
      </div>
    </div>
  );
}
