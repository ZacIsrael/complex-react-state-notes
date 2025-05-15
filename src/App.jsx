import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  // How to create a React app: npm create vite@latest {app-name} -- --template react

  const [count, setCount] = useState(0);

  // varible and fucntion to manage state of the user's first name
  const [firstName, setFirstName] = useState("");

  // varible and fucntion to manage state of the user's last name
  const [lastName, setLastName] = useState("");

  const [fNameHeading, setFNameHeading] = useState("");

  const [lNameHeading, setLNameHeading] = useState("");

  function handleFirstNameChange (){

    // variable that stores what the user has typed
    let val = event.target.value;

    // variable that stores the type of input that is expected
    let type = event.target.type;

    // variable that stores the placeholder text
    let placeholder = event.target.placeholder;

    console.log("handleFirstNameChange():  val = ", val, "type = ", type, "placeholder = ", placeholder);
    // sets the value of the name to the value of the user's input as they type
    setFirstName(val);

  }

  function handleLastNameChange (){

    // variable that stores what the user has typed
    let val = event.target.value;

    // variable that stores the type of input that is expected
    let type = event.target.type;

    // variable that stores the placeholder text
    let placeholder = event.target.placeholder;

    console.log("handleLastNameChange():  val = ", val, "type = ", type, "placeholder = ", placeholder);
    // sets the value of the name to the value of the user's input as they type
    setLastName(val);
  }

  function handleClickSubmitBtn (){
    console.log("handleClickSubmitBtn(): ");

    // retrieve the button that was clicked
    let btn = event.target;
    // make the background of the button black once it's clicked
    btn.style.backgroundColor = "black";

    // turn the background back white after 0.05 seconds
    setTimeout(() => {
      btn.style.backgroundColor = "white";
    }, 50);

     // updates the first and last names in the headings with names that the user typed in to the input HTML elements
     setFNameHeading(firstName);
     setLNameHeading(lastName);

     event.preventDefault();
  }

  return (
    <>
      <div className="container">
        <h1>Hello {firstName} {lastName}</h1>
        {/* <h1>Hello {fNameHeading} {lNameHeading}</h1> */}
        <form>
          <input onChange={handleFirstNameChange} name="fName" placeholder="First Name" />
          <input onChange={handleLastNameChange} name="lName" placeholder="Last Name" />
          <button>Submit</button>
          {/* <button onClick={handleClickSubmitBtn}>Submit</button> */}
        </form>
      </div>
    </>
  );
}

export default App;
