import React, { useEffect } from "react";
import Table from "@mui/material/Table";
import { useSelector } from "react-redux";
import NestedTable from "./NestedTable";
import { Box } from "@mui/material";


function PersonList() {
  const personList = useSelector((state) => state.data.personDetails);
  useEffect(() => {}, [personList]);
  return (
    <Box
      sx={{
        height: "50vh",
        width: "100vw",
        display: {xs:"none",sm:"none",md:"none",lg:"flex",xl:"flex"},
        alignItems: "center",
        flexDirection: "column",
        mt: "5px",
        overflow:"auto"
      }}
    >
      <Box
        sx={{
          maxHeight: "100vh",
          minWidth: "60vw",
          display: "flex",
          alignItems: "start",
          justifyContent: "center",
          bgcolor:"blue",
          
        }}
      >
        <Table size="small">
          {personList.map((value) => (
            <NestedTable key={value.id} value={value} />
          ))}
        </Table>
      </Box>
    </Box>
  );
}

export default PersonList;
