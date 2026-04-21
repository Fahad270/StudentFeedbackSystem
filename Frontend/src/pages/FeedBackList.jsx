import { useEffect, useState } from "react";
import FeedbackCard from "../components/FeedbackCard";

function FeedbackList() {
  const [feedbacks, setFeedbacks] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/api/feedback")
      .then(res => res.json())
      .then(data => setFeedbacks(data))
      .catch(err => console.error(err));
  }, []);

  return (
    <div style={{
      maxWidth: "600px",
      margin: "auto",
      padding: "20px"
    }}>
      <h2 style={{ textAlign: "center" }}>📊 All Feedbacks</h2>

      {feedbacks.length === 0 ? (
        <p style={{ textAlign: "center", color: "#777" }}>
          No feedback yet 😅
        </p>
      ) : (
        feedbacks.map((item) => (
          <FeedbackCard key={item._id} {...item} />
        ))
      )}
    </div>
  );
}

export default FeedbackList;