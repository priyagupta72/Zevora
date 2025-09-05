import React from "react";

const BlogCard = ({ title, date, summary }) => {
  return (
    <div style={{ border: "1px solid #ccc", padding: "15px", marginBottom: "20px", borderRadius: "8px" }}>
      <h3>{title}</h3>
      <p>{date}</p>
      <p>{summary}</p>
    </div>
  );
};

export default BlogCard;
