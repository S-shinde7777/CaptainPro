import AdminNavbar from "../../components/Admin/AdminNavbar";
import AdminSidebar from "../../components/Admin/AdminSidebar";
import TableGrid from "../../components/Admin/TableGrid";

function Dashboard() {
  return (
    <div className="min-h-screen bg-[#08111F]">

      <AdminNavbar />

      <div className="flex">

        <AdminSidebar />

        <main className="flex-1 p-6">

          <TableGrid />

        </main>

      </div>

    </div>
  );
}

export default Dashboard;