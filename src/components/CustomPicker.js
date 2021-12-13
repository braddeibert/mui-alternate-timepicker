import { Popper, Paper, ClickAwayListener } from "@mui/material";
import TimeSelect from "./TimeSelect";
import PropTypes from "prop-types";
import "./styles.css";

const CustomPicker = ({ value, onChange, open, anchorEl, onClose }) => {
  return open ? (
    <ClickAwayListener onClickAway={onClose}>
      <Popper open={open} anchorEl={anchorEl} placement="bottom-start">
        <Paper className="picker">
          <TimeSelect value={value} onChange={onChange} />
        </Paper>
      </Popper>
    </ClickAwayListener>
  ) : null;
};

CustomPicker.defaultProps = {
  value: null,
};

CustomPicker.propTypes = {
  value: PropTypes.object,
  onChange: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  anchorEl: PropTypes.object.isRequired,
};

export default CustomPicker;
