function customRender(reactElement, container) {
  /*
   const domElement= document.createElement(reactElement.type)
   domElement.innerHTML=reactElement.children
   domElement.setAttribute('href', reactElement.props.href)
   domElement.setAttribute('target', reactElement.props.target)
   container.appendChild(domElement)
   */
  // better approach
  const domElement = document.createElement(reactElement.type);
  domElement.innerHTML = reactElement.children;
  for (const prop in reactElement.props) {
    if(prop === 'children') continue;
    domElement.setAttribute(prop,reactElement.props[prop])
  }
  container.appendChild(domElement);
}

const reactElement = {
  type: "a",
  props: {
    href: "https://google.com",
    target: "_blank",
  },
  children: "Click me to visit google",
};
const mainContainer = document.querySelector("#root"); //  inject root by getting reference of it

customRender(reactElement, mainContainer); //what to inject and where . we have a custom method
