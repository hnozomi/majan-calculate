import { useState } from "react";

import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import TextField from "@mui/material/TextField";
import { Typography } from "@mui/material";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";

export const Setting = (props) => {
  const { onComplate } = props;
  const [members, setMembers] = useState({
    first: "",
    second: "",
    third: "",
    fourth: ""
  });
  const [chip, setChip] = useState("チップあり");
  const [yakitori, setYakitori] = useState("焼き鳥あり");
  const [chipcheck, setChipCheck] = useState(false);
  const [yakitoricheck, setYakitoriCheck] = useState(false);

  const onChangeChip = (e) => {
    setChip(e.target.value);
    setChipCheck(!chipcheck);
  };
  const onChangeYakitori = (e) => {
    setYakitori(e.target.value);
    setYakitoriCheck(!yakitoricheck);
  };
  const onSubmit = (e) => {
    e.preventDefault();
    onComplate();
    localStorage.setItem("Member1", members.first);
    localStorage.setItem("Member2", members.second);
    localStorage.setItem("Member3", members.third);
    localStorage.setItem("Member4", members.fourth);
    localStorage.setItem("chip", chip);
    localStorage.setItem("yakitori", yakitori);
  };
  const onChange = (e) => {
    e.preventDefault();
    const number = e.target.name;
    const tempMembers = { ...members, [number]: e.target.value };
    setMembers(tempMembers);
  };

  const onClear = () => {
    localStorage.removeItem("Member1");
    localStorage.removeItem("Member2");
    localStorage.removeItem("Member3");
    localStorage.removeItem("Member4");
    localStorage.removeItem("yakitori");
    localStorage.removeItem("chip");
  };
  return (
    <Box sx={{ p: 2 }}>
      <Typography variant="h5" sx={{ mb: 3 }}>
        設定
      </Typography>
      <Button sx={{ mt: 1, mb: 1 }} variant="contained" onClick={onClear}>
        クリアする
      </Button>
      <form onSubmit={onSubmit}>
        <Typography sx={{ mb: 1 }}>対戦相手</Typography>
        <TextField
          id="standard-basic"
          label="1人目"
          variant="standard"
          value={members.first}
          name="first"
          onChange={onChange}
        />
        <TextField
          sx={{ marginLeft: 2 }}
          id="standard-basic"
          label="2人目"
          variant="standard"
          value={members.second}
          name="second"
          onChange={onChange}
        />
        <TextField
          sx={{ marginTop: 1 }}
          id="standard-basic"
          label="3人目"
          variant="standard"
          value={members.three}
          name="third"
          onChange={onChange}
        />
        <TextField
          sx={{ marginLeft: 2, marginTop: 1 }}
          id="standard-basic"
          label="4人目"
          variant="standard"
          value={members.fourth}
          name="fourth"
          onChange={onChange}
        />

        <Typography sx={{ mt: 3 }}>チップ</Typography>
        <FormGroup>
          <FormControlLabel
            control={<Checkbox defaultChecked />}
            label="あり"
            value="チップあり"
            checked={!chipcheck}
            onChange={onChangeChip}
          />
          <FormControlLabel
            control={<Checkbox />}
            label="なし"
            value="チップなし"
            checked={chipcheck}
            onChange={onChangeChip}
          />
        </FormGroup>
        <Typography sx={{ mt: 3 }}>焼き鳥</Typography>
        <FormGroup>
          <FormControlLabel
            control={<Checkbox defaultChecked />}
            label="あり"
            value="焼き鳥あり"
            checked={!yakitoricheck}
            onChange={onChangeYakitori}
          />
          <FormControlLabel
            control={<Checkbox />}
            label="なし"
            value="焼き鳥なし"
            checked={yakitoricheck}
            onChange={onChangeYakitori}
          />
        </FormGroup>
        <Box sx={{ textAlign: "right" }}>
          <Button variant="contained" type="submit">
            登録
          </Button>
        </Box>
      </form>
    </Box>
  );
};
