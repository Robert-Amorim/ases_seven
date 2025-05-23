
export default function MyCourses() {
  return (
    <section className="bg-white rounded-2xl shadow p-4 max-h-40 overflow-y-auto">
      <h3 className="text-lg font-semibold mb-2">MEUS CURSOS</h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
        <div className="bg-slate-100 p-4 rounded-xl">
          <h4 className="font-semibold">Liderança Espiritual</h4>
          <p className="text-sm">Avançado • 10 aulas</p>
        </div>
        <div className="bg-slate-100 p-4 rounded-xl">
          <h4 className="font-semibold">Evangelismo Digital</h4>
          <p className="text-sm">Intermediário • 8 aulas</p>
        </div>
      </div>
    </section>
  );
}