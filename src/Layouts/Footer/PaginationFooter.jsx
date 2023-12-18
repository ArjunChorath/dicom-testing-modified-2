import { Box, Button, Typography } from "@mui/material";
import React, { useState } from "react";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

function PaginationFooter() {
  const [select, setSelect] = useState("");
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
          <FormControl sx={{ m: 1, minWidth: 120 }}>
            <Select
              value={select}
              onChange={(event) => {
                setSelect(event.target.value);
              }}
              displayEmpty
              sx={{
                bgcolor: "#E0F4FF",
                borderColor: "black",
                height: "2.5rem",
              }}
              MenuProps={MenuProps}
            >
              <MenuItem
                value=""
                disabled
                sx={{ height: ".1px", color: "#164863", position: "absolute" }}
              >
                Select..
              </MenuItem>
              <MenuItem value={10}>10</MenuItem>
              <MenuItem value={20}>25</MenuItem>
              <MenuItem value={30}>50</MenuItem>
            </Select>
          </FormControl>
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
          <Typography>page 1</Typography>
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
            <Button size="small" sx={{ borderRight: "1px solid black" }}>
              {"<Back"}
            </Button>
            <Button size="small">{"Next>"}</Button>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default PaginationFooter;
