import {useState,} from "react";
import Markdown from "marked-react";

import {data} from "./data.js"


function App() {
    const [text, setText] = useState(data)
    const [textAreaHeight, setTextAreaHeight] = useState(false)

  return (
    <div>
        <div id="editor">
            <div className="header">
                <h3>Editor</h3>
                <h3 onClick={() => setTextAreaHeight(prevHeight => !prevHeight)} className=" icon">/</h3>
            </div>
            <textarea 
                value={text}
                placeholder="Type code here"
                onChange={e => setText(e.target.value)}
                style={{height: !textAreaHeight ? "250px": "600px"}} 
            />
        </div>
        <div id="preview">
            <div className="header">
                <h3>Previewer</h3>
                <h3 className=" icon">/</h3>
            </div>
            <div className="visual-preview">
                <Markdown>{text}</Markdown>;
            </div>
        </div>
    </div>
  );
}

export default App;
