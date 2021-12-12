import TextField from "@mui/material/TextField";
import AdapterMoment from "@mui/lab/AdapterMoment";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import MuiTimePicker from "@mui/lab/TimePicker";
import { useState } from "react";

export default function TimePicker() {
  const [value, setValue] = useState(null);

  return (
    <LocalizationProvider dateAdapter={AdapterMoment}>
      <MuiTimePicker
        label="Basic example"
        value={value}
        onChange={(newValue) => {
          setValue(newValue);
        }}
        renderInput={(params) => <TextField {...params} />}
      />
    </LocalizationProvider>
  );
}
