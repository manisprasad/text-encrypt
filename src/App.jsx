import React from 'react';
import { useState } from 'react'

import "./index.css";
import TextArea from './components/TextArea';
import OutputText from './components/OutputText';

const App = () => {
  const [code, setCode] = useState(true);
  const [ans, setAns] = useState("");
  const [decodeText, setDecodeText] = useState("");

  const convertBinaryToText = (text) => {
    let plusMinusArray = [];
    let textArray = text.split(" ");
  
    for (let i = 0; i < textArray.length; i++) {
      let code;
      for (let j = 0; j < textArray[i].length; j++) {
        code = (textArray[i].charAt(j).charCodeAt(0) >>> 0).toString(2);
        plusMinusArray.push(code);
      }
      plusMinusArray.push(",");
    }
  
    for (let i = 0; i < plusMinusArray.length; i++) {
      plusMinusArray[i] = plusMinusArray[i].replace(/1/g, '+');
      plusMinusArray[i] = plusMinusArray[i].replace(/0/g, '-');
    }
  
    // Join with space after each word
    return plusMinusArray.join(" ");
  };
  
  const plusMinusToText = (encodedText) => {
    // let match = encodedText.match(/[^-+]+/g);
    // if (match !== null) {
    //   // There are invalid characters in the string
    //   return;
    // }
    // Continue processing if there are no invalid characters
    
    encodedText = encodedText.replace(/-/g, '0');
    encodedText = encodedText.replace(/\+/g, '1');
    let binaryArray = encodedText.split(" ");
    let textArray = [];
    let text = "";
  
    for (let i = 0; i < binaryArray.length; i++) {
      let character;
      console.log(binaryArray[i]);
      if (binaryArray[i] === ',') {
        console.log("Detected");
        character = " ";
      } else {
        character = String.fromCharCode(parseInt(binaryArray[i], 2).toString(10));
      }
      text += character;
    }
  
    return text;
  };
  
  
  


  const handelConvert = (text) => {
    setCode(true);
    setAns(convertBinaryToText(text));
  }

  const handelDeConvert = (plusMinus) => {
    setCode(false);
    setDecodeText(plusMinusToText(plusMinus));
  }
  // const toggle = () => {
  //   setCode(!code)
  // }

  return (
    <>
     <header className="bg-blue-500 text-center text-2xl text-white py-2 font-semibold shadow-md">
  Encrypt Text
</header>

      {/* <button className='bg-green-500 p-2' onClick={toggle} type='button'>{code ? 'Text -> code' : 'code -> text'}</button> */}
      <div className="controls flex md:w-11/12 mb-4 m-auto w-screen justify-between px-6 mt-2">
  <button
    onClick={() => setCode(true)}
    className={`${
      code
        ? 'bg-green-500 text-white'
        : 'bg-slate-300 text-gray-700'
    } p-3 w-1/2 rounded-l-md transition-all  border-r-2 border-r-black hover:bg-green-300 focus:outline-none focus:ring focus:border-grey-300`}
    type="button"
  >
    Text to Code
  </button>
  <button
    onClick={() => setCode(false)}
    className={`${
      !code
        ? 'bg-green-500 text-white'
        : 'bg-slate-300 text-gray-700'
    } p-3 w-1/2 rounded-r-md border-l-2 border-l-black transition-all hover:bg-green-300 focus:outline-none focus:ring focus:border-blue-300`}
    type="button"
  >
    Code to Text
  </button>
</div>

      <TextArea isCode={code} onConvert={handelConvert} onDecode={handelDeConvert} placeholder={"start writing here..."} title={"Enter Text or Drop .txt file here"} />

      <OutputText isCode={code} onDecode={handelDeConvert} codeResult={ans} decodeResult={decodeText} />
    </>
  )
}

export default App;
