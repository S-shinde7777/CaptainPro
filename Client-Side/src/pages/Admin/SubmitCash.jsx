import React from 'react'
import AdminNavbar from "../../components/Admin/AdminNavbar";
import AdminSidebar from "../../components/Admin/AdminSidebar";

const SubmitCash = () => {
  return (
    <div className="min-h-screen bg-[#08111F]">

      <AdminNavbar />

      <div className="flex">

        <AdminSidebar />

        <main className="flex-1 p-6">
            <div className="border-b border-slate-700 pb-3">
            <h1 className="text-2xl font-semibold text-white">
               Daily Cash Summary
            </h1>
          </div>

        </main>

      </div>

    </div>
  )
}

export default SubmitCash