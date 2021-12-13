import React, { useState } from "react";
import AlternateTimePicker from "../components/AlternateTimePicker";

export default {
  title: "Time Pickers/AlternateTimePicker",
  component: AlternateTimePicker,
};

export const Primary = () => {
  const [time, setTime] = useState();
  return (
    <AlternateTimePicker
      value={time}
      onChange={setTime}
      labelText="Select Time"
    />
  );
};
