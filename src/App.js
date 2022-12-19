//libs
import {BrowserRouter, Route, Routes} from "react-router-dom"
//components
import GlobalStyle from "./GlobalStyle";
import Login from "./components/Login";
import SignUp from "./components/SignUp";
import Habits from "./components/Habits"
import Today from "./components/Today";
import Historic from "./components/Historic";
import { useState } from "react";

function App() {
  const [userInfo, setUserInfo] = useState({})

  return (
    <BrowserRouter>
      <GlobalStyle/>

      <Routes>
        <Route path="/" element={<Login setUserInfo={setUserInfo}/>}/>
        <Route path="/cadastro" element={<SignUp/>}/>
        <Route path="/habitos" element={<Habits userInfo={userInfo}/>}/>
        <Route path="/hoje" element={<Today userInfo={userInfo}/>}/>
        <Route path="/historico" element={<Historic userInfo={userInfo}/>}/>
      </Routes>
      
    </BrowserRouter>
  );
}

export default App;
