import "./App.css";
import { useState } from "react";
import TimePicker from "./components/TimePicker";
import moment from "moment";
import { TextField } from "@mui/material";

function App() {
  const [time, setTime] = useState(moment());

  return (
    <div className="App">
      <h1>Material UI Alternate TimePicker</h1>
      <TimePicker value={time} onChange={setTime} labelText="Select Time" />
      <TextField type="time" />
    </div>
  );
}

export default App;
