import React from "react";

import {
  TalkPastor,
  ChurchCard,
  DistrictHighlights,
  SpacePastors,
  DistrictGoals,
} from "../components/mychurch";

export default function MyChurch() {
  const igrejaDoUsuario = "Igreja de Nova de Nova Rosa da Penha I";

  const igrejas = [
    {
      nome: "Igreja de Nova Rosa da Penha I",
      endereco: "Av. Central, 456",
      lider: "Maria Souza",
      status: "Ativa",
    },
  ];

  return (
    <div className="min-h-screen bg-slate-100">
      <div className="p-6 space-y-6">
        <h1 className="text-2xl font-bold mb-2">Distrito de Porto Belo</h1>
        <p className="text-lg text-blue-800 font-semibold">
          Pastor Distrital: Pr. Edigar Alves
        </p>


        <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-4">
          <div className="w-full bg-gradient-to-r from-yellow-100 to-yellow-50 border-l-4 border-yellow-500 rounded-xl shadow p-6 md:w-3/4">
            <DistrictHighlights />
            <SpacePastors />
          </div>
          <div className="md:w-1/4 space-y-4">
            <DistrictGoals />
            <TalkPastor />
          </div>
        </div>

        <div className="w-full">
          {igrejas.map((igreja) => (
            <ChurchCard
              key={igreja.nome}
              nome={igreja.nome}
              endereco={igreja.endereco}
              status={igreja.status}
              isUserChurch={igreja.nome === igrejaDoUsuario}
              progresso={75}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
