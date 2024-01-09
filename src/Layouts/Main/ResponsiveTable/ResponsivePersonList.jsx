import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import React from "react";
import "./ResponsivePersonList.css";
import ResponsiveNestedLlist from "./ResponsiveNestedList";
import { useSelector } from "react-redux";

function ResponsivePersonList() {
  const personList = useSelector((state) => state.data.personDetails);
  return (
    <Box
      sx={{ width: "100vw", maxHeight: "90vh", overflow: "auto", mt: "10px" }}
    >
      <Grid container spacing={2} sx={{ width: "85vw", ml: "12vw" }}>
        {personList.map((value) => (
          <ResponsiveNestedLlist key={value.id} value={value} />
        ))}
      </Grid>
    </Box>
  );
}

export default ResponsivePersonList;
