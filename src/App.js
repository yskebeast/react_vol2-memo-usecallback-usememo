import { useState, useCallback } from "react";
import { ChildArea } from "../ChildArea";

import "./styles.css";

export default function App() {
  const [text, setText] = useState("");
  const [open, setOpen] = useState(false);

  const change = (event) => {
    setText(event.target.value);
  };

  const click = () => setOpen(!open);

  const close = useCallback(() => {
    setOpen(false);
  }, []);

  return (
    <div className="App">
      <input value={text} onChange={change}></input>
      <br />
      <br />
      <button onClick={click}>view</button>
      <ChildArea open={open} close={close} />
    </div>
  );
}
