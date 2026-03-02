"use client";

import Footer from "@/shared/Footer";
import Navbar from "@/shared/Navbar";
import { ReactNode } from "react";
interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="min-h-screen mx-auto flex flex-col">
      <Navbar />
      <main className="flex-1">{children}</main>
      <Footer/>
    </div>
  );
};

export default Layout;
