import Login from "./pages/Login";
import ServiceDetailWOS from "./pages/ServiceDetailWOS";
import SignUp from "./pages/Signup";
import "./Style.css";
import { BrowserRouter as Router, Route, Routes, HashRouter } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <HashRouter >
      
        <Routes>
          <Route path="/" element={<ServiceDetailWOS />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
        </Routes>
      </HashRouter>
      
    </div>
  );
}

export default App;
