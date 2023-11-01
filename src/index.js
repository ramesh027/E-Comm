import { createRoot } from "react-dom/client";

import App from "./App";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(<App />);

// in order to create a react app u need have an empty html element
// in this html element all the things that you build in react would go inside this element
