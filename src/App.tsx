import Landing from "./components/Landing";
import Return from "./components/Return";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Log from "./components/Log";
import Registration from "./components/Registration";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/return" element={<Return />} />
        <Route path="/log" element={<Log />} />
        <Route path="/registration" element={<Registration />} />
      </Routes>
    </Router>
  );
}
export default App;
