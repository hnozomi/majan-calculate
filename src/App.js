import { useEffect, useState } from "react";

import MaterialTable from "material-table";
import { SettingsOverscanOutlined } from "@material-ui/icons";

export default function App() {
  const [members, setMembers] = useState([]);
  const [value, setValue] = useState();
  const [columns, setColumns] = useState([
    {
      title: "試合数",
      field: "itemName",
      // headerStyle: {
      //   minWidth: 850
      // },
      cellStyle: {
        minWidth: "100%"
      },
      editable: "never"
    },
    { title: "掛け金", field: "bet" },
    { title: "焼き鳥の有無", field: "yakitori" },
    { title: "健太    ", field: "mem1" },
    { title: "ゆうき   ", field: "mem2" },
    { title: "はまかた ", field: "mem3" }
  ]);
  const [data, setData] = useState([
    {
      itemName: "1",
      bet: "-",
      yakitori: "あり",
      mem1: 0,
      mem2: 0,
      mem3: 0
    },
    {
      itemName: 2,
      bet: "-",
      yakitori: 400,
      mem1: 0,
      mem2: 0,
      mem3: 0
    },
    {
      itemName: 3,
      bet: "-",
      yakitori: 500,
      mem1: 0,
      mem2: 0,
      mem3: 0
    },
    {
      itemName: 4,
      bet: "-",
      yakitori: 200,
      mem1: 0,
      mem2: 0,
      mem3: 0
    },
    {
      itemName: 5,
      bet: "-",
      yakitori: 250,
      mem1: 0,
      mem2: 0,
      mem3: 0
    },
    {
      itemName: "合計",
      bet: "-",
      yakitori: "-",
      mem1: 0,
      mem2: 0,
      mem3: 0
    },
    {
      itemName: "収支",
      bet: "-",
      yakitori: "-",
      mem1: 0,
      mem2: 0,
      mem3: 0
    }
  ]);

  // useEffect(() => {
  //   const total = data[0].mem1 + data[1].mem1 + data[2].mem1;
  //   console.log(total);
  // }, [data]);

  return (
    <>
      <MaterialTable
        columns={columns}
        // columns={[
        //   { title: "試合数", field: "itemName" },
        //   { title: "掛け金", field: "bet" },
        //   { title: "焼き鳥の有無", field: "yakitori" },
        //   { title: "健太", field: "mem1" },
        //   { title: "ゆうき", field: "mem2" },
        //   { title: "はまかた", field: "mem3" }
        // ]}
        data={data}
        // data={[
        //   {
        //     itemName: "1",
        //     bet: "点1",
        //     yakitori: "あり",
        //     mem1: 300
        //   },
        //   { itemName: "ケーキ", bet: "お菓子", yakitori: 400, mem1: 480 },
        //   { itemName: "りんご", bet: "フルーツ", yakitori: 500, mem1: 360 },
        //   { itemName: "バナナ", bet: "フルーツ", yakitori: 200, mem1: 300 },
        //   { itemName: "みかん", bet: "フルーツ", yakitori: 250, mem1: 180 }
        // ]}
        cellEditable={{
          cellStyle: {},
          onCellEditApproved: (newValue, oldValue, rowData, columnDef) => {
            return new Promise((resolve, reject) => {
              console.log("newValue: " + newValue);
              console.log("oldValue: " + oldValue);
              const clonedData = [...data];
              clonedData[rowData.tableData.id][columnDef.field] = newValue;
              setData(clonedData);
              setTimeout(resolve, 4000);
            });
          }
        }}
        options={{
          search: false,
          showTitle: false,
          headerStyle: { whiteSpace: "nowrap" }
        }}
      />
    </>
  );
}
