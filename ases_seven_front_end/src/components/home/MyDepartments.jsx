import { Link } from "react-router-dom"


export default function MyDepartments() {
  return (
    <section className="bg-white rounded-2xl shadow p-4">
      <h3 className="text-lg font-semibold mb-2">MEUS DEPARTAMENTOS</h3>
      <div className="grid grid-cols-2 gap-2 text-sm">
        <Link to={"/departamento/:nome"} className="bg-slate-100 p-3 rounded-xl">Evangelismo</Link>
        <div className="bg-slate-100 p-3 rounded-xl">Ministério Jovem</div>
        <div className="bg-slate-100 p-3 rounded-xl">Escola Sabatina</div>
        <div className="bg-slate-100 p-3 rounded-xl">Ministério Pessoal</div>
      </div>
    </section>
  );
}