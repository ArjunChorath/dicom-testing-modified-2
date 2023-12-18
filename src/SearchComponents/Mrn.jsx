import { Box } from "@mui/material";
import React, { useState } from "react";
import { KeyboardArrowUp } from "@mui/icons-material";
import { KeyboardArrowDown } from "@mui/icons-material";
import { useDispatch } from "react-redux";
import { clearfilter, sortingAscending, sortingDescending } from "../Store/ApiDataSlice";

 const Mrn = () => {
  const dispatch=useDispatch()
  const [isClickedMRN, setIsClickedMRN] = useState(false);
   const [upArrowFill, setUpArrowFill] = useState("blue");
   const [downArrowFill, setDownArrowFill] = useState("blue");
     const upClicked=()=>{
         setUpArrowFill("rgb(0,195,255)");
         setDownArrowFill("#090939");
         dispatch(sortingAscending("mrn"))
         dispatch(clearfilter());

     }
     const downClicked=()=>{
      setUpArrowFill("#090939");
      setDownArrowFill("rgb(0,195,255)");
      dispatch(sortingDescending("mrn"))
      dispatch(clearfilter());
     }
  return (
    <div>
      <Box sx={{display: "flex", flexDirection: "column",alignItems:"center",justifyContent:"center" }}>
        <Box sx={{ display: "flex", flexDirection: "column", }}>
          <Box
            sx={{
              color: "white",
              height: "1px",
              width: "1px",
            }}
          >
            MRN
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
              sx={{ color: upArrowFill, paddingRight: "58px", }}
            ></KeyboardArrowUp>
            <KeyboardArrowDown
              fontSize="xs"
              onClick={downClicked}
              sx={{
                mt: "-8px",
                mb: "2px",
                color: downArrowFill,
                paddingRight: "58px",
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
              border: `1px solid ${isClickedMRN ? "cyan" : "black"}`,
            }}
            onFocus={() => {setIsClickedMRN(true); dispatch(clearfilter());}}
            onBlur={() => {setIsClickedMRN(false); dispatch(clearfilter());}}
          ></input>
        </Box>
      </Box>
    </div>
  );
};

export default Mrn;
