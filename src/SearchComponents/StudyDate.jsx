import { Box } from "@mui/material";
import React, { useState } from "react";
import { KeyboardArrowUp } from "@mui/icons-material";
import { KeyboardArrowDown } from "@mui/icons-material";
import Input from "@mui/material/Input";
import { clearfilter } from "../Store/ApiDataSlice";
import { useDispatch } from "react-redux";

const StudyDate = () => {
  const dispatch = useDispatch();
  const [inputType, setInputType] = useState("text");
  const [downArrowFill, setDownArrowFill] = useState("blue");

  const downClicked = () => {
    setDownArrowFill("rgb(0,195,255)");
    dispatch(clearfilter());
  };

  const handleStartStudyDateFocus = () => {
    setInputType("date");
    dispatch(clearfilter());
  };

  const handleStartStudyDateBlur = () => {
    setInputType("text");
    dispatch(clearfilter());
  };

  // const handleEndStudyDateFocus = () => {
  //   setInputType("date");
  //   dispatch(clearfilter());
  // };

  // const handleEndStudyDateBlur = () => {
  //   setInputType("text");
  //   dispatch(clearfilter());
  // };
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Box sx={{}}>
        <Box sx={{ display: "flex", flexDirection: "column" }}>
          <Box
            sx={{
              color: "white",
              height: "1px",
            }}
          >
            Study Date
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
              sx={{ color: "#427D9D", paddingLeft: "69px" }}
            ></KeyboardArrowUp>
            <KeyboardArrowDown
              fontSize="xs"
              onClick={downClicked}
              sx={{
                mt: "-8px",
                mb: "2px",
                color: downArrowFill,
                paddingLeft: "69px",
              }}
            ></KeyboardArrowDown>
          </Box>
          <Input
            className="inputdate"
            type={inputType}
            onFocus={handleStartStudyDateFocus}
            onBlur={handleStartStudyDateBlur}
            inputProps={{
              placeholder: "Start date",
              style: {
                color: "black",
                marginLeft: "10px",
              },
            }}
            sx={{
              backgroundColor: "#E0F4FF",
              color: "black",
              width: "160px",
              height: "31px",
              outline: "none",
              border: "1px solid black",
              // borderTopLeftRadius: "5px",
              // borderBottomLeftRadius: "5px",
              // borderRight: "none",
              borderRadius:"5px"
            }}
          />
        </Box>
      </Box>
     
    </Box>
  );
};

export default StudyDate;
