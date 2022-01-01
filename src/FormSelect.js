import { useState } from "react";

import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import { ViewArraySharp } from "@material-ui/icons";

export const FormSelect = () => {
  const [age, setAge] = useState("");

  const handleChange = (event) => {
    console.log(event.target.value);
    setAge(event.target.value);
  };
  return (
    <>
      {/* <InputLabel id="demo-simple-select-label">Age</InputLabel> */}
      <Select
        variant="standard"
        sx={{ width: "100%" }}
        labelId="demo-simple-select-label"
        id="demo-simple-select"
        value={age}
        label="Age"
        onChange={handleChange}
      >
        {arrays.map((array, index) => (
          <MenuItem sx={{ width: "100%" }} value={array}>
            {array}
          </MenuItem>
        ))}
      </Select>
    </>
  );
};

const arrays = [
  "点1",
  "点2",
  "点3",
  "点4",
  "点5",
  "点6",
  "点7",
  "点8",
  "点9",
  "点10"
];
