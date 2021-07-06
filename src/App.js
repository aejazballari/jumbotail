import { useState } from "react";
import Login from "./components/login";

function App() {
  // const [input, setInput] = useState({
  //   user: "",
  //   password: "",
  // });
  // const handleChange = (e) => {
  //   [e.target.name] = setInput(e.target.value);
  // };

  return (
    <div>
      <Login />
    </div>
  );
}

export default App;
