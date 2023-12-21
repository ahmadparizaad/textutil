import React, {useState} from 'react'

export default function TextForm(props) {
    const handleUpClick = ()=>{
        let newText = text.toUpperCase();
        setText(newText)
    }

    const handleLoClick = ()=>{
        let newText = text.toLowerCase();
        setText(newText)
    }

    const handleCtClick = ()=>{
        let newText = ("");
        setText(newText)
    }

    const handleCopy = ()=>{
      // let text = document.getElementById("myBox");
      // text.select();
      navigator.clipboard.writeText(text);
      document.getSelection().removeAllRanges();
    }

    const handleSpaces = ()=>{
      let newText = text.split(/[ ]+/);
      setText(newText.join(" "))
    }

    const handleOnChange = (event)=>{
        setText(event.target.value)
    }

    const [text, setText] = useState("")
  return (
    <div>
    {/* <div className={`text-${props.mode==='light'?'dark' : 'light'}`} style={{marginTop: '30px', backgroundColor: props.mode==='light'?'white' : '#000025'}}> */}
          <div className=''>
          <h2 className='mx-3 '>{props.heading}</h2>
  <div className="mb-3 mx-5">
    <label htmlFor="myBox" className="form-label"></label>
    <textarea className="form-control" style={{color: props.mode==='light'?'black' : 'white', backgroundColor: props.mode==='light'?'white' : '#000025'}} id="myBox" rows="8"  value={text} onChange={handleOnChange} placeholder='Enter text here'></textarea>
  
  <button disabled={text.length===0} className='btn btn-primary mx-2 my-4' onClick={handleUpClick}>Convert to Uppercase</button>
  <button disabled={text.length===0} className='btn btn-primary mx-2 ' onClick={handleLoClick}>Convert to Lowercase</button>
  <button disabled={text.length===0} className='btn btn-primary mx-2' onClick={handleCopy}>Copy Text</button>
  <button disabled={text.length===0} className='btn btn-primary mx-2' onClick={handleSpaces}>Remove Extra Spaces</button>
  <button disabled={text.length===0} className='btn btn-primary mx-2' onClick={handleCtClick}>Clear Text</button>

  </div>

<div className="container my-3 mx-3 ">
  <h3>Your text Summary</h3>
  <p>{text.split(" ").filter((element)=>{return element.length!==0}).length} words {text.length} characters</p>
  <p>{0.008* text.split(" ").filter((element)=>{return element.length!==0}).length} minutes read</p>
  <h3> Preview </h3>
  <p>{text.length>0 ? text : 'Enter text above to preview here'}</p>
  </div>
  </div>
  {/* </div> */}
  </div>
  )
}
