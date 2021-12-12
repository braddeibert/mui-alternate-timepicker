import { Popper, Paper, ClickAwayListener } from "@mui/material";
import "./customPicker.css";

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
          testing
        </Paper>
      </Popper>
    </ClickAwayListener>
  ) : null;
};

export default CustomPicker;
