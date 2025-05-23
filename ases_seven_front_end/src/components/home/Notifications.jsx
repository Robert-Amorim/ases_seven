export default function Notifications() {
  return (
    <section className="bg-white rounded-2xl shadow p-4 max-h-50">
      <h2 className="text-xl font-semibold mb-2">Notificações Recentes</h2>
      <ul className="list-disc list-inside text-sm space-y-1">
          <li>
          📌{" "}
          <a
            href="https://alcancemos.useb.org.br/2021/"
            className="hover:underline font-bold text-gray-800"
          >
            Alcacemos - 5 Pilares da Igreja
          </a>
        </li>
        <li>
          📚{" "}
          <a
            href="https://domingosdeesperanca.com.br/"
            className="hover:underline font-bold text-gray-800"
          >
            Domingos de Esperança
          </a>
        </li>

        <li>
          📣 Ensaio geral para o batismo distrital será neste sábado às 15h.
        </li>
        <li>📆 Evento da ASES: Congresso Jovem em 15/06. Inscreva-se!</li>
        <li>
          📚 Nova diretriz do Ministério Pessoal disponível para download.
        </li>
      </ul>
    </section>
  );
}
