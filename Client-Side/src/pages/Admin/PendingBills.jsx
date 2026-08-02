import AdminNavbar from "../../components/Admin/AdminNavbar";
import AdminSidebar from "../../components/Admin/AdminSidebar";

function PendingBills() {
  return (
    <div className="min-h-screen bg-[#08111F] text-white">

      <AdminNavbar />

      <div className="flex">

        <AdminSidebar />

        <main className="flex-1 p-6">

          <div className="border-b border-slate-700 pb-3">
            <h1 className="text-2xl font-semibold">
              Pending Bills
            </h1>
          </div>

          <div className="flex items-center justify-center h-[70vh]">

            <div className="text-center">

              <h2 className="text-2xl text-slate-400">
                No Pending Bills
              </h2>

              <p className="text-slate-500 mt-2">
                Bills will appear here.
              </p>

            </div>

          </div>

        </main>

      </div>

    </div>
  );
}

export default PendingBills;