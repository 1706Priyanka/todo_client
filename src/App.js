import "./App.css";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { ContextProvider } from "./context/AuthContext";
import Header from "./component/Header";
import Login from "./component/Login";
import Register from "./component/Register";

function App() {
  const token = localStorage.getItem("token");
  return (
    <div className="App">
      <BrowserRouter>
        <ContextProvider>
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route
              path="/contacts"
              element={token ? <Header /> : <Navigate replace to={"/"} />}
            />
          </Routes>
        </ContextProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
