import "./App.css";
import Register from "./components/Register";
import EmployeeDashboard from "./components/EmployeeDashboard";
import EmployerDashboard from "./components/EmployerDashboard";
import PostAJob from "./components/PostAJob";
import JobPage from "./components/JobPage";
import Apply from "./components/Apply";
import Login from "./components/Login";
import { BrowserRouter, Routes, Route } from "react-router-dom";


function App() {
  return (
    <div className="App bg-grey">
      <BrowserRouter>
        <Routes>
          <Route path="/register" element={<Register />} />
          <Route path="/employee-dashboard" element={<EmployeeDashboard />} />
          <Route path="/employer-dashboard" element={<EmployerDashboard />} />
          <Route path="/job-information/:postingId" element={<JobPage />} />
          <Route path="/employer/post-a-job" element={<PostAJob />} />
          <Route path="/employee/apply/:postingId" element={<Apply />} />
         
          <Route path="/login" element={<Login />} />
          
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
