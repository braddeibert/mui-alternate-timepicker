import { Button } from "@mui/material";

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

export default SelectOption;
