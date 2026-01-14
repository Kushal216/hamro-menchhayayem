"use client";
import Menubar from "@/components/layout/Menubar";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Image from "next/image";
import down from "@/public/images/down-arrow.png";
import link from "@/public/images/link.png";
import kdpp from "@/public/images/kd-pp.jpeg";
import sbpp from "@/public/images/sb-pp.jpeg";
import {
  FaPhoneAlt,
  FaEnvelope,
  FaLinkedinIn,
  FaInstagram,
} from "react-icons/fa";

import { useState } from "react";

export default function HomePage() {
  return (
    <>
      <div className=" bg-[#FAFAFF] flex flex-col h-screen">
        <header>
          <Navbar />
        </header>

        <div className="body flex-1 flex">
          <aside className="flex-1/5 ">
            <Menubar />
          </aside>
          <main className="flex-4/5 p-4">home page</main>
        </div>

        <footer>
          <Footer />
        </footer>
      </div>
    </>
  );
}
