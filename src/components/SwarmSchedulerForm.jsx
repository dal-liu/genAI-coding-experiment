import React, { useState } from "react";
import { Container, TextField, Button, Typography, Box } from "@mui/material";
import Notification from "./Notification"; // Import the Notification component

const SwarmSchedulerForm = () => {
  const [formData, setFormData] = useState({
    description: "",
    link: "",
    startTime: "",
    endTime: "",
  });

  const [errors, setErrors] = useState({});
  const [notificationOpen, setNotificationOpen] = useState(false);

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

    // Check if startTime is before endTime
    if (formData.startTime && formData.endTime) {
      const startTime = new Date(formData.startTime);
      const endTime = new Date(formData.endTime);

      if (startTime >= endTime) {
        newErrors.startTime = "Start time must be before end time";
        newErrors.endTime = "End time must be after start time";
      }
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validateForm()) {
      console.log("Form submitted:", formData);
      // Add logic to handle form submission, such as sending data to the server

      // Show success notification
      setNotificationOpen(true);

      // Clear form data
      setFormData({
        description: "",
        link: "",
        startTime: "",
        endTime: "",
      });
    }
  };

  const handleNotificationClose = () => {
    setNotificationOpen(false);
  };

  return (
    <Container maxWidth="sm">
      <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 3 }}>
        <Typography variant="h6" gutterBottom>
          Schedule a Swarm
        </Typography>
        <TextField
          fullWidth
          margin="normal"
          label="Description"
          name="description"
          value={formData.description}
          onChange={handleChange}
          error={Boolean(errors.description)}
          helperText={errors.description}
        />
        <TextField
          fullWidth
          margin="normal"
          label="Link"
          name="link"
          type="url"
          value={formData.link}
          onChange={handleChange}
          error={Boolean(errors.link)}
          helperText={errors.link}
        />
        <TextField
          fullWidth
          margin="normal"
          label="Start Time"
          name="startTime"
          type="datetime-local"
          value={formData.startTime}
          onChange={handleChange}
          error={Boolean(errors.startTime)}
          helperText={errors.startTime}
          InputLabelProps={{
            shrink: true,
          }}
        />
        <TextField
          fullWidth
          margin="normal"
          label="End Time"
          name="endTime"
          type="datetime-local"
          value={formData.endTime}
          onChange={handleChange}
          error={Boolean(errors.endTime)}
          helperText={errors.endTime}
          InputLabelProps={{
            shrink: true,
          }}
        />
        <Button
          type="submit"
          fullWidth
          variant="contained"
          color="primary"
          sx={{ mt: 2 }}
        >
          Schedule Swarm
        </Button>
      </Box>
      <Notification
        open={notificationOpen}
        message="Swarm scheduled successfully!"
        onClose={handleNotificationClose}
      />
    </Container>
  );
};

export default SwarmSchedulerForm;
