"use client";
import { useEffect } from "react";
import Image from "next/image";
import "bootstrap/dist/css/bootstrap.css";
import Dashboard from "./Components/Daskboard/pages";
import Login from "./Components/Login/page";
import "material-icons/iconfont/material-icons.css";

export default function Home() {
  useEffect(() => {
    require("bootstrap/dist/js/bootstrap.bundle");
  });
  return (
    <main>
      {/* <Login /> */}
      <Dashboard />
    </main>
  );
}
