import React from "react";
import logo from "../images/NASA-Logo-No-Background.png";

function Mavbar() {
    return (
        <div className="bg-black 00 h-100">
        <div className="container mx-auto flex justify-between items-center p-4">
            <div className="flex items-center">
                <img src={logo} alt="NASA logo" className="h-20 w-20 mr-2"/> {/* Add the logo */}
                <div className="text-white font-bold text-xl m-3"> Space Project</div>
            </div>
            <div>
            <a href="/" className="text-white p-2 hover:text-gray-300">Home</a> {/* Add hover effect */}
            <a href="/gallery" className="text-white p-2 hover:text-gray-300">Gallery</a> {/* Add hover effect */}
            <a href="#" className="text-white p-2 hover:text-gray-300">About</a> {/* Add hover effect */}
            </div>
        </div>
        </div>
    );
}

export default Mavbar;