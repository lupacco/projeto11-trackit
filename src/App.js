//libs
import {BrowserRouter, Route, Routes} from "react-router-dom"
//components
import GlobalStyle from "./GlobalStyle";
import Login from "./components/Login";
import SignUp from "./components/SignUp";
import Habits from "./components/Habits"

function App() {
  return (
    <BrowserRouter>
      <GlobalStyle/>

      <Routes>
        <Route path="/" element={<Login/>}/>
        <Route path="/cadastro" element={<SignUp/>}/>
        <Route path="/habitos" element={<Habits/>}/>
      </Routes>
      
    </BrowserRouter>
  );
}

export default App;
