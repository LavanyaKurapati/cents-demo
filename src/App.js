import "./App.css";
import "./global.scss";
import Dashboard from "./components/Dashboard/dashboard";
import Header from "./components/Header/header";
import Navbar from "./components/Navbar/navbar";
import { BrowserRouter as Router } from "react-router-dom";

function App() {
  return (
    <Router>
      <Header />
      <div className="app-container">
        <Navbar />
        <Dashboard />
      </div>
    </Router>
  );
}

export default App;
