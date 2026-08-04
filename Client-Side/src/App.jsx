import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Features from "./components/Features";
import Pricing from "./components/Pricing";
import Footer from "./components/Footer";

import Login from "./pages/Login";
import Register from "./pages/Register";
import Captain from "./pages/Captain/Captain";
import Menu from "./pages/Captain/Menu";
import Orders from "./pages/Captain/Orders";
import Kot from "./pages/Captain/Kot";
import Notification from "./pages/Captain/Notification";
import KitchenHome from "./pages/Kitchen/KitchenHome";
import KitchenPreparing from "./pages/Kitchen/KitchenPreparing";
import KitchenReady from "./pages/Kitchen/KitchenReady";
import KitchenNotification from "./pages/Kitchen/KitchenNotification";
import Dashboard from "./pages/Admin/Dashboard";
import PendingBills from "./pages/Admin/PendingBills";
import Bills from "./pages/Admin/Bills";
import Kots from "./pages/Admin/Kots";
import SubmitCash from "./pages/Admin/SubmitCash";
import Users from "./pages/Admin/Users";
function LandingPage() {
  return (
    <>
      <Navbar />
      <Hero />
      <Features />
      <Pricing />
      <Footer />
    </>
  );
}

function App() {
  return (
    <Routes>

      <Route path="/" element={<LandingPage />} />

      <Route path="/login" element={<Login />} />

      <Route path="/register" element={<Register />} />

       <Route path="/captain" element={<Captain />} />

       <Route path="/menu/:tableId" element={<Menu />} />

       <Route path="/orders" element={<Orders />} />
       
       <Route path="/kots" element={<Kot />} />

       <Route path="/notifications" element={<Notification />} />
       
       <Route path="/kitchen" element={<KitchenHome />} />

       <Route path="/kitchen/preparing" element={<KitchenPreparing />}/>

       <Route path="/kitchen/ready" element={<KitchenReady />}/>

       <Route path="/kitchen/notification" element={<KitchenNotification />}/>

       <Route path="/admin/dashboard" element={<Dashboard />} />

       <Route path="/admin/pending-bills" element={<PendingBills />}/>
       <Route path="/admin/bills" element={ <Bills/>}/>
       <Route path="/admin/kots" element={ <Kots/>}/>
       <Route path="/admin/cash" element={ <SubmitCash/>}/>
       <Route path="/admin/users" element={ <Users/>}/>


    </Routes>
  );
}

export default App;