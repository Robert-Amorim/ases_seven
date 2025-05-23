export default function Links() {
  return (
    <div className="bg-white rounded-2xl shadow p-4 max-h- overflow-y-auto">
      <h3 className="text-lg font-semibold mb-1">LINKS</h3>
      <ul className="list-disc list-inside text-sm">
        <li>
          <a href="#" className="text-blue-600 hover:underline">
            Curso de Liderança Jovem
          </a>
        </li>
        <li>
          <a href="#" className="text-blue-600 hover:underline">
            Metas da Igreja para 2025
          </a>
        </li>
        <li>
          <a href="#" className="text-blue-600 hover:underline">
            Relatório de Estudos Bíblicos
          </a>
        </li>
        <li>
          <a href="#" className="text-blue-600 hover:underline">
            Reforma Igreja Central
          </a>
        </li>
        <li>
          <a href="#" className="text-blue-600 hover:underline">
            Cursos Concluídos
          </a>
        </li>
      </ul>
      <div className="mt-4">
        <h4 className="font-semibold text-sm mb-1">Downloads:</h4>
        <ul className="list-disc list-inside text-sm">
          <li>
            <a href="#" className="text-green-700 hover:underline">
              Plano de Evangelismo 2025 (PDF)
            </a>
          </li>
          <li>
            <a href="#" className="text-green-700 hover:underline">
              Manual de Diáconos (PDF)
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}
