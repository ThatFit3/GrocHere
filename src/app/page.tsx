"use client"

import { useState } from "react";
import ListForm from "./components/listForm";
import WelcomeOverlay from "./components/welcome";

export default function Home() {
  const [showOverlay, setShowOverlay] = useState(true);

  const handleOverlay = () => {
    setShowOverlay(true)
  }


  return (
    <div className="min-h-[100vh] h-full p-8 max-w-[100vw] flex justify-center items-center flex-col">
      <button onClick={handleOverlay} className="btn btn-sm btn-warning absolute right-5 top-5">▼</button>
      <WelcomeOverlay showOverlay={showOverlay} setShowOverlay={setShowOverlay} />
      <div className="w-full p-28">
        <ListForm />
      </div>
    </div>
  );
}
