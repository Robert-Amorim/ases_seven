export default function SpacePastors() {
  return (
    <div className="mt-4 bg-white border border-red-300 rounded-lg p-4">
      <h3 className="text-sm font-bold text-red-700 mb-1">
        Mensagem do seu Pastor
      </h3>
      <p className="text-sm text-slate-700">
        Aqui você encontrará conteúdos especiais do seu pastor distrital, como
        mensagens, vídeos, treinamentos, links e materiais úteis para a
        liderança da igreja.
      </p>
      <div className="mt-2">
        <ul className="list-disc list-inside text-sm text-blue-800">
          <li>
            <a href="#" className="hover:underline">
              📄 Plano de Ação Distrital 2025 (PDF)
            </a>
          </li>
          <li>
            <a href="#" className="hover:underline">
              🎥 Treinamento de Diáconos - Assista o vídeo
            </a>
          </li>
          <li>
            <a href="#" className="hover:underline">
              🔗 Link para relatório mensal
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}
