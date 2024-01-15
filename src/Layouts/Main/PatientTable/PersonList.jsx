import React, { useEffect } from "react";
import Table from "@mui/material/Table";
import { useSelector } from "react-redux";
import NestedTable from "./NestedTable";
import { Box } from "@mui/material";
import './PersonList.css'
function PersonList() {
  /**
  *PersonList Component used for rendering table of person's details
   */
  //Defined variables - start
  const personList = useSelector((state) => state.data.personDetails); //uses the useEffect hook to retrieve the 'personDetails' from the redux store
  useEffect(() => {}, [personList]); //this useEffect used rerender the component whenever the value of 'personList' changes
  //Defined variables - end
  return (
    <Box className="outer-box"
      sx={{ display: { xs: "none", sm: "none", md: "none", lg: "flex", xl: "flex" },}}
    >
      <Box className="inner-box"
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
