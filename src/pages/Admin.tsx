import { Link, Outlet } from "react-router-dom";

function AdminPanel() {
  return (
    <div className="min-h-screen bg-[#07111b] text-white flex">

      {/* SIDEBAR */}
      <aside className="w-[280px] bg-[#0b1623]/90 border-r border-white/10 backdrop-blur-xl p-6 hidden lg:flex flex-col">

        {/* LOGO */}
        <div className="mb-10">
          <h1 className="text-3xl font-extrabold italic tracking-widest">
            KIA
          </h1>

          <p className="text-xs text-gray-500 mt-1">
            Admin Panel
          </p>
        </div>

        {/* MENU */}
        <nav className="space-y-3">

        <Link  to={"/admin/homeHeader"}>
          <button className="w-full text-left bg-white text-black px-4 py-3 rounded-2xl font-semibold">
            Home Settings
          </button></Link>

  <Link  to={"/admin/testDrive"}>
          <button className="w-full mt-2 text-left bg-white text-black px-4 py-3 rounded-2xl font-semibold">
            Test Drive users
          </button></Link>

           <Link  to={"/admin/handleModels"}>
          <button className="w-full mt-2 text-left bg-white text-black px-4 py-3 rounded-2xl font-semibold">
          Handle Models
          </button></Link>

            <Link  to={"/admin/serviceUsers"}>
          <button className="w-full mt-2 text-left bg-white text-black px-4 py-3 rounded-2xl font-semibold">
            Service users
          </button></Link>

        </nav>

      </aside>

      {/* CONTENT */}
      <main className="flex-1 overflow-y-auto">

        {/* TOPBAR */}
        <header className="h-[90px] border-b border-white/10 bg-[#0b1623]/60 backdrop-blur-xl px-8 flex items-center justify-between">

          <div>
            <h2 className="text-2xl font-bold">
              Website Management
            </h2>

            <p className="text-sm text-gray-500 mt-1">
              Home page customization
            </p>
          </div>

          <button className="bg-white text-black px-6 py-3 rounded-2xl text-sm font-bold hover:bg-gray-200 transition-all">
            SAVE CHANGES
          </button>

        </header>

        {/* PAGE */}
        <div className="p-8">
          <Outlet />
        </div>

      </main>
    </div>
  );
}

export default AdminPanel;