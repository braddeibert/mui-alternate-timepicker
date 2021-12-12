import TextField from "@mui/material/TextField";
import AdapterMoment from "@mui/lab/AdapterMoment";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import MuiTimePicker from "@mui/lab/TimePicker";
import { useState, useRef } from "react";
import CustomPicker from "./CustomPicker";

export default function TimePicker({ labelText }) {
  const input = useRef();

  const [value, setValue] = useState();
  const [customPickerOpen, setCustomPickerOpen] = useState(false);
  const togglePicker = () => setCustomPickerOpen(!customPickerOpen);

  return (
    <>
      <LocalizationProvider dateAdapter={AdapterMoment}>
        <MuiTimePicker
          ref={input}
          label={labelText}
          value={value}
          open={false}
          onChange={(newValue) => {
            setValue(newValue);
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
