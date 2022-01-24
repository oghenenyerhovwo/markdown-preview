import {useState} from "react";
function App() {
  const [textAreaHeight, setTextAreaHeight] = useState(false)
  return (
    <div>
        <div id="editor">
            <div className="header">
                <h3>Editor</h3>
                <h3 onClick={() => setTextAreaHeight(prevHeight => !prevHeight)} className=" icon">/</h3>
            </div>
            <textarea style={{height: !textAreaHeight ? "250px": "600px"}} />
        </div>
        <div id="preview">
            <div className="header">
                <h3>Previewer</h3>
                <h3 className=" icon">/</h3>
            </div>
            <div className="visual-preview"></div>
        </div>
    </div>
  );
}

export default App;
