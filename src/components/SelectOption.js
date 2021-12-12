import "./styles.css";

const SelectOption = ({ value, onClick, isActive }) => {
  return (
    <span
      className={isActive ? "selectOption active" : "selectOption"}
      onClick={onClick}
    >
      {value}
    </span>
  );
};

export default SelectOption;
