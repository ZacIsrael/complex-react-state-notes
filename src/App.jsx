import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  // How to create a React app: npm create vite@latest {app-name} -- --template react

  const [count, setCount] = useState(0);

  // object and functions to manage state of the user's first & last names
  const [fullName, setFullName] = useState({
    // fullName is an object that has firstName and lastName as properties
    firstName: "",
    lastName: "",
  });

  const [fullNameHeading, setFullNameHeading] = useState({});

  // variable and function to manage state of the user's first name
  // const [firstName, setFirstName] = useState("");

  // variable and function to manage state of the user's last name
  // const [lastName, setLastName] = useState("");

  // const [fNameHeading, setFNameHeading] = useState("");

  // const [lNameHeading, setLNameHeading] = useState("");

  function handleFullNameChange(event) {
    // variable that stores what the user has typed
    let val = event.target.value;

    // figure out which input triggered this event (name field in the input element (firstName or lastName))
    let inputName = event.target.name;

    // only update the name(s) in the full name that have been modified

    // variable that stores the type of input that is expected
    let type = event.target.type;

    // variable that stores the placeholder text
    let placeholder = event.target.placeholder;

    console.log(
      "handleFirstNameChange():  val = ",
      val,
      "type = ",
      type,
      "inputName = ",
      inputName
    );
    // sets the value of the name to the value of the user's input as they type
    setFullName((prevValue) => {
      // prevValue gets hold of the previous value of the fullName object
      console.log("previous value = ", prevValue);

      if (inputName === "firstName") {
        // input box with the name of "firstName" was modified
        // return new object with the updated firstName and the previous value's last name
        return {
          firstName: val,
          lastName: prevValue.lastName,
        };
      } else if (inputName === "lastName") {
        // input box with the name of "lastName" was modified
        // return new object with the updated lastName and the previous value's first name
        return {
          firstName: prevValue.firstName,
          lastName: val,
        };
      }
    });
  }
  /*
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

  } */

  /*
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
  } */

  function handleClickSubmitBtn() {
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
    // setFNameHeading(firstName);
    // setLNameHeading(lastName);

    event.preventDefault();
  }

  return (
    <>
      <div className="container">
        <h1>
          Hello {fullName.firstName} {fullName.lastName}
        </h1>
        {/* <h1>Hello {fNameHeading} {lNameHeading}</h1> */}
        <form>
          <input
            onChange={handleFullNameChange}
            name="firstName"
            placeholder="First Name"
            value={fullName.firstName}
          />
          <input
            onChange={handleFullNameChange}
            name="lastName"
            placeholder="Last Name"
            value={fullName.lastName}
          />
          <button>Submit</button>
          {/* <button onClick={handleClickSubmitBtn}>Submit</button> */}
        </form>
      </div>
    </>
  );
}

export default App;
