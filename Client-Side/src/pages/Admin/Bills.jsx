import AdminNavbar from "../../components/Admin/AdminNavbar";
import AdminSidebar from "../../components/Admin/AdminSidebar";



function Bills() {
  return (
    <div className="min-h-screen bg-[#08111F]">

      <AdminNavbar />

      <div className="flex">

        <AdminSidebar />

        <main className="flex-1 p-6">
            <div className="border-b border-slate-700 pb-3">
            <h1 className="text-2xl font-semibold text-white">
               Bills
            </h1>
          </div>

        </main>

      </div>

    </div>
  );
}

export default Bills;