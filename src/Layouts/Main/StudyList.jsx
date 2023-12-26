import { Box } from "@mui/material";
import React, { useState } from "react";
import Button from "@mui/material/Button";
import AdvanceSearch from "../../Components/AdvanceSearch/AdvanceSearch";

function StudyList() {
  const [advaceSearch, setAdvanceSearch] = useState(false);
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
        overflow:'hidden'
      }}
    >
      <Box
        sx={{
          width: "55vw",
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
      <Box sx={{ position: "absolute", top: "1rem", right: "1.5rem" }}>
        <Button
          sx={{
            bgcolor: "white",
            color: "black",
            "&:hover": {
              backgroundColor: "#164863",
              color: "white",
            },
          }}
          onClick={() => setAdvanceSearch(!advaceSearch)}
        >
          Advance Search
        </Button>
      </Box>
      {advaceSearch ? (
        <Box
          sx={{
            position: "absolute",
            top: "3.5rem",
            right: "1rem",
            zIndex: "999",
          }}
        >
          <AdvanceSearch />
        </Box>
      ) : (
        ""
      )}
    </Box>
  );
}

export default StudyList;
