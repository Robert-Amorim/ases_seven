

export default function highlights() {
  return (
    <div className="bg-white rounded-2xl shadow p-4">
      <h3 className="text-lg font-semibold mb-2">Destaques</h3>
      <ul className="space-y-2 text-sm">
        <li>
          🆕 Novo curso: Liderança Jovem 2025
          <div className="w-full h-2 bg-slate-200 rounded mt-1">
            <div className="h-2 bg-blue-500 rounded" style={{ width: '10%' }}></div>
          </div>
        </li>
        <li>
          🎯 Alvo da igreja: 30 batismos em 2025
          <div className="w-full h-2 bg-slate-200 rounded mt-1">
            <div className="h-2 bg-green-500 rounded" style={{ width: '60%' }}></div>
          </div>
        </li>
        <li>
          ⛪ Distrito: 12 de 20 estudos bíblicos concluídos
          <div className="w-full h-2 bg-slate-200 rounded mt-1">
            <div className="h-2 bg-yellow-500 rounded" style={{ width: '60%' }}></div>
          </div>
        </li>
        <li>
          🛠 Reforma da Igreja Central: 75% concluída
          <div className="w-full h-2 bg-slate-200 rounded mt-1">
            <div className="h-2 bg-red-500 rounded" style={{ width: '75%' }}></div>
          </div>
        </li>
        <li>
          📚 Cursos concluídos pelos membros
          <div className="w-full h-2 bg-slate-200 rounded mt-1">
            <div className="h-2 bg-indigo-500 rounded" style={{ width: '62%' }}></div>
          </div>
        </li>
      </ul>
    </div>
  );
}