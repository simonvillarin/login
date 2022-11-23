import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./components/Login";
import Dashboard from "./components/Dashboard";

function App() {
  const [username, setUsername] = useState("");

  const handleUsername = (user) => setUsername(user);
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Login handleUsername={handleUsername} />} />
          <Route
            path="/dashboard"
            element={<Dashboard username={username} />}
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
