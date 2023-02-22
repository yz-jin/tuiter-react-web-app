import logo from './logo.svg';
import './App.css';
import Labs from "./labs/index"
import HelloWorld from "./labs/a6/hello-world";
import Tuiter from "./tuiter/index";
import {BrowserRouter} from "react-router-dom";
import {Routes, Route} from "react-router";
function App() {
  return (
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
      <BrowserRouter>
          <div className="container">
              <Routes>
                  <Route path="/hello" element={<HelloWorld/>}/>
                  <Route index element={<Labs/>}/>
                  <Route path="/tuiter" element={<Tuiter/>}/>
              </Routes>
          </div>
      </BrowserRouter>

  );
}

export default App;
