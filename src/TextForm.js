import React,{useState} from 'react'

export default function TextForm(props) {
   const handleUpClick=()=>{
        //console.log("Uppercase was clicked" + text);
        let newText=text.toUpperCase();
        setText(newText);
       // props.setAlert("Converted to Uppercase","success");
    }
    const handleLowerClick=()=>{
        //console.log("Lowercase was clicked" + text);
        let newText=text.toLowerCase();
        setText(newText);
       // props.setAlert("Converted to Lowercase","success");
    }
    const handleOnChange=(event)=>{
        //console.log("On Change" +text);
        setText(event.target.value);
    }
    const handleRemove=()=>{
       // console.log("Remove was clicked" + text);
        let newText='';
        setText(newText);
       // props.setAlert("Remove text","success");
    }
    const handleExtraSpaces=()=>{
        //console.log("Remove Extra Spaces was clicked" + text);
        let newText=text.split(/[ ]+/);
        setText(newText.join(" "));
        //props.setAlert("Remove Extra Spaces","success");
    }
    const handlecopytext= () => {
      const { text } = props;
      const input = document.createElement('input');
      input.value = text;
      document.body.appendChild(input);
      input.select();
      document.execCommand('copy');
      document.body.removeChild(input);
    }
    const [text,setText]= useState('');
    
  return(
    <>
        <h1 style={{color:props.mode==='dark'?'white':'black'}}>{props.heading} </h1>
  <div className="mb-3"style={{color:props.mode==='dark'?'white':'white'}}>
    <textarea className="form-control" value={text} style={{backgroundColor :props.mode==='dark'?'grey':'white', color:props.mode==='dark'?'white':'black'}} onChange={handleOnChange}id="myBox" rows="8"></textarea>
    </div>
    <button className="btn btn-danger mx-1 my-1" onClick={handleUpClick} onChange={handleOnChange}>Convert to UpperCase</button>
    <button className="btn btn-danger mx-1 my-1" onClick={handleLowerClick} onChange={handleOnChange}>Convert to LowerCase</button>
    <button className="btn btn-danger mx-1 my-1" onClick={handleExtraSpaces} onChange={handleOnChange}>Remove Extra Spaces</button>
    <button className="btn btn-danger mx-1 my-1 " onClick={handlecopytext} onChange={handleOnChange}>Copy Text On Clipboard</button>
    <button className="btn btn-danger mx-1 my-1" onClick={handleRemove} onChange={handleOnChange}>Remove</button>
  <div className="container my-3"style={{color:props.mode==='dark'?'white':'black'}}>
    <h1>Your text summary</h1>
    <p>{text.split(" ").filter((element)=>{return element.length!==0}).length} words 
    and {text.length} characters</p>
    <p>{0.008 * text.split(" ").length} Minutes read</p>
    <h2>Preview</h2>
    <p>{text.length>0?text:"Enter something in the textbox above to preview it here"}</p>
    </div>
</>
  );
}