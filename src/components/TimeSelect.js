import { useState, useEffect } from "react";
import { Box, Stack } from "@mui/material";
import SelectOption from "./SelectOption";
import "./styles.css";
import moment from "moment";

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

const TimeSelect = ({ value, onChange }) => {
  const [hour, setHour] = useState(value.format("hh"));
  const [minute, setMinute] = useState(value.format("mm"));
  const [amPm, setAmPm] = useState(value.format("A"));

  const handleClick = (setter) => (e) => setter(e.target.innerHTML);

  useEffect(() => {
    const timeSelected = moment(`${hour}:${minute} ${amPm}`, "hh:mm A");

    if (timeSelected.isValid()) {
      if (!timeSelected.isSame(value, "minute")) {
        onChange(timeSelected);
      }
    }
  });

  return (
    <Box className="timeSelect">
      <Box>
        <h6 className="selectListHeading scroll">H</h6>
        <Stack sx={{ display: "grid" }} className="selectList scroll">
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
      <Box>
        <h6 className="selectListHeading scroll">M</h6>
        <Stack sx={{ display: "grid" }} className="selectList scroll">
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
