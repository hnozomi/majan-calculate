import { useEffect, useState } from "react";

import MaterialTable from "material-table";
import { Typography } from "@mui/material";
import { Button } from "@material-ui/core";

export const CalculatePage = () => {
  const member1 = localStorage.getItem("Member1");
  const member2 = localStorage.getItem("Member2");
  const member3 = localStorage.getItem("Member3");
  const member4 = localStorage.getItem("Member4");
  const [members, setMembers] = useState([]);
  const [value, setValue] = useState();
  // const [total, setTotal] = useState();

  // useEffect(() => {
  //   console.log(data, "data");
  //   const total1 =
  //     Number(data[0].mem1) + Number(data[1].mem1) + Number(data[2].mem1);
  //   console.log(total1, "total1");
  //   setTotal(total1);
  // }, []);

  const [columns, setColumns] = useState([
    {
      title: "試合数",
      field: "itemName",

      cellStyle: {
        minWidth: "20%"
      },
      editable: "never"
    },
    {
      title: "掛け金",
      field: "bet",

      cellStyle: {
        width: "20%",
        minWidth: "100%"
      }
    },
    {
      title: member1,
      field: "mem1",

      cellStyle: {
        width: "30%",
        minWidth: "100%"
      }
    },
    {
      title: member2,
      field: "mem2",

      cellStyle: {
        width: "30%",
        minWidth: "100%"
      }
    },
    {
      title: member3,
      field: "mem3",

      cellStyle: {
        width: "30%",
        minWidth: "100%"
      }
    }
  ]);
  const [data, setData] = useState([
    {
      itemName: 1,
      bet: "-",
      mem1: 0,
      mem2: 0,
      mem3: 0
    },
    {
      itemName: 2,
      bet: "-",
      mem1: 0,
      mem2: 0,
      mem3: 0
    },
    {
      itemName: 3,
      bet: "-",
      mem1: 0,
      mem2: 0,
      mem3: 0
    },
    {
      itemName: 4,
      bet: "-",
      mem1: 0,
      mem2: 0,
      mem3: 0
    },
    {
      itemName: 5,
      bet: "-",
      mem1: 0,
      mem2: 0,
      mem3: 0
    }
  ]);

  useEffect(() => {
    console.log(data, "data");
    const total1 =
      Number(data[0].mem1) + Number(data[1].mem1) + Number(data[2].mem1);
    console.log(total1, "total1");
    setTotal(total1);
  }, [data]);

  const [total, setTotal] = useState();

  const onClear = () => {
    localStorage.removeItem("Member1");
    localStorage.removeItem("Member2");
    localStorage.removeItem("Member3");
    localStorage.removeItem("Member4");
    localStorage.removeItem("yakitori");
    localStorage.removeItem("chip");
    localStorage.removeItem("Complete");
  };

  return (
    <>
      <MaterialTable
        columns={columns}
        data={data}
        cellEditable={{
          cellStyle: {},
          onCellEditApproved: (newValue, oldValue, rowData, columnDef) => {
            return new Promise((resolve, reject) => {
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
      <Typography sx={{ mt: 3 }}>結果</Typography>
      <Typography sx={{ p: 0, m: 0 }}>{`${member1}:    ${total}円`}</Typography>
      <Typography sx={{ p: 0, m: 0 }}>{`${member2}:    ${total}円`}</Typography>
      <Typography sx={{ p: 0, m: 0 }}>{`${member3}:    ${total}円`}</Typography>
      <Typography sx={{ p: 0, m: 0 }}>{`${member4}:    ${total}円`}</Typography>
      <Button sx={{ mt: 1, mb: 1 }} variant="contained" onClick={onClear}>
        クリアする
      </Button>
    </>
  );
};
