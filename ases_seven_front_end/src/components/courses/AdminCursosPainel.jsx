import { useState } from "react";
import TabsSelector from "./TabsSelector";
import ContentCard from "./ContentCard";

function gerarConteudosDetalhados(tipo, titulos, temas) {
  return titulos.map((titulo, i) => ({
    titulo,
    tema: temas[i],
    categoria: tipo,
    duracao: `${4 + (i % 6)} semanas`,
    capa: `/mnt/data/capas_finais/${tipo}_${i + 1}.png`
  }));
}

export default function AdminCursosPainel() {
  const [abaAtiva, setAbaAtiva] = useState("curso");
  const [buscaTitulo, setBuscaTitulo] = useState("");
  const [buscaTema, setBuscaTema] = useState("");

const cursos = [
  "Doutrinas Fundamentais Adventistas", "História do Movimento Adventista", "Mordomia Cristã", "Curso de Escola Sabatina", "Como Estudar a Bíblia",
  "Evangelismo Prático", "Vida de Oração", "Crenças Fundamentais", "Curso de Discipulado", "Vida Cristã no Século XXI",
  "Espírito de Profecia na Prática", "A Lição da Escola Sabatina", "Família e Fé", "A Bíblia e a Ciência", "Estudos Proféticos",
  "Relacionamento com Deus", "Liderança Espiritual", "Ministério Jovem na Igreja", "A Bíblia como Autoridade", "Missão e Propósito Cristão"
];

const temasCursos = [
  "Doutrinas", "História", "Fidelidade", "Ensino Bíblico", "Métodos de Estudo",
  "Testemunho", "Espiritualidade", "Crenças", "Novos Convertidos", "Vivência Cristã",
  "Profecia", "Lição Diária", "Família", "Ciência e Fé", "Daniel e Apocalipse",
  "Devocional", "Liderança", "Juventude", "Autoridade Bíblica", "Missão da Igreja"
];

const treinamentos = [
  "Liderança de Pequenos Grupos", "Secretaria da Igreja", "Tesouraria Adventista", "Ministério da Criança", "Comunicação e Mídia",
  "Planejamento Estratégico", "Liderança de Jovens", "Capacitação para Anciãos", "Capacitação para Diáconos", "Recepção com Propósito",
  "Evangelismo com Amigos", "Escola Sabatina como Ministério", "Discipulado Intencional", "Treinamento para Professores", "Visitação Pastoral",
  "Treinamento de Pregação", "Gestão de Ministério Pessoal", "Capacitação para Ministério da Mulher", "Formação de Líderes Locais", "Conselho de Igreja Eficaz"
];

const temasTreinamentos = [
  "Liderança", "Organização", "Fidelidade", "Infantil", "Mídia e Evangelismo",
  "Gestão", "Juventude", "Autoridade Espiritual", "Serviço na Igreja", "Acolhimento",
  "Evangelismo", "Ensino e Crescimento", "Acompanhamento", "Educação Cristã", "Pastoral",
  "Comunicação da Palavra", "Ministério Pessoal", "Atuação Feminina", "Desenvolvimento de Líderes", "Administração"
];

const palestras = [
  "A Importância da Escola Sabatina", "O Papel da Família na Igreja", "Cristianismo e Cultura Atual", "Profecias e o Tempo do Fim", "Saúde Física e Espiritual",
  "A Bíblia na Vida Moderna", "Adoração com Propósito", "Como Educar os Filhos na Fé", "Espírito Santo e Avivamento", "Finanças e Mordomia",
  "Juventude e Sexualidade", "Como Desenvolver o Hábito da Oração", "O Impacto das Redes Sociais", "Educação Cristã Relevante", "Como Ser um Membro Ativo",
  "Estilo de Vida Saudável", "A Missão da Igreja Hoje", "Trabalho em Equipe na Igreja", "Identidade Adventista", "Compromisso com a Missão"
];

const temasPalestras = [
  "Escola Sabatina", "Família", "Cultura", "Profecias", "Saúde e Fé",
  "Relevância Bíblica", "Adoração", "Educação Infantil", "Avivamento", "Fidelidade",
  "Juventude", "Espiritualidade", "Tecnologia", "Educação", "Participação Eclesiástica",
  "Vida Saudável", "Missão", "Liderança em Equipe", "Identidade Cristã", "Chamado Missionário"
];

  const conteudos = {
    curso: gerarConteudosDetalhados("curso", cursos, temasCursos),
    treinamento: gerarConteudosDetalhados("treinamento", treinamentos, temasTreinamentos),
    palestra: gerarConteudosDetalhados("palestra", palestras, temasPalestras)
  };

  const filtrados = conteudos[abaAtiva].filter(item =>
    item.titulo.toLowerCase().includes(buscaTitulo.toLowerCase()) &&
    item.tema.toLowerCase().includes(buscaTema.toLowerCase())
  );

  return (
    <div className="bg-slate-50 min-h-screen">

      <div className="p-6">
        <h1 className="text-3xl font-bold text-blue-900 mb-6">🎓 Formação e Capacitação</h1>

        <TabsSelector abaAtiva={abaAtiva} setAbaAtiva={setAbaAtiva} />

        <div className="flex flex-wrap gap-4 mb-6">
          <input
            type="text"
            placeholder="Buscar por título"
            value={buscaTitulo}
            onChange={(e) => setBuscaTitulo(e.target.value)}
            className="border p-2 rounded-xl text-sm w-full sm:w-auto"
          />

          <input
            type="text"
            placeholder="Buscar por tema"
            value={buscaTema}
            onChange={(e) => setBuscaTema(e.target.value)}
            className="border p-2 rounded-xl text-sm w-full sm:w-auto"
          />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtrados.map((item, index) => (
            <ContentCard key={index} item={item} />
          ))}
        </div>
      </div>
    </div>
  );
}
