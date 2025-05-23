

export default function MyChurch() {
  return (
    <section className="bg-white rounded-2xl shadow p-4">
      <h3 className="text-lg font-semibold mb-2">MINHA IGREJA</h3>
      <p className="text-sm mb-1">Igrejas do distrito de Porto Belo:</p>
      <ul className="list-disc list-inside text-sm mb-1">
        <li>Igreja Nova Esperança</li>
        <li>Igreja Nova Rosa da Penha I</li>
        <li>Igreja Nova Rosa da Penha II</li>
        <li>Igreja Porto Belo</li>
        <li>Igreja Porto de Cariacica</li>
        <li>Igreja Vila Merlo</li>
        <li>Igreja Vila Progresso</li>
      </ul>
      <p className="text-sm">Pastor Distrital: Pr. Edigar Alves</p>
    </section>
  );
}