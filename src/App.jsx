import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  // How to create a React app: npm create vite@latest {app-name} -- --template react

  const [count, setCount] = useState(0);

  return (
    <>
      <div className="container">
        <h1>Hello</h1>
        <form>
          <input name="fName" placeholder="First Name" />
          <input name="lName" placeholder="Last Name" />
          <button>Submit</button>
        </form>
      </div>
    </>
  );
}

export default App;
