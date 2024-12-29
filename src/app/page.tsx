"use client"

import { useEffect, useState } from "react";
import ListForm from "./components/listForm";
import WelcomeOverlay from "./components/welcome";
import SuccessSumary from "./components/successModal";

export default function Home() {
  const [showOverlay, setShowOverlay] = useState(localStorage.getItem("overlay") == "true");

  const handleOverlay = () => {
    setShowOverlay(true)
    localStorage.setItem("overlay", "true")
  }


  return (
    <div className="min-h-[100vh] h-full p-8 pt-18 max-w-[100vw] flex justify-center items-center flex-col">
      <button onClick={handleOverlay} className="btn btn-sm btn-warning absolute right-5 top-5">▼</button>
      <WelcomeOverlay showOverlay={showOverlay} setShowOverlay={setShowOverlay} />
      <div className="w-full px-32">
        <ListForm />
      </div>
    </div>
  );
}
