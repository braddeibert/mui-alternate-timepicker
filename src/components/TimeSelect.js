import { useState } from "react";
import { Box, Stack } from "@mui/material";
import SelectOption from "./SelectOption";
import "./styles.css";

const HOURS = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"];
const MINUTES = [
  "00",
  "05",
  "10",
  "15",
  "20",
  "25",
  "30",
  "35",
  "40",
  "45",
  "50",
  "55",
];
const AMPM = ["AM", "PM"];

const TimeSelect = ({ value }) => {
  const [hour, setHour] = useState("1");
  const [minute, setMinute] = useState("00");
  const [amPm, setAmPm] = useState("AM");

  const handleClick = (setter) => (e) => setter(e.target.innerHTML);

  return (
    <Box className="timeSelect">
      <Box className="scroll">
        <h6 className="selectListHeading">H</h6>
        <Stack sx={{ display: "grid" }} className="selectList">
          {HOURS.map((hours) => (
            <SelectOption
              onClick={handleClick(setHour)}
              value={hours}
              key={hours}
              isActive={hour === hours}
            />
          ))}
        </Stack>
      </Box>
      <Box className="scroll">
        <h6 className="selectListHeading">M</h6>
        <Stack sx={{ display: "grid" }} className="selectList">
          {MINUTES.map((minutes) => (
            <SelectOption
              onClick={handleClick(setMinute)}
              value={minutes}
              key={minutes}
              isActive={minute === minutes}
            />
          ))}
        </Stack>
      </Box>
      <Box>
        <div className="emptyHeading" />
        <Stack sx={{ display: "grid" }} className="selectList">
          {AMPM.map((amPM) => (
            <SelectOption
              onClick={handleClick(setAmPm)}
              value={amPM}
              key={amPM}
              isActive={amPm === amPM}
            />
          ))}
        </Stack>
      </Box>
    </Box>
  );
};

export default TimeSelect;
