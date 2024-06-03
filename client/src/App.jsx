import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { TaskPage } from "./pages/TaskPage";
import { TaskFormPage } from "./pages/TaskForm";
import { Navigation } from "./molecules/Navigate";

function App() {
  return (
    <BrowserRouter>
      <Navigation />
      <Routes>
        <Route path="/tasks" element={<TaskPage />} />
        <Route path="/" element={<Navigate to="/tasks" />} />
        <Route path="/tasks-create" element={<TaskFormPage />} />
        <Route path="/tasks/:id" element={<TaskFormPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
