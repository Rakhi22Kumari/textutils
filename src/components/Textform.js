import React , {useState} from  'react'
//import React , {useState} from  'react'
//synatx is important better memorise it


export default function Textform(props) {

  const [text ,setText]=useState(''); //state

  const handleUPclick = () =>{
    console.log("button was clicked"+ text);
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Text to UpperCase !","success")
  };
  const handleonchange = (event) => {
    console.log("on change");
    setText(event.target.value);
    props.showAlert("Text to be changed !","success");
  };
  const handleLoclick =()=>{
    console.log("button was clicked" + text);
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Text to LowerCase!","success");

  }
  //function 1
  const handleCopy =()=>{
    var text = document.getElementById("myBox");
    text.select();
    navigator.clipboard.writeText(text.value);
    props.showAlert("Text Copied !","success");

  }

  //function 2
const handleXtraspace = ()=>{
  let newText = text.split(/\s+/);
  setText(newText.join(" "));
  props.showAlert("Extra spaces removed !","success");
}

//function 3
const handleClearClick = () => {
  setText('');
  props.showAlert("Text Cleared !","success");
};
 //const [text ,setText]=useState('Enter text  here2');
  //text = "new text";
 // setText("new text");
  //setText("hsgdhhhs"); //text.length and text.split(" ").length
  return (//my-number yaha number me value daldo wo distance ke liye kaam aata hai !!  //mx-2 bootstrap m distance deta h !!
    <> 
    <div  className="container">
      <h1>{props.heading}</h1>
      
<div className="mb-3">
  <textarea className="form-control" value = {text}  onChange = {handleonchange} style={{backgroundColor:props.mode==='dark'?'grey':'white', color:props.mode==='dark'?'white':'rgb(44 8 96)'}} id="myBox" rows="8"></textarea> 
</div>
<button className="btn btn-primary  mx-2"  onClick={handleUPclick}>Convert to Uppercase</button>
<button className="btn btn-primary mx-2"  onClick={handleLoclick}>Convert to Lowerercase</button>
<button className="btn btn-primary mx-2"  onClick={handleCopy}>Copy</button>
<button className="btn btn-primary mx-2"  onClick={handleXtraspace}>Remove extra space</button>
<button className="btn btn-primary mx-2"  onClick={handleClearClick}>Clear</button>
    </div>
    <div className="container my-2">
      <h2> Your text summary </h2>
      <p> {text.split(" ").length} words , {text.length} characters</p>
      <p>{0.008 * text.split(" ").length} Minutes read</p>
      <h2>Preview</h2>
      <p>{text.length>0?text:"Enter something to textbox above to preview it here"}</p>
    </div>

</>

  )
}
