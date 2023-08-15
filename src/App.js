import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Header from "./Components/Header";
import AppBody from "./Components/AppBody"
function App() {
  return (
    <div>
      <Router>
        <Header/>
        <AppBody/>
        <Routes>  
        {/* //old ver : switch mew is routes */}
          <Route path="/" />
        </Routes>
      </Router>
      
    </div>
  );
}

export default App;
