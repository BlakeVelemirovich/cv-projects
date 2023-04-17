import { useState } from "react";

function App() {
  const [edit, setEdit] = useState(false);
  const [text, setText] = useState('Hello World');

  const handleEdit = () => {
    setEdit(!edit);
  }

  const handleChange = (e) => {
    setText(e.target.value);
  }

  return (
    <div className="App">
      {!edit ? text : <input type="text" value={text} onChange={handleChange}/>} 
      <button onClick={handleEdit}>edit</button>
    </div>
  );
}

export default App;
