import { Box } from "@mui/material";
import React, { useState } from "react";
import { KeyboardArrowUp } from "@mui/icons-material";
import { KeyboardArrowDown } from "@mui/icons-material";
import { useDispatch } from "react-redux";
import { clearfilter, sortingAscending, sortingDescending } from "../Store/ApiDataSlice";

 const Description = () => {
  const dispatch=useDispatch()
  const [isClickedDescription, setIsClickedDescription] = useState(false);
   const [upArrowFill, setUpArrowFill] = useState("blue");
   const [downArrowFill, setDownArrowFill] = useState("blue");

   const upClicked = () => {
     setUpArrowFill("rgb(0,195,255)");
     setDownArrowFill("#090939");
     dispatch(sortingAscending("description"))
     dispatch(clearfilter());
   };
   const downClicked = () => {
     setUpArrowFill("#090939");
     setDownArrowFill("rgb(0,195,255)");
     dispatch(sortingDescending("description"))
     dispatch(clearfilter());
   };

  return (
    <div>
      {" "}
      <Box sx={{ display:"flex",alignItems:"center",justifyContent:"center"}}>
        <Box sx={{ display: "flex", flexDirection: "column" }}>
          <Box sx={{color: "white", marginBottom: "1px", height: "1px" }}>
            Description
          </Box>
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
              sx={{ color: upArrowFill, paddingLeft: "23px" }}
            ></KeyboardArrowUp>
            <KeyboardArrowDown
              fontSize="xs"
              onClick={downClicked}
              sx={{
                mt: "-8px",
                mb: "2px",
                color: downArrowFill,
                paddingLeft: "23px",
              }}
            ></KeyboardArrowDown>
          </Box>
          <input
            style={{
              backgroundColor: "#E0F4FF",
              color: "black",
              width: "150px",
              height: "28px",
              borderRadius: "5px",
              outline: "none",
              border: `1px solid ${isClickedDescription ? "cyan" : "black"}`,
            }}
            onFocus={() => {setIsClickedDescription(true); dispatch(clearfilter());}}
            onBlur={() => {setIsClickedDescription(false); dispatch(clearfilter());}}
          ></input>
        </Box>
      </Box>
    </div>
  );
};

export default Description;
