import React, { useEffect, useState } from "react";

export default function WelcomeOverlay({
    showOverlay,
    setShowOverlay,
}: {
    showOverlay: boolean;
    setShowOverlay: React.Dispatch<React.SetStateAction<boolean>>;
}) {
    const handleCloseOverlay = () => {
        setShowOverlay(false);
        localStorage.setItem("overlay", "false")
    };

    return (
        <div
            onClick={handleCloseOverlay}
            className={`fixed inset-0 z-50 flex items-center justify-center duration-500 ${showOverlay ? "opacity-100 translate-y-0" : "opacity-0 translate-y-[-100%]"
                } bg-black text-white`}
        >
            <div className="text-center">
                <h1 className="text-4xl font-bold mb-4">Welcome to Our GrocerHere!</h1>
                <p className="text-lg mb-16">Don't know where to do your grochery?</p>
                <p>&gt; Click anywhere to start! &lt;</p>
            </div>
        </div>
    );
}
