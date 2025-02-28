import { BrowserRouter } from "react-router-dom";

import { Router } from "./router/Router";

function App() {
  return (
    <BrowserRouter>
      <h1 className="text-3xl font-bold underline">
        Hello world!
      </h1>
      <Router />
    </BrowserRouter>
  )
}

export default App
