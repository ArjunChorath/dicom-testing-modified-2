import { Box, Button, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import { getDetails } from "../../Store/ApiDataSlice";
import { useDispatch } from "react-redux";

function PaginationFooter() {
  const dispatch = useDispatch();
  const [select, setSelect] = useState({
    skip: 0,
    limit: 10,
  });
  const MenuProps = {
    PaperProps: {
      style: {
        backgroundColor: "#164863",
        color: "white",
        maxHeight: "9rem",
        minWidth: 120,
        fontSize: 10,
        marginTop: "2px",
        border: "1px solid black",
      },
    },
  };
  useEffect(() => {
    dispatch(getDetails(select));
  
  }, [dispatch, select]);

  const handleNext = () => {
    setSelect((prevValue) => ({
      ...prevValue,
      skip: select.skip + select.limit,
    }));
  };
  const handleBack = () => {
    setSelect((prevValue) => ({
      ...prevValue,
      skip: select.skip - select.limit,
    }));
  };
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        width: "100vw",
        height: "5vw",
        
      }}
    >
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          width: "65vw",
          maxHeight: "10vw",
        }}
      >
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexDirection: "row",
          }}
        >
          <Select
            value={select.limit}
            onChange={(event) => {
              setSelect((prevValue) => ({
                ...prevValue,
                limit: event.target.value,
              }));
              
            }}
            sx={{
              bgcolor: "#E0F4FF",
              borderColor: "black",
              height: "2.5rem",
              minWidth: 120,
            }}
            MenuProps={MenuProps}
          >
            <MenuItem value={10}>10</MenuItem>
            <MenuItem value={25}>25</MenuItem>
            <MenuItem value={50}>50</MenuItem>
          </Select>

          <Typography>Results per Page</Typography>
        </Box>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexDirection: "row",
            gap: ".5rem",
          }}
        >
          <Typography>page 1/2</Typography>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              flexDirection: "row",
              border: "1px solid black",
              borderRadius: "5px",
            }}
          >
            <Button size="small" sx={{ borderRight: "1px solid black" }}>
              {"<<"}
            </Button>
            <Button
              size="small"
              sx={{ borderRight: "1px solid black" }}
              onClick={handleBack}
            >
              {"<Back"}
            </Button>
            <Button size="small" onClick={handleNext}>
              {"Next>"}
            </Button>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default PaginationFooter;
