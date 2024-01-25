import React, { useState } from "react";
import "tailwindcss/tailwind.css"; // Make sure to include Tailwind CSS

const CopyToClipboardToastNotification = () => {


  return (
    <div className="fixed bottom-5 left-1/2 -translate-x-1/2">
      
    
        <div className="bg-green-300 text-black  py-1 px-2 rounded mt-2">
          Copied!
        </div>
    
    </div>
  );
};

export default CopyToClipboardToastNotification;
