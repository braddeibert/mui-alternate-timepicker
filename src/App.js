import "./App.css";
import TimePicker from "./components/TimePicker";
import { TextField } from "@mui/material";

function App() {
  return (
    <div className="App">
      <h1>Material UI Alternate TimePicker</h1>
      <TimePicker labelText="Select Time" />
      <TextField type="time" />
    </div>
  );
}

export default App;
