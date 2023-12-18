// src/PaginationFooter.js
import React, { useState, useEffect } from "react";
import { Box, Button, Typography } from "@mui/material";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

const PaginationFooter = () => {
  const [select, setSelect] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [data, setData] = useState([]);
  const [totalRecords, setTotalRecords] = useState(0);

  const itemsPerPageOptions = [10, 25, 50];

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

  const handleSelectChange = (event) => {
    setSelect(event.target.value);
    setCurrentPage(1); 
  };

  const handlePageChange = (newPage) => {
   const validPage=Math.max(newPage,1)
   setCurrentPage(validPage)
  };

  const fetchData = async () => {
    try {
      const response = await fetch(
        `http://10.30.2.208:8193/GET/qido/studies?skip=0&&limit=2
`
      );

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const result = await response.json();
      setData(result);
      console.log(result);
      setTotalRecords(parseInt(response.headers.get("X-Total-Count"), 10));
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  
  const totalPages = Math.ceil(totalRecords / parseInt(select, 10));

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
              onChange={handleSelectChange}
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
              {itemsPerPageOptions.map((option) => (
                <MenuItem key={option} value={option} onClick={fetchData}>
                  {option}
                </MenuItem>
              ))}
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
          <Typography>Page {currentPage}</Typography>
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
            <Button
              size="small"
              sx={{ borderRight: "1px solid black" }}
              disabled={currentPage === 1}
              onClick={() => handlePageChange(currentPage - 1)}
            >
              {"<<"}
            </Button>
            <Button
              size="small"
              sx={{ borderRight: "1px solid black" }}
              disabled={currentPage === 1}
              onClick={() => handlePageChange(currentPage - 1)}
            >
              {"<Back"}
            </Button>
            <Button
              size="small"
              disabled={currentPage === totalPages}
              onClick={() => handlePageChange(currentPage + 1)}
            >
              {"Next>"}
            </Button>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default PaginationFooter;
