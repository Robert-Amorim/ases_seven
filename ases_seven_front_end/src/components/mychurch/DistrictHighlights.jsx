export default function DistrictHighlights() {
  return (
   <div className="w-full bg-gradient-to-r from-yellow-100 to-yellow-50 border-l-4 border-yellow-500 rounded-xl p-6">
      <h2 className="text-xl font-bold text-blue-800 mb-2">
        Destaques do Distrito de Porto Belo
      </h2>
      <ul className="list-disc list-inside text-sm text-slate-700">
        <li>🏠 Nova Rosa da Penha I fará a reinauguração da sua igreja dia 09/10</li>
        <li>🎉 A Igreja de Porto Belo alcançou o alvo de batismo do ano</li>
        <li>🔧 A Igreja de Nova Esperança está solicitando ajuda para a reforma</li>
        <li>🎊 A Igreja de Vila Merlo convida todos para a social no dia 24/05 às 19h em apoio ao Clube de Desbravadores</li>
      </ul>
      <div className="mt-4">
        <button className="px-4 py-1 bg-blue-600 text-white rounded-full text-sm font-medium shadow-sm hover:bg-blue-400 transition">
          Ver mais detalhes
        </button>
      </div>
    </div>
  )
}
