import "./App.css";
import Dashboard from "./components/Dashboard/Dashboard";
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
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
