import { useState } from "react";

function FeedbackForm() {
  const [formData, setFormData] = useState({
    studentName: "",
    courseName: "",
    rating: "",
    comments: ""
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch("http://localhost:3000/api/feedback", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          ...formData,
          rating: Number(formData.rating)
        })
      });

      const data = await res.json();
      console.log(data);

      alert("Feedback submitted ✅");

      setFormData({
        studentName: "",
        courseName: "",
        rating: "",
        comments: ""
      });

    } catch (err) {
      console.error(err);
    }
  };

  return (<div style={containerStyle}>
  <form style={formStyle} onSubmit={handleSubmit}>
    <h2 style={titleStyle}>📝 Feedback</h2>

    <input
      type="text"
      name="studentName"
      placeholder="Student Name"
      value={formData.studentName}
      onChange={handleChange}
      required
      style={inputStyle}
    />

    <input
      type="text"
      name="courseName"
      placeholder="Course Name"
      value={formData.courseName}
      onChange={handleChange}
      required
      style={inputStyle}
    />

    <input
      type="number"
      name="rating"
      placeholder="Rating (1-5)"
      min="1"
      max="5"
      value={formData.rating}
      onChange={handleChange}
      required
      style={inputStyle}
    />

    <textarea
      name="comments"
      placeholder="Your feedback..."
      value={formData.comments}
      onChange={handleChange}
      required
      style={{ ...inputStyle, height: "90px" }}
    />

    <button type="submit" style={btnStyle}>
      Submit 🚀
    </button>
  </form>
</div>
  );
}

const inputStyle = {
  width: "100%",
  padding: "10px",
  margin: "10px 0",
  borderRadius: "8px",
  border: "1px solid #ccc"
};

const btnStyle = {
  width: "100%",
  padding: "10px",
  background: "#4CAF50",
  color: "#fff",
  border: "none",
  borderRadius: "8px",
  cursor: "pointer"
};


const containerStyle = {
  height: "100vh",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  background: "linear-gradient(135deg, #0f172a, #1e293b)"
};

const formStyle = {
  backdropFilter: "blur(15px)",
  background: "rgba(255, 255, 255, 0.1)",
  padding: "30px",
  borderRadius: "16px",
  width: "320px",
  boxShadow: "0 8px 30px rgba(0,0,0,0.3)",
  display: "flex",
  flexDirection: "column",
  gap: "12px"
};

const titleStyle = {
  textAlign: "center",
  color: "#fff",
  marginBottom: "10px"
};

const inputStyle = {
  padding: "10px",
  borderRadius: "8px",
  border: "none",
  outline: "none",
  background: "rgba(255,255,255,0.2)",
  color: "#fff",
  fontSize: "14px"
};

const btnStyle = {
  padding: "10px",
  borderRadius: "8px",
  border: "none",
  background: "#22c55e",
  color: "#fff",
  fontWeight: "bold",
  cursor: "pointer",
  transition: "0.3s"
};

export default FeedbackForm;