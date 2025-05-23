

export default function Calendar() {
  return (
    <div className="bg-white rounded-2xl shadow p-4">
      <h3 className="text-lg font-semibold mb-1">CALENDÁRIO</h3>
      <p className="text-sm mb-1">Veja os eventos da ASES e do seu distrito:</p>
      <ul className="list-disc list-inside text-sm">
        <li>🗓 Congresso Jovem – ASES (15/06)</li>
        <li>🗓 Batismo Distrital – Porto Belo (23/06)</li>
        <li>🗓 Capacitação de Diáconos – ASES (07/07)</li>
        <li>🗓 Vigília – Distrito de Porto Belo (12/07)</li>
      </ul>
    </div>
  );
}