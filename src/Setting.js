import { useState } from "react";

import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";

export const Setting = () => {
  const [members, setMembers] = useState();
  const [chip, setChip] = useState();
  const [yakitori, setYakitori] = useState();
  const [complete, setComplete] = useState();

  // const onChange = (e) => {
  //   console.log(e);
  // };

  return (
    <>
      <h5>設定</h5>
      <p>対戦相手</p>

      <p>チップあり</p>
      <FormGroup>
        <FormControlLabel control={<Checkbox defaultChecked />} label="あり" />
        <FormControlLabel disabled control={<Checkbox />} label="なし" />
      </FormGroup>
      <p>焼き鳥あり</p>
      <FormGroup>
        <FormControlLabel control={<Checkbox defaultChecked />} label="あり" />
        <FormControlLabel disabled control={<Checkbox />} label="なし" />
      </FormGroup>
    </>
  );
};
