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

  return (
    <div style={{
      maxWidth: "400px",
      margin: "auto",
      padding: "20px",
      background: "#fff",
      borderRadius: "12px",
      boxShadow: "0 4px 10px rgba(0,0,0,0.1)"
    }}>
      <h2 style={{ textAlign: "center" }}>📝 Feedback Form</h2>

      <form onSubmit={handleSubmit}>

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
          placeholder="Comments"
          value={formData.comments}
          onChange={handleChange}
          required
          style={{ ...inputStyle, height: "80px" }}
        />

        <button style={btnStyle} type="submit">
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

export default FeedbackForm;