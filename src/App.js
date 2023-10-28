import { useState } from "react";
import Header from "./components/Header/Header";
import ItemTable from "./components/ItemTable/ItemTable";
import { HashRouter, Routes, Route } from "react-router-dom";
import Loading from "./components/Loading/Loading";
import "./App.css";


function App() {
  const[count,setCount]=useState(0)

  return (
    <HashRouter>
      <div className="App">
        <div className="App-container">
          <div>
            <Header count={count} />
          </div>
          <Routes>
            <Route path="/" exact Component={Loading}></Route>
            <Route path="/ShowItems" Component={()=><ItemTable setCount={setCount} /> } />
          </Routes>
        </div>
      </div>
    </HashRouter>
  );
}

export default App;
