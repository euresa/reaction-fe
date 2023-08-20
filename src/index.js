import React from "react";
import { render } from 'react-dom';

import {Main} from "./components/Main";
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <main>
      <Main />
    </main>
  )
}

const rootElement = document.getElementById("root")
render(<App />, rootElement)
