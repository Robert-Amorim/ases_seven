            export default function DistrictGoals() {
  return (
            <div className="w-full bg-white border border-yellow-300 rounded-xl p-3 shadow space-y-2">
              <h4 className="text-xs font-bold text-yellow-800 mb-1">
                🎯 Metas do Distrito
              </h4>
              <div>
                <p className="text-xs text-slate-700">Batismos: 18/30</p>
                <div className="w-full h-2 bg-red-100 rounded">
                  <div
                    className="h-2 bg-red-500 rounded"
                    style={{ width: "60%" }}
                  ></div>
                </div>
              </div>
              <div>
                <p className="text-xs text-slate-700">
                  Estudos Bíblicos: 30/50
                </p>
                <div className="w-full h-2 bg-yellow-100 rounded">
                  <div
                    className="h-2 bg-yellow-500 rounded"
                    style={{ width: "60%" }}
                  ></div>
                </div>
              </div>
              <div>
                <p className="text-xs text-slate-700">
                  Visitas a Interessados: 140/200
                </p>
                <div className="w-full h-2 bg-green-100 rounded">
                  <div
                    className="h-2 bg-green-500 rounded"
                    style={{ width: "70%" }}
                  ></div>
                </div>
              </div>
              <div>
                <p className="text-xs text-slate-700">GER Implementado</p>
                <div className="w-full h-2 bg-blue-100 rounded">
                  <div
                    className="h-2 bg-blue-500 rounded"
                    style={{ width: "100%" }}
                  ></div>
                </div>
              </div>
            </div>
    );  
}