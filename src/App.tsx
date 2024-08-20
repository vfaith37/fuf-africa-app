import React, { useState } from "react";
import Home from "./pages/Home";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import About from "./pages/About";
import WhatWeDo from "./pages/WhatWeDo";
import Media from "./pages/Media";
import Contact from "./pages/Contact";
import Donation from "./pages/Donation";
import Blog from "./pages/Blog";
import AppLayout from "./components/shared/AppLayout";
import CreatePost from "./pages/CreatePost";
import { signOut } from "firebase/auth";
import { auth } from "./config/firebase";
import Login from "./pages/Login";
import AdminPost from "./pages/AdminPost";

const App: React.FC = () => {
  // const [isAuth, setIsAuth] = useState(localStorage.getItem("isAuth"));
  const [isAuth, setIsAuth] = useState<boolean>(
    !!localStorage.getItem("isAuth")
  );

  const signUserOut = () => {
    signOut(auth).then(() => {
      localStorage.clear();
      setIsAuth(false);
      window.location.pathname = "/login";
    });
  };

  return (
    <Router>
      {/* <Header /> */}
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
        <Route path="/admin" element={<AppLayout />}>
          <Route index element={<CreatePost isAuth={isAuth} />} />
          <Route path="login" element={<Login setIsAuth={setIsAuth} />} />
          <Route path="post" element={<AdminPost isAuth={isAuth} />} />
        </Route>
      </Routes>
      {/* <Footer /> */}
    </Router>
  );
};

export default App;
