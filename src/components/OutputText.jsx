import React, { useState } from "react";
import CopyToClipboardToastNotification from "./SuccessfullyCopiedMsg";
import "../index.css";

const OutputText = ({ codeResult, isCode, decodeResult }) => {
  const [copied, setCopied] = useState(false);

  const copyToClipboard = (inputText) => {
    navigator.clipboard.writeText(inputText).then(
      function () {
        console.log('Async: Copying to clipboard was successful!');
        setCopied(true);
        setTimeout(() => {
          setCopied(false);
        }, 2000);
      },
      (err) => {
        console.error('Async: Could not copy text: ', err);
      }
    );
  };

  return (
    <div className="box p-8 card shadow-md md:w-11/12 w-screen relative mx-auto rounded-md mt-10">
      <p className="absolute top-3 left-3 text-lg font-semibold text-gray-500">
        {isCode ? 'Encoded Text' : 'Decoded Text'}
      </p>
      <div className="flex justify-between items-center">
        <p className="ans min-h-0-9 mt-3 text-white p-2">{isCode ? codeResult : decodeResult}</p>
       {
        (codeResult.length > 0 || decodeResult.length > 0 ) ?  <button
        onClick={() => {
          copyToClipboard(isCode ? codeResult : decodeResult);
        }}
        className="bg-slate-500 px-2 py-1 hover:bg-green-600 rounded-md absolute top-3 right-2"
      >
        {copied ? 'Copied' : 'Copy'}
      </button>: <p className="flex justify-center w-full text-slate-600">Result will shown here</p> 
    }
      </div>
      {copied && <CopyToClipboardToastNotification inputText={isCode ? codeResult : decodeResult} />}
    </div>
  );
};

export default OutputText;
