import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";

const reactElement = {
  type: "a",
  props: {
    href: "https://google.com",
    target: "_blank",
  },
  children: "Click me to visit google",
};

function MyApp() {
  return (
    <>
      <div>
        <h1>Custom React app</h1>
      </div>
      <div>AnotherElement</div>
      <h1>My name is meet</h1>
      <p>i love my mom</p>
    </>
  );
}

const AnotherElement = (
  <a href="http://google.com" target="_blank">
    Visit Google
  </a>
);

const areactElement = React.createElement(
  // this is what react expects while rendering cuz it is object version of it
  "a",
  { href: "https://google.com", target: "_blank" },
  "click to visit google"
);

ReactDOM.createRoot(document.getElementById("root")).render(<App />)  ;
