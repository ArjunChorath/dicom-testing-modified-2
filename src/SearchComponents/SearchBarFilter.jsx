import { Box } from "@mui/material";
import React from "react";
import PatientName from "./PatientName";
import Mrn from "./Mrn";
import StudyDate from "./StudyDate";
import Description from "./Description";
import Modality from "./Modality";
import Accession from "./Accession";
import StudyList from "../Layouts/Main/StudyList";
// import { useDispatch } from "react-redux";


const SearchBarFilter = () => {
  // const dispatch=useDispatch()

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
          flexDirection:"column",
          borderRadius:"5px",
          marginTop:"1px"
        }}
      >
        <Box>
          <StudyList/>
        </Box>
        <Box
          sx={{
            maxWidth: "65vw",
            height: "10vh",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "2rem",
            color:"black"
          }}
        >
          <PatientName />
          <Mrn></Mrn>
          <StudyDate />
          <Description />
          <Modality />
          <Accession />
          <Box sx={{ color: "white",marginBottom:"2rem",fontSize:"16px" }}>Instances</Box>
          {/* <Box onClick={()=>{dispatch(searchBar())}}>Search</Box>
        </Box> */}
      </Box>
    </Box>
    </Box>
  );
};

export default SearchBarFilter;
