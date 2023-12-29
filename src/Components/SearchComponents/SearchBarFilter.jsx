import { Box } from "@mui/material";
import React from "react";
import StudyList from "../../Layouts/Main/StudyList";
import SavedQuery from "../SavedQuery/SavedQuery";
import BasicSearch from "../BasicSearch/BasicSearch";
import usedColors from "../../Assets/Colores/Colores";
import AdvanceSearch from "../AdvanceSearch/AdvanceSearch";

const SearchBarFilter = () => {
 

  return (
    <Box sx={{ position: "relative" }}>
      <Box
        sx={{
          maxWidth: "15vw",
          height: "30vh",
          position: "absolute",
          top: "12rem",
          left: "1rem",
        }}
      >
        <SavedQuery />
      </Box>

      <Box
        sx={{
          width: "99.9vw",
          height: "20vh",
          bgcolor: usedColors.main,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column",
          borderRadius: "5px",
          marginTop: "1px",
        }}
      >
        <Box>
          <StudyList />
        </Box>
        <Box
          sx={{
            maxWidth: "65vw",
            height: "10vh",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexDirection: "row",
            gap: "2rem",
            color: "black",
          }}
        >
          <BasicSearch />
        </Box>
        {/* <Button
          variant="contained"
          sx={{
            position: "absolute",
            bottom: "1.2rem",
            left: "1.5rem",
            bgcolor: "#E0F4FF",
            color: "black",
            "&:hover": {
              backgroundColor: "#164863",
              color: "white",
            },
          }}
          onClick={() => {
            setSavedQuary(!savedQuery);  
          }}
        >
          Saved Querys
        </Button> */}

        <Box
          sx={{
            position: "absolute",
            top: "1rem",
            right: "10px",
            zIndex: "999",
          }}
        >
          <AdvanceSearch />
        </Box>
      </Box>
    </Box>
  );
};

export default SearchBarFilter;
