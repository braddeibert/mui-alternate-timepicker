import { Popper, Paper, ClickAwayListener } from "@mui/material";
import TimeSelect from "./TimeSelect";
import "./styles.css";

const CustomPicker = ({ open, anchorEl, onClose, PopperProps, PaperProps }) => {
  return open ? (
    <ClickAwayListener onClickAway={onClose}>
      <Popper
        open={open}
        anchorEl={anchorEl}
        placement="bottom-start"
        {...PopperProps}
      >
        <Paper className="picker" {...PaperProps}>
          <TimeSelect />
        </Paper>
      </Popper>
    </ClickAwayListener>
  ) : null;
};

export default CustomPicker;
