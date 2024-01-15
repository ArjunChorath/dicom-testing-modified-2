import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import React from "react";
import "./ResponsivePersonList.css";
import ResponsiveNestedLlist from "./ResponsiveNestedList";
import { useSelector } from "react-redux";

function ResponsivePersonList() {
  /**
   *ResponsivePersonList Component used for rendering table of person's details in responsive person list
   */
  //Defined variables - start
  const personList = useSelector((state) => state.data.personDetails);//uses useSelector hook from react redux to extract 'personDetails' from the redux store
  //Defined variables - end
  return (
    <Box sx={{ width: "100vw", height: "90vh", overflow: "auto", mt: "10px" }}>
      <Grid container spacing={2} sx={{ width: "85vw", ml: "12vw" }}>
        {personList.map((value) => (
          <ResponsiveNestedLlist key={value.id} value={value} />
        ))}
      </Grid>
    </Box>
  );
}

export default ResponsivePersonList;
