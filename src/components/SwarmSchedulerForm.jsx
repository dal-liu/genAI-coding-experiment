import React, { useState } from "react";
import "./SwarmSchedulerForm.css";

const SwarmSchedulerForm = () => {
  const [formData, setFormData] = useState({
    description: "",
    link: "",
    startTime: "",
    endTime: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.description)
      newErrors.description = "Description is required";
    if (!formData.link) newErrors.link = "Link is required";
    if (!formData.startTime) newErrors.startTime = "Start time is required";
    if (!formData.endTime) newErrors.endTime = "End time is required";

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validateForm()) {
      console.log("Form submitted:", formData);
      // Add logic to handle form submission, such as sending data to the server
      setFormData({
        description: "",
        link: "",
        startTime: "",
        endTime: "",
      });
    }
  };

  return (
    <form onSubmit={handleSubmit} className="swarm-scheduler-form">
      <div>
        <label>
          Description:
          <input
            type="text"
            name="description"
            value={formData.description}
            onChange={handleChange}
          />
        </label>
        {errors.description && (
          <span className="error">{errors.description}</span>
        )}
      </div>

      <div>
        <label>
          Link:
          <input
            type="url"
            name="link"
            value={formData.link}
            onChange={handleChange}
          />
        </label>
        {errors.link && <span className="error">{errors.link}</span>}
      </div>

      <div>
        <label>
          Start Time:
          <input
            type="datetime-local"
            name="startTime"
            value={formData.startTime}
            onChange={handleChange}
          />
        </label>
        {errors.startTime && <span className="error">{errors.startTime}</span>}
      </div>

      <div>
        <label>
          End Time:
          <input
            type="datetime-local"
            name="endTime"
            value={formData.endTime}
            onChange={handleChange}
          />
        </label>
        {errors.endTime && <span className="error">{errors.endTime}</span>}
      </div>

      <button type="submit">Schedule Swarm</button>
    </form>
  );
};

export default SwarmSchedulerForm;
