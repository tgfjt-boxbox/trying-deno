import React from "https://dev.jspm.io/react";
import ReactDOMServer from "https://dev.jspm.io/react-dom/server";

const App = (props) => <h1>{props.message}</h1>;
const str = ReactDOMServer.renderToString(<App message="Hello!" />);
console.log(str);
