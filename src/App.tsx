import { Routes, Route } from "react-router-dom";
import Home from './pages/Home';
import Models from "./pages/Models";
import Car from "./pages/Car";
import Offers from "./pages/Offers";
import Servis from "./pages/Servis";
import Contact from "./pages/Contact";
import AdminPanel from "./pages/Admin";
import HomeHeader from "./pages/Admin/HomeHeader";
import { Provider } from "react-redux";
import store from "./store/store";
import TestDriveUsers from "./pages/Admin/TestDriveUsers";
import HandleModels from "./pages/Admin/HandleModels";
import ServiceUsers from "./pages/Admin/ServiceUsers";
import { ToastContainer } from "react-toastify";
import Contacts from "./pages/Admin/Contacts";


function App() {
  return (
    <Provider store={store}>
      <ToastContainer
  position="top-right"
  autoClose={3000}
/>
      <Routes>

        <Route path="/" element={<Home />} />

        <Route path="/models" element={<Models />} />

        {/* CAR PAGE */}
        <Route path="/cars/:slug" element={<Car />} />

        <Route path="/offers" element={<Offers />} />

        <Route path="/services" element={<Servis />} />

        <Route path="/contact" element={<Contact />} />

        {/* ADMIN */}
        <Route path="/admin" element={<AdminPanel />}>

          <Route
            path="homeHeader"
            element={<HomeHeader />}
          />

          <Route
            path="testDrive"
            element={<TestDriveUsers />}
          />

          <Route
            path="handleModels"
            element={<HandleModels />}
          />

          
          <Route
            path="serviceUsers"
            element={<ServiceUsers />}
          />

           <Route
            path="contacts"
            element={<Contacts />}
          />


        </Route>

         

      </Routes>
    </Provider>
  );
}

export default App;