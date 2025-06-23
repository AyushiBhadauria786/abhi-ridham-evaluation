import { useReducer, useState } from "react";
import "./App.css";
import ThemeButton from "./components/ThemeButton";
import Timer from "./components/Timer";
import UserProfile from "./components/UserProfile";
import { ThemeProvider } from "./context/ThemeContext";
import ValueChangeDetector from "./components/ValueChangeDetector";
import GenerateValue from "./components/GenerateValue";
import MyForm from "./components/MyForm";
import SeachComponent from "./components/SeachComponent";

function App() {
  const [value, setValue] = useState(1);

  return (
    <>
      <UserProfile /> {/* usestate, usememo */}
      {/* <Timer />              */}
      <ThemeProvider>
        <div>
          <h1>My App</h1>
          <ThemeButton /> {/* context */}
        </div>
      </ThemeProvider>
      <p>Click change button to see action</p>
      <button onClick={() => setValue((prev) => prev + 1)}>Change</button>
      <ValueChangeDetector value={value} />
      {/* <Counter /> */}
      <GenerateValue />
      <MyForm />
      <SeachComponent />
    </>
  );
}

export default App;

// function reducer(state, action) {
//   if (action.type === "incremented_age") {
//     return {
//       age: state.age + 1,
//     };
//   }
//   throw Error("Unknown action.");
// }

// export function Counter() {
//   const [state, dispatch] = useReducer(reducer, { age: 42 });

//   return (
//     <>
//       <button
//         onClick={() => {
//           dispatch({ type: "incremented_age" });
//         }}
//       >
//         Increment age
//       </button>
//       <p>Hello You are {state.age} year old.</p>
//     </>
//   );
// }
