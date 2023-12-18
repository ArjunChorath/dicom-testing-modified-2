import { Box } from "@mui/material";
import React, { useEffect, useState } from "react";
import { KeyboardArrowUp } from "@mui/icons-material";
import { KeyboardArrowDown } from "@mui/icons-material";
import { useDispatch, useSelector } from "react-redux";
import {
  clearfilter,
  sortingAscending,
  sortingDescending,
} from "../Store/ApiDataSlice";

const Accession = () => {
  const dispatch = useDispatch();
  const searchValue = useSelector((state) => state.data.searchButton);
  const [isClickedAccession, setIsClickedAccession] = useState(false);
  const [upArrowFill, setUpArrowFill] = useState("blue");
  const [downArrowFill, setDownArrowFill] = useState("blue");

  const upClicked = () => {
    setUpArrowFill("rgb(0,195,255)");
    setDownArrowFill("#090939");
    dispatch(sortingAscending("accession"));
    dispatch(clearfilter());
  };
  const downClicked = () => {
    setUpArrowFill("#090939");
    setDownArrowFill("rgb(0,195,255)");
    dispatch(sortingDescending("accession"));
    dispatch(clearfilter());
  };
  useEffect(()=>{

  },[searchValue])
  return (
    <Box
      sx={{
        ml: "10px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Box sx={{ display: "flex", flexDirection: "column" }}>
        <Box sx={{ color: "white", height: "1px" }}>Accession #</Box>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexDirection: "column",
          }}
        >
          <KeyboardArrowUp
            fontSize="xs"
            onClick={upClicked}
            sx={{ color: upArrowFill, paddingLeft: "45px" }}
          ></KeyboardArrowUp>
          <KeyboardArrowDown
            fontSize="xs"
            onClick={downClicked}
            sx={{
              mt: "-8px",
              mb: "2px",
              color: downArrowFill,
              paddingLeft: "45px",
            }}
          ></KeyboardArrowDown>
        </Box>
        {searchValue===true ? (
          <input
            style={{
              backgroundColor: "#E0F4FF",
              color: "black",
              width: "150px",
              height: "27px",
              borderRadius: "5px",
              outline: "none",
              border: `1px solid ${isClickedAccession ? "cyan" : "black"}`,
            }}
            onFocus={() => {
              setIsClickedAccession(true);
              dispatch(clearfilter());
            }}
            onBlur={() => {
              setIsClickedAccession(false);
              dispatch(clearfilter());
            }}
          ></input>
        ) : (
          ""
        )}
      </Box>
    </Box>
  );
};

export default Accession;
