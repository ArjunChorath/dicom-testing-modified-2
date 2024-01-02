import { Box } from "@mui/material";
import React from "react";


function StudyList() {

  return (
    <Box
      sx={{
        width: "100vw",
        height: "8vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
        marginTop: "5px",
        position: "relative",
      }}
    >
      <Box
        sx={{
          width: "65vw",
          height: "5rem",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          flexDirection: "row",
        }}
      >
        <Box
          sx={{
            width: "30vw",
            height: "5rem",
            display: "flex",
            alignItems: "center",
            fontSize: "35px",
            justifyContent: "flex-start",
            color: "white",
            fontWeight: "bold",
          }}
        >
          Study List
        </Box>
      </Box>
    
    </Box>
  );
}

export default StudyList;
