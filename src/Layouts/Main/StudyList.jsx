import { Box } from "@mui/material";
import React from "react";
import Button from "@mui/material/Button";
import ClearIcon from "@mui/icons-material/Clear";
import { useSelector } from "react-redux";

function StudyList() {
  const clear = useSelector((state) => state.data.clear);
  const numberOfStudies = useSelector((state) => state.data.personDetails.length);
  console.log(numberOfStudies)
 
  
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
            fontWeight:"bold"
          }}
        >
          Study List
        </Box>
        <Box
          sx={{
            width: "16vw",
            height: "4rem",
            display: "flex",
            alignItems: "center",
            flexDirection: "row",
            justifyContent: "flex-end",
            gap: ".5rem",
          }}
        >
          {clear===true ? (
            <Box >
              <Button
                variant="outlined"
                startIcon={<ClearIcon />}
                sx={{ width: "10rem", height: "3rem", borderRadius: "25px",color:"white",borderColor:"white"}}
                onClick={() => {
                  window.location.reload();
                }}
              >
                Clear Filter
              </Button>
            </Box>
          ) : (
            <Box/>
          )}
          <Box
            sx={{
              width: "2.5vw",
              height: "4rem",
              fontSize: "35px",
              color: "white",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontWeight:"bold"
            }}
          >
            {numberOfStudies}
          </Box>
          <Box
            sx={{
              width: "4vw",
              height: "4rem",
              fontSize: "25px",
              color: "grey",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            Studies
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default StudyList;
