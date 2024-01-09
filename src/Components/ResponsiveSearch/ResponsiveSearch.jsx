import { Box, Button, Input, InputAdornment } from "@mui/material";
import React, { useState } from "react";
import SearchIcon from "@mui/icons-material/Search";


function ResponsiveSearch() {
    const [search, setSearch] = useState("");
  return (
    <Box
      sx={{
        display: {
          xs: "flex",
          lg: "none",
        },
        alignItems: "center",
        justifyContent: "center",
        width: "100vw",
        minHeight: "3rem",
        boxShadow:
        "0 4px 4px 0 rgba(0, 0, 0, 0.2), 0 2px 5px 0 rgba(0, 0, 0, 0.19)",
       zIndex:"9999"
      }}
    >
     
        <form>
          <Box
            sx={{
              position: "relative",
              width: "85vw",
            
            }}
          >
            <Input
              type="text"
              disableUnderline={true}
              value={search}
              onChange={(event) => setSearch(event.target.value)} // used to set value of the input field to search variable
              sx={{
                height: "2.5rem",
                bgcolor: "white",
                width: "85vw",
                borderRadius: "30px",
              }}
              inputProps={{
                placeholder: "Search Patientname......",
                style: {
                  color: "black",
                },
              }}
              startAdornment={
                <InputAdornment
                  position="start"
                  sx={{ color: "black", marginLeft: "10px" }}
                >
                  <SearchIcon />
                </InputAdornment>
              }
            />
            <Button
              variant="contained"
              type="submit"
              sx={{
                height: "2.5rem",
                width: "7rem",
                position: "absolute",
                right: 0,
                top: 0,
                borderRadius: "30px",
                fontSize: "15px",
                fontFamily: "Segoe UI",
                fontWeight: "bold",
                textTransform: "none",
                background:
                  "linear-gradient(90deg, rgba(1,180,228,1) 0%, rgba(144,206,161,1) 100%)",
              }}
             
            >
              Search
            </Button>
          </Box>
        </form>
      </Box>
    
  );
}

export default ResponsiveSearch;
