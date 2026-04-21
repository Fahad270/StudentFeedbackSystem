import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import FeedbackForm from "./pages/FeedbackForm";
import FeedbackList from "./pages/FeedbackList";

function App() {
  return (
    <BrowserRouter>
      
      {/* Navbar */}
      <nav style={{
        padding: "12px",
        background: "#222",
        color: "#fff",
        display: "flex",
        gap: "15px"
      }}>
        <Link style={{ color: "#fff" }} to="/">Add Feedback</Link>
        <Link style={{ color: "#fff" }} to="/feedbacks">View Feedbacks</Link>
      </nav>

      {/* Routes */}
      <Routes>
        <Route path="/" element={<FeedbackForm />} />
        <Route path="/feedbacks" element={<FeedbackList />} />
      </Routes>

    </BrowserRouter>
  );
}

export default App;