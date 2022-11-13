// import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./Login";
import Register from "./Register";
import Error from "./Error";
import Navbar from "./Navbar";
import { useState } from "react";
import Info from "./Info";
import Field from "./Field";

const App = () => {
  const [token, setToken] = useState(localStorage.getItem("usertoken" ?? null));
  return (
    <>
      <div className="App">
        <Router>
          <Navbar />
          <Routes>
            <Route
              path="/"
              element={token ? <Info/>: <Login token={token} settoken={setToken} />}
            />
            <Route path="/register" element={<Register />} />
            <Route path="/field" element={<Field />} />
            <Route path="*" element={<Error />} />
          </Routes>
        </Router>
      </div>
    </>
  );
};

export default App;
