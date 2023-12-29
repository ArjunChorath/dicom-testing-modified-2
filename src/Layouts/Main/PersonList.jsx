import React, { useEffect } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import { useSelector } from "react-redux";
import NestedTable from "./NestedTable";
import { Box } from "@mui/material";

function PersonList() {
  const personList = useSelector((state) => state.data.personDetails);
  useEffect(()=>{

  },[personList])

  return (
    <Box
      sx={{
        height: "50vh",
        width: "100vw",
        overflowX: "hidden",
        overflowY: "scroll",
        display: "flex",
        alignItems: "center",
        flexDirection: "column",
        mt: "5px",
      }}
    >
      <Box
        sx={{
          maxHeight: "100vh",
          maxWidth: "60vw",
          display: "flex",
          alignItems: "start",
          justifyContent: "center",
        }}
      >
        <Table size="small">
          <TableBody sx={{ bgcolor: "#090c29", overflow: "scroll" }}>
            {personList.map((value) => (
              <NestedTable key={value.studyId} value={value} />
            ))}
          </TableBody>
        </Table>
      </Box>
    </Box>
  );
}

export default PersonList;
