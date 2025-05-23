export default function ChurchCard({ nome, endereco, status, isUserChurch, progresso = 0 }) {
  return (
    <div
      className={`bg-white rounded-2xl shadow-lg p-4 hover:shadow-xl transition duration-300 cursor-pointer ${
        isUserChurch ? "bg-gradient-to-r from-blue-100 to-white border border-blue-500" : ""
      }`}
    >
      <h2 className="text-xl font-semibold mb-1">
        {nome}
        {isUserChurch && (
          <span className="ml-2 text-sm text-blue-700 font-bold">(minha igreja)</span>
        )}
      </h2>
      <p className="text-sm text-slate-700 mb-1">Endereço: {endereco}</p>
      <p className="text-sm italic text-gray-600 mb-2">Status: {status}</p>

      {/* Barra de Progresso logo abaixo do Status */}
      <div className="mb-3">
        <div className="w-full bg-gray-300 rounded-full h-3 overflow-hidden">
          <div
            className="bg-green-500 h-3 transition-all duration-500"
            style={{ width: `${progresso}%` }}
          ></div>
        </div>
        <p className="text-xs text-gray-600 mt-1">{progresso}% de progresso</p>
      </div>

      <div className="flex flex-wrap gap-2">
        <button className="text-sm text-white bg-blue-600 px-3 py-1 rounded hover:bg-blue-700">
          Ver calendário
        </button>
        <button className="text-sm text-white bg-purple-600 px-3 py-1 rounded hover:bg-purple-700">
          Doxologia
        </button>
        <button className="text-sm text-white bg-green-600 px-3 py-1 rounded hover:bg-green-700">
          Liderança local
        </button>
        <button className="text-sm text-white bg-yellow-500 px-3 py-1 rounded hover:bg-yellow-600">
          Localização
        </button>
        <button className="text-sm text-white bg-orange-500 px-3 py-1 rounded hover:bg-orange-600">
          Minhas atividades
        </button>
      </div>
    </div>
  );
}
