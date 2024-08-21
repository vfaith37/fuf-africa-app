import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import WhatWeDo from "./pages/WhatWeDo";
import Media from "./pages/Media";
import Contact from "./pages/Contact";
import Donation from "./pages/Donation";
import Blog from "./pages/Blog";
import AppLayout from "./components/shared/AppLayout";
import CreatePost from "./admin/pages/CreatePost";
import Login from "./pages/Login";
import AdminPost from "./admin/pages/AdminPost";
import AdminLayout from "./admin/components/shared/AdminLayout";
import CreateUser from "./admin/pages/CreateUser";
import { signOut } from "firebase/auth";
import { auth } from "./config/firebase";
import ManageUsers from "./admin/pages/ManageUsers";

const App: React.FC = () => {
  const [isAuth, setIsAuth] = useState<boolean>(
    !!localStorage.getItem("isAuth")
  );
  const [isAdmin, setIsAdmin] = useState<boolean>(
    !!localStorage.getItem("isAdmin")
  );

  const signUserOut = () => {
    signOut(auth).then(() => {
      localStorage.clear();
      setIsAuth(false);
      setIsAdmin(false);
      window.location.pathname = "/login"; // Redirect to login
    });
  };

  return (
    <Router>
      <Routes>
        <Route path="/" element={<AppLayout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="what-we-do" element={<WhatWeDo />} />
          <Route path="media" element={<Media />} />
          <Route path="contact" element={<Contact />} />
          <Route path="donate" element={<Donation />} />
          <Route path="blog" element={<Blog />} />
        </Route>
        <Route
          path="/login"
          element={<Login setIsAuth={setIsAuth} setIsAdmin={setIsAdmin} />}
        />
        <Route
          path="/admin/*"
          element={
            isAuth ? (
              <AdminLayout signUserOut={signUserOut} />
            ) : (
              <Navigate to="/login" />
            )
          }
        >
          <Route index element={<CreatePost isAuth={isAuth} />} />
          <Route path="post" element={<AdminPost isAuth={isAuth} />} />
          <Route
            path="createuser"
            element={<CreateUser isAuth={isAuth} isAdmin={isAdmin} />}
          />
          <Route
            path="manageusers"
            element={<ManageUsers />}
          />
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
