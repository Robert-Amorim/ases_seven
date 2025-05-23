
export default function DetailsCard({ nome, pastor }) {
  return (
    <div className="bg-white rounded-2xl shadow p-4 transition hover:bg-blue-100 cursor-pointer">
      <h3 className="text-xl font-bold mb-2">{nome}</h3>
      <p className="text-sm text-blue-900 font-semibold mb-1">
        {pastor || "(nome do pastor aqui)"}
      </p>
      <p className="text-sm text-slate-600 mb-1">Secretária: (nome aqui)</p>
      <p className="text-sm text-slate-500 italic">
        (Descrição do departamento)
      </p>
    </div>
  );
}
