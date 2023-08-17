import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Header from "./Components/Header";
import AppBody from "./Components/AppBody"
import Chat from "./Components/Chat";
function App() {
  return (
    <div>
      <Router>
        <Header/>
        <AppBody/>
        <Routes>  
        {/* //old ver : switch mew is routes */}
          <Route path="/" exact />
        </Routes>
      </Router>
      
    </div>
  );
}

export default App;
