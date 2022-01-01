import Grid from "@mui/material/Grid";
import { DataGrid } from "@mui/x-data-grid";

import Button from "@material-ui/core/Button";
import { FormSelect } from "./FormSelect";

const member1 = localStorage.getItem("Member1");
const member2 = localStorage.getItem("Member2");
const member3 = localStorage.getItem("Member3");
const member4 = localStorage.getItem("Member4");
// カラム
const columns = [
  // 削除ボタン
  // {
  //   field: "deleteBtn",
  //   headerName: "削除",
  //   sortable: false,
  //   width: 130,
  //   disableClickEventBubbling: true,
  //   renderCell: (params) => <Button />
  // },
  { field: "id", headerName: "ID", width: 100 },
  // 詳細ボタン
  {
    field: "editBtn",
    headerName: "詳細",
    sortable: false,
    width: 130,
    disableClickEventBubbling: true,
    renderCell: (params) => (
      // <Button variant="contained" color="primary">
      //   詳細
      // </Button>
      <FormSelect />
    )
  },
  { field: "member1", headerName: [member1], width: 100 }, // member1だけにすると、文字列になる。[]で囲むことで変数扱いにできた
  { field: "member2", headerName: [member2], width: 100 },
  { field: "member3", headerName: [member3], width: 100 },
  { field: "member4", headerName: [member4], width: 100 }
];

// データ
const rows = [
  { id: 1, member1: "健太", member2: "君の", member3: "ゆうき" },
  { id: 2, member1: "健太", member2: "君の", member3: "ゆうき" },
  { id: 3, member1: "健太", member2: "君の", member3: "ゆうき" }
];
// const rows = [
//   { id: 1, title: "君の膵臓をたべたい" },
//   { id: 2, title: "容疑者Ｘの献身" },
//   { id: 3, title: "コンビニ人間" },
//   { id: 4, title: "蹴りたい背中" },
//   { id: 5, title: "世界の中心で、愛を叫ぶ" }
// ];

export const GridTest = () => {
  return (
    <div style={{ height: 400, width: 800 }}>
      <DataGrid rows={rows} columns={columns} pageSize={5} />
    </div>
  );
};
