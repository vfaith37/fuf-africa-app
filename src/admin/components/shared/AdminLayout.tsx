import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "../../../components/shared/Footer";
import AdminHeader from "./AdminHeader";

interface SignOutProps {
  signUserOut: () => void;
}
const AdminLayout: React.FC<SignOutProps> = ({signUserOut}) => {
  return (
    <>
      <AdminHeader signUserOut={signUserOut} />
      <Outlet />
      <Footer />
    </>
  );
};

export default AdminLayout;
