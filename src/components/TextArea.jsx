import React, { useState } from "react";
import "../components/componentsCss/text_area.css";

const TextArea = ({title, placeholder,  onConvert, isCode, onDecode}) =>{
    const [inputText, setInputText] = useState("");
  


    const textChange = (e) =>{
        setInputText(e.target.value);
    }

    const convertClick = () =>{
        onConvert(inputText);
    }

    const deCodeClick = () =>{
        onDecode(inputText);
    }
    
    const clearClick = () =>{
       setInputText("")
    }

  

    return(
        <>
        
        <div className="field-body">

        <div className="field">
  <div className="field__head">
  <label className="field__ttl" htmlFor="textarea">
  {isCode
    ? "Enter Text or Drop .txt file Here"
    : "Paste Encoding or Drop .txt File"}
</label>

    <span className="field__tag is-require">Required</span>
  </div>
  <div className="field__body">
    <div className="textarea-box">
      <textarea className="p-3" onChange={textChange} value={inputText}  name="textarea" id="textarea" placeholder={isCode ? "start writing here..." : "paste coded text here..."}></textarea>
      <div className="button-container flex justify-end gap-3 mt-2 ">
     <button onClick={clearClick} type="button" className="bg-red-500 px-3 py-2 hover:bg-red-600 rounded-md">clear</button>

     <button onClick={isCode ? convertClick : deCodeClick} type="button" className="bg-green-500 px-3 py-2 hover:bg-green-600 rounded-md">
  {isCode ? 'Convert' : 'Decode'}
</button>


      </div>
    </div>        
  </div>
</div>
        </div>
        </>
    )
}

export default TextArea;