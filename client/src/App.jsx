import { Route, Routes, Navigate } from "react-router-dom";
import Header from "./components/Layout/Header";
// import Footer from "./components/Layout/Footer";
import HomePage from "./pages/HomePage.jsx";
import Login from "./pages/Auth/Login";
import Register from "./pages/Auth/Register";
import UserDashboard from "./pages/User/UserDashboard.jsx";
import PrivateRoute from "./components/Routes/Private.jsx";
import AdminRoute from "./components/Routes/AdminRoute.jsx";
import AdminDashboard from "./pages/Admin/AdminDashboard.jsx";
import Pagenotfound from "./pages/Pagenotfound.jsx";
import AllDocuments from "./pages/Admin/AllDocuments";
import AllUsers from "./pages/Admin/AllUsers";
import UploadDocument from "./pages/User/UploadDocument";
import YourDocuments from "./pages/User/YourDocuments";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/dashboard" element={<PrivateRoute />}>
          <Route path="user" element={<UserDashboard />} />
          <Route path="user/upload-document" element={<UploadDocument />} />
          <Route path="user/all-documents" element={<YourDocuments />} />
        </Route>
        <Route path="/dashboard" element={<AdminRoute />}>
          <Route path="admin" element={<AdminDashboard />} />
          <Route path="admin/all-users" element={<AllUsers />} />
          <Route path="admin/all-documents" element={<AllDocuments />} />
        </Route>
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="*" element={<Pagenotfound />} />
      </Routes>
    </>
  );
}

export default App;
