import React, {useState} from 'react'

export default function TextFom(props) {
    const handleUpClick = ()=>{
        let newText = text.toUpperCase();
        setText(newText);
        props.showalert("Coverted to UpperCase","success ");    
    }
    const handleLowClick = ()=>{
        let lowText = text.toLowerCase();
        setText(lowText);    
        props.showalert("Coverted to LowerCase","success ");    

    }
    const handleclearClick = ()=>{
        let lowText = '';
        setText(lowText);    
        props.showalert("Text Cleared","success ");    

    }
    const handleOnChange = (event)=>{        
        setText(event.target.value); 
           
    }
    const handlecopy = ()=>{
        var text = document.getElementById("mybox");
        text.select();
        navigator.clipboard.writeText(text.value);
        props.showalert("Copied to Clipboard","success ");    

    } 
    const handlespace = ()=>{
        let newtext = text.split(/[ ]+/);
        setText(newtext.join(" "));
        props.showalert("Extra Spaces Removed","success ");    

    }  
    const [text,setText] = useState('');
    return (
        <>
        <div className="container" style={{color: props.mode === 'dark'?'white':'black'}} >
        <h3>{props.heading}</h3>
        <div className="mb-3">          
            <textarea className="form-control" value={text} style={{backgroundColor: props.mode === 'dark'?'#2B3030':'white',color: props.mode === 'dark'?'white':'black'}} onChange={handleOnChange} id="mybox" rows="8"></textarea>
        </div>
            <button className={`btn btn-${props.mode === 'light'?'dark':'light'} mx-1`} onClick={handleUpClick} >Covert To UpperCase</button>
            <button className={`btn btn-${props.mode === 'light'?'dark':'light'} mx-1`} onClick={handleLowClick} >Covert To LowerCase</button>
            <button className={`btn btn-${props.mode === 'light'?'dark':'light'} mx-1`} onClick={handleclearClick} >Clear Text</button>
            <button className={`btn btn-${props.mode === 'light'?'dark':'light'} mx-1`} onClick={handlecopy} >Copy Text</button>
            <button className={`btn btn-${props.mode === 'light'?'dark':'light'} mx-1`} onClick={handlespace} >Remove Space</button>
        </div>
        <div className="container my-2" style={{color: props.mode === 'dark'?'white':'black'}} >
            <h4>Summary</h4>
            <p>{text.trim() === '' ? 0 : text.match(/\S+/g).length} words and {text.replace(/\s+/g, '').length} characters</p>
            <p>{0.008 * text.split(" ").length} Minutes to read</p>
            <h5>Preview</h5>
            <p>{text.length>0?text:"Enter text to Preview"}</p>
        </div>
        </>
    )
}
