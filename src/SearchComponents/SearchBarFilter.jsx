import { Box } from "@mui/material";
import StudyList from "../Layouts/Main/StudyList";
// import { useDispatch } from "react-redux";

import React, { useState } from "react";
import { KeyboardArrowUp } from "@mui/icons-material";
import { KeyboardArrowDown } from "@mui/icons-material";
import { useDispatch } from "react-redux";
import {
  clearfilter,
  sortingAscending,
  sortingDescending,
} from "../Store/ApiDataSlice";
import Input from "@mui/material/Input";

const SearchBarFilter = () => {
  // const dispatch=useDispatch()
  const dispatch = useDispatch();

  const [upArrowFillOfPatientName, setUpArrowFillOfPatientName] =
    useState("blue");
  const [downArrowFillOfPatientName, setDownArrowFillOfPatientName] =
    useState("blue");
  const [upArrowFillOfMrn, setupArrowFillOfMrn] = useState("blue");
  const [downArrowFillOfMrn, setUpArrowFillOfMrn] = useState("blue");
  const [inputType, setInputType] = useState("text");
  const [downArrowFillOfStudyList, setDownArrowFillOfStudyList] =
    useState("blue");
  const [upArrowFillOfDescription, setUpArrowFillOfDescription] =
    useState("blue");
  const [downArrowFillOfDescription, setDownArrowFillOfDescription] =
    useState("blue");
  const [upArrowFillOfModality, setUpArrowFillOfModality] = useState("blue");
  const [downArrowFillOfModality, setDownArrowFillOfModality] =
    useState("blue");
  const [upArrowFillOfAccession, setUpArrowFillOfAccession] = useState("blue");
  const [downArrowFillOfAccession, setDownArrowFillOfAccession] =
    useState("blue");

  const upClickedPatientName = () => {
    setUpArrowFillOfPatientName("rgb(0,195,255)");
    setDownArrowFillOfPatientName("#090939");
    dispatch(sortingAscending("name"));
    dispatch(clearfilter());
  };
  const downClickedPatientName = () => {
    setUpArrowFillOfPatientName("#090939");
    setDownArrowFillOfPatientName("rgb(0,195,255)");
    dispatch(sortingDescending("name"));
    dispatch(clearfilter());
  };

  const upClickedMrn = () => {
    setupArrowFillOfMrn("rgb(0,195,255)");
    setUpArrowFillOfMrn("#090939");
    dispatch(sortingAscending("mrn"));
    dispatch(clearfilter());
  };
  const downClickedMrn = () => {
    setupArrowFillOfMrn("#090939");
    setUpArrowFillOfMrn("rgb(0,195,255)");
    dispatch(sortingDescending("mrn"));
    dispatch(clearfilter());
  };

  const downClickedStudyDate = () => {
    setDownArrowFillOfStudyList("rgb(0,195,255)");
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
  const upClickedDescription = () => {
    setUpArrowFillOfDescription("rgb(0,195,255)");
    setDownArrowFillOfDescription("#090939");
    dispatch(sortingAscending("description"));
    dispatch(clearfilter());
  };
  const downClickedDescription = () => {
    setUpArrowFillOfDescription("#090939");
    setDownArrowFillOfDescription("rgb(0,195,255)");
    dispatch(sortingDescending("description"));
    dispatch(clearfilter());
  };

  const upClickedModality = () => {
    setUpArrowFillOfModality("rgb(0,195,255)");
    setDownArrowFillOfModality("#090939");
    dispatch(sortingAscending("modality"));
    dispatch(clearfilter());
  };
  const downClickedModality = () => {
    setUpArrowFillOfModality("#090939");
    setDownArrowFillOfModality("rgb(0,195,255)");
    dispatch(sortingDescending("modality"));
    dispatch(clearfilter());
  };
  const upClickedAccession = () => {
    setUpArrowFillOfAccession("rgb(0,195,255)");
    setDownArrowFillOfAccession("#090939");
    dispatch(sortingAscending("accession"));
    dispatch(clearfilter());
  };
  const downClickedAccesion = () => {
    setUpArrowFillOfAccession("#090939");
    setDownArrowFillOfAccession("rgb(0,195,255)");
    dispatch(sortingDescending("accession"));
    dispatch(clearfilter());
  };
  return (
    <Box>
      <Box
        sx={{
          width: "99.9vw",
          height: "20vh",
          bgcolor: "#427D9D",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column",
          borderRadius: "5px",
          marginTop: "1px",
          // border: "3px solid black",
        }}
      >
        <Box>
          <StudyList />
        </Box>
        <Box
          sx={{
            maxWidth: "65vw",
            height: "10vh",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "2rem",
            color: "black",
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItem: "center",
              justifyContent: "center",
            }}
          >
            <Box
              sx={{
                display: "flex",
                flexDirection: "row",
              }}
            >
              <Box sx={{ color: "white" }}>Patient Name</Box>
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
                  onClick={upClickedPatientName}
                  sx={{ color: upArrowFillOfPatientName }}
                ></KeyboardArrowUp>
                <KeyboardArrowDown
                  fontSize="xs"
                  onClick={downClickedPatientName}
                  sx={{
                    mt: "-8px",
                    mb: "8px",
                    color: downArrowFillOfPatientName,
                  }}
                ></KeyboardArrowDown>
              </Box>
            </Box>

            <Input
              style={{
                backgroundColor: "#E0F4FF",
                color: "black",
                width: "150px",
                height: "32.5px",
                outline: "none",
                borderRadius: "5px",
                border: `1px solid `,
              }}
            ></Input>
          </Box>
          {/* <PatientName /> */}

          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
              justifyContent: "center",
            }}
          >
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                flexDirection: "row",
                justifyContent: "center",
                width: "3rem",
              }}
            >
              <Box
                sx={{
                  color: "white",
                  height: "1.8rem",
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
                  height: "2rem",
                }}
              >
                <KeyboardArrowUp
                  fontSize="xs"
                  onClick={upClickedMrn}
                  sx={{ color: upArrowFillOfMrn }}
                ></KeyboardArrowUp>
                <KeyboardArrowDown
                  fontSize="xs"
                  onClick={downClickedMrn}
                  sx={{
                    mt: "-8px",
                    mb: "2px",
                    color: downArrowFillOfMrn,
                  }}
                ></KeyboardArrowDown>
              </Box>
            </Box>
            <Box>
              <Input
                style={{
                  backgroundColor: "#E0F4FF",
                  color: "black",
                  width: "150px",
                  height: "32.5px",
                  borderRadius: "5px",
                  outline: "none",
                  border: `1px solid `,
                }}
              ></Input>
            </Box>
          </Box>

          {/* <Mrn></Mrn> */}
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
                    onClick={downClickedStudyDate}
                    sx={{
                      mt: "-8px",
                      mb: "2px",
                      color: downArrowFillOfStudyList,
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
                    height: "32.5px",
                    outline: "none",
                    border: "1px solid black",
                    // borderTopLeftRadius: "5px",
                    // borderBottomLeftRadius: "5px",
                    // borderRight: "none",
                    borderRadius: "5px",
                  }}
                />
              </Box>
            </Box>
          </Box>
          {/* <StudyDate /> */}
          <Box>
            {" "}
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Box sx={{ display: "flex", flexDirection: "column" }}>
                <Box
                  sx={{ color: "white", marginBottom: "1px", height: "1px" }}
                >
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
                    onClick={upClickedDescription}
                    sx={{
                      color: upArrowFillOfDescription,
                      paddingLeft: "23px",
                    }}
                  ></KeyboardArrowUp>
                  <KeyboardArrowDown
                    fontSize="xs"
                    onClick={downClickedDescription}
                    sx={{
                      mt: "-8px",
                      mb: "2px",
                      color: downArrowFillOfDescription,
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
                    border: `1px solid`,
                  }}
                ></input>
              </Box>
            </Box>
          </Box>
          {/* <Description /> */}
          <Box>
            <Box
              sx={{
                display: "flex",
                alignItems: ":center",
                justifyContent: "center",
              }}
            >
              <Box sx={{ display: "flex", flexDirection: "column" }}>
                <Box
                  sx={{ color: "white", marginBottom: "1px", height: "1px" }}
                >
                  Modality
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
                    onClick={upClickedModality}
                    sx={{ color: upArrowFillOfModality, paddingLeft: "12px" }}
                  ></KeyboardArrowUp>
                  <KeyboardArrowDown
                    fontSize="xs"
                    onClick={downClickedModality}
                    sx={{
                      mt: "-8px",
                      mb: "2px",
                      color: downArrowFillOfModality,
                      paddingLeft: "12px",
                    }}
                  ></KeyboardArrowDown>
                </Box>
                <Input
                  style={{
                    backgroundColor: "#E0F4FF",
                    color: "black",
                    width: "150px",
                    height: "32.5px",
                    outline: "none",
                    borderRadius: "5px",
                    border: `1px solid `,
                  }}
                  disableUnderline={true}
                ></Input>
              </Box>
            </Box>
          </Box>
          {/* <Modality /> */}
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
                  onClick={upClickedAccession}
                  sx={{ color: upArrowFillOfAccession, paddingLeft: "45px" }}
                ></KeyboardArrowUp>
                <KeyboardArrowDown
                  fontSize="xs"
                  onClick={downClickedAccesion}
                  sx={{
                    mt: "-8px",
                    mb: "2px",
                    color: downArrowFillOfAccession,
                    paddingLeft: "45px",
                  }}
                ></KeyboardArrowDown>
              </Box>

              <input
                style={{
                  backgroundColor: "#E0F4FF",
                  color: "black",
                  width: "150px",
                  height: "27px",
                  borderRadius: "5px",
                  outline: "none",
                  border: `1px solid`,
                }}
              ></input>
            </Box>
          </Box>
          {/* <Accession /> */}
          <Box sx={{ color: "white", marginBottom: "2rem", fontSize: "16px" }}>
            Instances
          </Box>
          {/* <Box onClick={()=>{dispatch(searchBar())}}>Search</Box>
        </Box> */}
        </Box>
      </Box>
    </Box>
  );
};

export default SearchBarFilter;
