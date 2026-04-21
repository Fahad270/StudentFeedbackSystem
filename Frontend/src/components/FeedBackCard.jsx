function FeedbackCard({ studentName, courseName, rating, comments }) {
  return (
    <div style={{
      background: "#fff",
      padding: "16px",
      marginBottom: "15px",
      borderRadius: "12px",
      boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
      transition: "0.3s"
    }}>
      <h3 style={{ marginBottom: "5px", color: "#333" }}>
        {studentName}
      </h3>

      <p style={{ color: "#666" }}>
        📚 <strong>{courseName}</strong>
      </p>

      <p style={{ margin: "8px 0" }}>
        ⭐ <strong>{rating}/5</strong>
      </p>

      <p style={{
        background: "#f9f9f9",
        padding: "10px",
        borderRadius: "8px",
        color: "#444"
      }}>
        "{comments}"
      </p>
    </div>
  );
}

export default FeedbackCard;