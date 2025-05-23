export default function TalkPastor() {
  return (
    <div className="w-full bg-white border border-yellow-300 rounded-xl p-4 shadow">
      <h4 className="text-sm font-bold text-red-700 mb-2">
        📞 Fale com seu Pastor
      </h4>
      <div className="flex items-center mb-2">
        <img
          src="../../public/edigar_alves.jpg"
          alt="Pr. Edigar Alves"
          className="rounded-full w-10 h-10 mr-2"
        />
        <div>
          <p className="text-sm font-semibold text-slate-800">
            Pr. Edigar Alves
          </p>
          <p className="text-xs text-slate-500">(27) 99999-0000</p>
        </div>
      </div>
      <div className="text-xs text-slate-700 mb-2">
        <p className="font-semibold">Agenda de Pregações:</p>
        <ul className="list-disc list-inside">
          <li>18/05 – Vila Merlo</li>
          <li>25/05 – Nova Esperança</li>
          <li>01/06 – Nova de Nova de Nova Rosa da Penha II</li>
        </ul>
      </div>
      <button className="px-3 py-1 bg-blue-600 text-white rounded-full text-sm font-medium hover:bg-blue-500 transition w-full">
        Solicitar Visita
      </button>
      <p className="text-[10px] text-slate-500 mt-1">
        Será solicitado melhor dia e horário para visita.
      </p>
    </div>
  );
}
