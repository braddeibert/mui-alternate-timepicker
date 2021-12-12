import { Popper, Paper, ClickAwayListener } from "@mui/material";
import TimeSelect from "./TimeSelect";
import "./styles.css";

const CustomPicker = ({
  value,
  onChange,
  open,
  anchorEl,
  onClose,
  PopperProps,
  PaperProps,
}) => {
  return open ? (
    <ClickAwayListener onClickAway={onClose}>
      <Popper
        open={open}
        anchorEl={anchorEl}
        placement="bottom-start"
        {...PopperProps}
      >
        <Paper className="picker" {...PaperProps}>
          <TimeSelect value={value} onChange={onChange} />
        </Paper>
      </Popper>
    </ClickAwayListener>
  ) : null;
};

export default CustomPicker;
