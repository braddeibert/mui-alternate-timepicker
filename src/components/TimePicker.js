import TextField from "@mui/material/TextField";
import AdapterMoment from "@mui/lab/AdapterMoment";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import MuiTimePicker from "@mui/lab/TimePicker";
import { useState, useRef } from "react";
import CustomPicker from "./CustomPicker";

export default function MuiAlternateTimePicker({ value, onChange, labelText }) {
  const input = useRef();

  const [customPickerOpen, setCustomPickerOpen] = useState(false);
  const togglePicker = () => setCustomPickerOpen(!customPickerOpen);

  return (
    <>
      <LocalizationProvider dateAdapter={AdapterMoment}>
        <MuiTimePicker
          ref={input}
          label={labelText}
          value={value}
          open={false} // prevents default mui picker from opening
          onChange={(newValue) => {
            onChange(newValue);
          }}
          renderInput={(params) => <TextField {...params} />}
          InputAdornmentProps={{
            onClick: togglePicker,
          }}
        />
      </LocalizationProvider>
      <CustomPicker
        open={customPickerOpen}
        anchorEl={input.current}
        onClose={togglePicker}
      />
    </>
  );
}
