import { Button } from "@mui/material";
import PropTypes from "prop-types";

const SelectOption = ({ value, onClick, isActive }) => {
  const sharedStyles = {
    width: 36,
    height: 36,
    borderRadius: "50%",
    minWidth: "unset",
  };

  return (
    <Button
      onClick={onClick}
      sx={
        isActive
          ? {
              color: "common.white",
              backgroundColor: "primary.main",
              ...sharedStyles,
              "&:hover": {
                backgroundColor: "primary.main",
              },
            }
          : {
              color: "common.black",
              ...sharedStyles,
              "&:hover": {
                backgroundColor: "grey.200",
              },
            }
      }
    >
      {value}
    </Button>
  );
};

SelectOption.defaultProps = {
  isActive: false,
};

SelectOption.propTypes = {
  value: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  isActive: PropTypes.bool,
};

export default SelectOption;
