import { useState } from "react";
import TextField from "@mui/material/TextField";
import Input from "@mui/material/Input";
import InputAdornment from "@mui/material/InputAdornment";

export const FormInput = () => {
  const [values, setValues] = useState({
    amount: "",
    password: "",
    weight: "",
    weightRange: "",
    showPassword: false
  });

  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };
  return (
    <Input
      sx={{ textAlign: "right" }}
      id="standard-adornment-weight"
      value={values.weight}
      onChange={handleChange("weight")}
      endAdornment={<InputAdornment position="end">pt</InputAdornment>}
      aria-describedby="standard-weight-helper-text"
      inputProps={{
        "aria-label": "weight"
      }}
    />
  );
};
