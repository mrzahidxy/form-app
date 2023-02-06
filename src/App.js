import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Navigate,
  Route,
  Routes,
} from "react-router-dom";

import Login from "./pages/Login"
import Form from "./pages/Form"

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path={`/`} element={<Form />} />
          <Route path={`/login`} element={<Login />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
