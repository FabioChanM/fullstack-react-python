import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { TaskPage } from "./pages/TaskPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/task" element={<TaskPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
