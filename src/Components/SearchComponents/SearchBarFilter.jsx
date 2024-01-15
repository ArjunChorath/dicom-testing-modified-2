import { Box, Button } from "@mui/material";
import React, { useState } from "react";
import StudyList from "../../Layouts/Main/StudyList";
import SavedQuery from "../SavedQuery/SavedQuery";
import BasicSearch from "../BasicSearch/BasicSearch";
import usedColors from "../../Assets/Colores/Colores";
import AdvanceSearch from "../AdvanceSearch/AdvanceSearch";
import SideMenu from "../../Layouts/Main/SideMenu/SideMenu";
import "./SearchBarFilter.css";

const SearchBarFilter = () => {
  /**
   * SearchBarFilter for serve as a container for various search related components
   */
  //Defined variables - start
  const [advaceSearch, setAdvanceSearch] = useState(false);
  //Defined variables - end
  return (
    <Box>
      <Box
        sx={{
          display: {
            xs: "flex",
            lg: "none",
          },
          position: "absolute",
          height: "100vh",
          width: "30vw",
          left: 0,
        }}
        className
      >
        <SideMenu />
      </Box>
      <Box
        sx={{
          display: {
            xs: "none",
            lg: "flex",
          },
          alignItems: "center",
          justifyContent: "ceter",
          position: "relative",
          width: "100vw",
        }}
      >
        <Box
          sx={{
            maxWidth: "15vw",
            height: "30vh",
            position: "absolute",
            top: "13rem",
            left: "1rem",
          }}
        >
          <SavedQuery />
        </Box>

        <Box
          sx={{
            bgcolor: usedColors.main,
          }}
          className="maindiv"
        >
          <StudyList />
          <BasicSearch />
          <Box
            sx={{
              top: "1rem",
              right: "7.5rem",
              border: "1px solid black",
              borderRadius: "5px",
              position: "absolute",
            }}
          >
            <Button
              sx={{
                bgcolor: "white",
                color: "black",
                "&:hover": {
                  backgroundColor: "#164863",
                  color: "white",
                },
              }}
              onClick={() => {
                setAdvanceSearch(!advaceSearch);
              }}
            >
              Advance Search
            </Button>
          </Box>
          {advaceSearch === true ? (
            <Box
              sx={{
                position: "absolute",
                top: "5rem",
                right: "2rem",
                zIndex: "999",
              }}
            >
              <AdvanceSearch />
            </Box>
          ) : (
            ""
          )}
        </Box>
      </Box>
    </Box>
  );
};

export default SearchBarFilter;
