import Grid from "@mui/material/Grid";
import { DataGrid } from "@mui/x-data-grid";

import Button from "@material-ui/core/Button";
import { FormSelect } from "./FormSelect";
import { FormInput } from "./FormInput";
import { useState } from "react";

const member1 = localStorage.getItem("Member1");
const member2 = localStorage.getItem("Member2");
const member3 = localStorage.getItem("Member3");
const member4 = localStorage.getItem("Member4");

const mem1 = [100, 200, 300];

const rows = [
  {
    id: 1,
    member1: [mem1[0]],
    member2: [mem1[1]],
    member3: [mem1[2]]
  },
  { id: 2, member1: "", member2: "君の", member3: "555" },
  { id: 3, member1: "333", member2: "君が", member3: "666" },
  {
    id: 4,
    member2: "君が",
    member3: "666"
  }
];
// const rows = [
//   { id: 1, member1: "111", member2: "君は", member3: "444" },
//   { id: 2, member1: "", member2: "君の", member3: "555" },
//   { id: 3, member1: "333", member2: "君が", member3: "666" }
// ];

const renderRatingEditInputCell = () => {
  return <p>テスト</p>;
};

// カラムではなくてRowsでRenderCellsはできる？
const columns = [
  { field: "id", headerName: "ID", width: 100 },
  // 詳細ボタン
  {
    field: "editBtn",
    headerName: "詳細",
    sortable: false,
    width: 130,
    editable: true,
    // disableClickEventBubbling: true
    renderCell: (params) => <FormSelect param={params} />
  },
  {
    field: "member1",
    headerName: [member1],
    sortable: false,
    width: 100,
    editable: true,
    renderCell: (params) => <FormInput rows={rows} />
    // disableClickEventBubbling: true
  },
  {
    field: "member2",
    headerName: [member2],
    sortable: false,
    width: 100,
    editable: true
    // disableClickEventBubbling: true
    // renderCell: (params) => <FormInput rows={rows} />
  },
  {
    field: "member3",
    headerName: [member3],
    sortable: false,
    width: 100,
    editable: true,
    // disableClickEventBubbling: true
    renderCell: renderRatingEditInputCell
  },
  {
    field: "member4",
    headerName: [member4],
    sortable: false,
    width: 100,
    editable: true
    // disableClickEventBubbling: true
    // renderCell: (params) => <FormInput rows={rows} />
  }
  // { field: "member1", headerName: [member1], width: 100 } // member1だけにすると、文字列になる。[]で囲むことで変数扱いにできた
  // { field: "member2", headerName: [member2], width: 100 },
  // { field: "member3", headerName: [member3], width: 100 },
  // { field: "member4", headerName: [member4], width: 100 }
];
// const columns = [
//   { field: "id", headerName: "ID", width: 100 },
//   // 詳細ボタン
//   {
//     field: "editBtn",
//     headerName: "詳細",
//     sortable: false,
//     width: 130,
//     disableClickEventBubbling: true,
//     renderCell: (params) => <FormSelect />
//   },
//   {
//     field: "member1",
//     headerName: [member1],
//     sortable: false,
//     width: 100,
//     disableClickEventBubbling: true,
//     renderCell: (params) => <FormInput rows={rows} />
//   },
//   {
//     field: "member2",
//     headerName: [member2],
//     sortable: false,
//     width: 100,
//     disableClickEventBubbling: true,
//     renderCell: (params) => <FormInput rows={rows} />
//   },
//   {
//     field: "member3",
//     headerName: [member3],
//     sortable: false,
//     width: 100,
//     disableClickEventBubbling: true,
//     renderCell: (params) => <FormInput rows={rows} />
//   },
//   {
//     field: "member4",
//     headerName: [member4],
//     sortable: false,
//     width: 100,
//     disableClickEventBubbling: true,
//     renderCell: (params) => <FormInput rows={rows} />
//   }
//   // { field: "member1", headerName: [member1], width: 100 } // member1だけにすると、文字列になる。[]で囲むことで変数扱いにできた
//   // { field: "member2", headerName: [member2], width: 100 },
//   // { field: "member3", headerName: [member3], width: 100 },
//   // { field: "member4", headerName: [member4], width: 100 }
// ];

export const GridTest = () => {
  const [editRowsModel, setEditRowsModel] = useState();

  const handleEditRowsModelChange =
    ((model) => {
      console.log(model);
      setEditRowsModel(model);
    },
    []);
  return (
    <div style={{ height: 400, width: 800 }}>
      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={5}
        editMode="row"
        onEditRowsModelChange={handleEditRowsModelChange}
      />
    </div>
  );
};
