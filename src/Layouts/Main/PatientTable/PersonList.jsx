import React, { useEffect } from "react";
import Table from "@mui/material/Table";
import { useSelector } from "react-redux";
import NestedTable from "./NestedTable";
import { Box } from "@mui/material";


function PersonList() {
  //Defined variables - start
  const personList = useSelector((state) => state.data.personDetails);//uses the useEffect hook to retrieve the 'personDetails' from the redux store
  useEffect(() => {}, [personList]); //this useEffect used rerender the component whenever the value of 'personList' changes
  //Defined variables - end

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
          minWidth: "60vw",
          display: "flex",
          alignItems: "start",
          justifyContent: "center",
          overflow: "scroll",
        }}
      >
        <Table size="small">
          {personList.map((value) => (
            <NestedTable key={value.studyId} value={value} />
          ))}
        </Table>
      </Box>
    </Box>
  );
}

export default PersonList;
