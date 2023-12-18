import { Box } from "@mui/material";
import React, { useState } from "react";
import { KeyboardArrowUp } from "@mui/icons-material";
import { KeyboardArrowDown } from "@mui/icons-material";
import { useDispatch } from "react-redux";
import {
  clearfilter,
  sortingAscending,
  sortingDescending,
} from "../Store/ApiDataSlice";

const PatientName = () => {
  const dispatch = useDispatch();
  const [isClickedPatient, setIsClickedPatient] = useState(false);
  const [upArrowFill, setUpArrowFill] = useState("blue");
  const [downArrowFill, setDownArrowFill] = useState("blue");

  const upClicked = () => {
    setUpArrowFill("rgb(0,195,255)");
    setDownArrowFill("#090939");
    dispatch(sortingAscending("name"));
    dispatch(clearfilter());
  };
  const downClicked = () => {
    setUpArrowFill("#090939");
    setDownArrowFill("rgb(0,195,255)");
    dispatch(sortingDescending("name"));
    dispatch(clearfilter());
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItem: "center",
        justifyContent: "center",
      }}
    >
      <Box sx={{ display: "flex", flexDirection: "row" }}>
        <Box sx={{color: "white" }}>Patient Name</Box>
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
            sx={{ color: upArrowFill }}
          ></KeyboardArrowUp>
          <KeyboardArrowDown
            fontSize="xs"
            onClick={downClicked}
            sx={{ mt: "-8px", mb: "8px", color: downArrowFill }}
          ></KeyboardArrowDown>
        </Box>
      </Box>

      <input
        style={{
          backgroundColor: "#E0F4FF",
          color: "black",
          width: "150px",
          height: "27px",
          outline: "none",
          borderRadius: "5px",
          border: `1px solid ${isClickedPatient ? "cyan" : "black"}`,
        }}
        onFocus={() => {setIsClickedPatient(true);  dispatch(clearfilter());}}
        onBlur={() => {setIsClickedPatient(false); dispatch(clearfilter());}}
      ></input>
    </Box>
  );
};
export default PatientName;
