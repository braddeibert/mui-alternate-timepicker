import React from "react";
import { TextField } from "@mui/material";

export default {
  title: "Time Pickers/NativeTimePicker",
  component: TextField,
};

export const Primary = () => {
  return <TextField type="time" />;
};
