import { useState, useEffect } from "react";
import { Box, Stack, Typography } from "@mui/material";
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
  const [hour, setHour] = useState(value?.format("h"));
  const [minute, setMinute] = useState(value?.format("mm"));
  const [amPm, setAmPm] = useState(value?.format("A"));

  useEffect(() => {
    const timeSelected = moment(`${hour}:${minute} ${amPm}`, "h:mm A");

    if (timeSelected.isValid()) {
      if (!timeSelected.isSame(value, "minute")) {
        onChange(timeSelected);
      }
    }
  }, [hour, minute, amPm, value]);

  return (
    <Box className="timeSelect">
      <Box>
        <Typography variant="overline" className="selectListHeading scroll">
          H
        </Typography>
        <Stack sx={{ display: "grid" }} className="selectList scroll">
          {HOURS.map((hours) => (
            <SelectOption
              onClick={() => setHour(hours)}
              value={hours}
              key={hours}
              isActive={hour === hours}
            />
          ))}
        </Stack>
      </Box>
      <Box>
        <Typography variant="overline" className="selectListHeading scroll">
          M
        </Typography>
        <Stack sx={{ display: "grid" }} className="selectList scroll">
          {MINUTES.map((minutes) => (
            <SelectOption
              onClick={() => setMinute(minutes)}
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
              onClick={() => setAmPm(amPM)}
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
