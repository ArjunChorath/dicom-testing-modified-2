import { Box, Button, Input, InputAdornment } from "@mui/material";
import React, { useEffect, useState } from "react";
import SearchIcon from "@mui/icons-material/Search";
import { useDispatch, useSelector } from "react-redux";
import { searchData,getLength } from "../../Store/ApiDataSlice";
import "./ResponsiveSearch.css";

function ResponsiveSearch() {
  /**
   *ResponsiveSearch used for handling responsive search input and button functionalities
   */
  //Defined variables - start
  const dispatch = useDispatch();
  const paginationValues = useSelector((state) => state.data.skipAndLimit);
  const [basicForm, setBasicForm] = useState({
    patientName: "",
    patientMrn: "",
    studyDate: "",
    description: "",
    modality: "",
    accession: "",
    instance: "",
    skip: 0,
    limit: 5,
  });
  //Defined variables - end
  /**
   *handleForm is a function that takes @param event as parameter
   *it updates state of form using 'setBasicForm' function
   *also it sets 'skip' and limit in the form state using values from a variable called 'paginationVales'
   */
  const handleForm = (event) => {
    setBasicForm((prevValue) => ({
      ...prevValue,
      [event.target.name]: event.target.value,
      skip: paginationValues.skip,
      limit: paginationValues.limit,
    }));
  };
  /**
   the useEffect will rerender every time whenever the value of 'paginationValues' changes
   */
  useEffect(() => {}, [paginationValues]);
  return (
    <Box
      sx={{
        display: {
          xs: "flex",
          lg: "none",
        },
      }}
      className="searchmain"
    >
      <Box
        sx={{
          position: "relative",
        }}
      >
        <Input
          type="text"
          name="patientName"
          className="searchinput"
          disableUnderline={true}
          value={basicForm.patientName}
          onChange={handleForm}
          inputProps={{
            placeholder: "Patientname......",
            style: {
              color: "black",
            },
          }}
          startAdornment={
            <InputAdornment
              position="start"
              sx={{ color: "black", marginLeft: "10px" }}
            >
              <SearchIcon />
            </InputAdornment>
          }
        />
        <Button
          variant="contained"
          sx={{
            width: { xs: "4.5rem", sm: "5.5rem" },
            height: "2rem",
            position: "absolute",
            right: 0,
            top: 0,
            borderRadius: "30px",
            fontSize: "15px",
            fontFamily: "Segoe UI",
            fontWeight: "bold",
            textTransform: "none",
            background:
              "linear-gradient(90deg, rgba(1,180,228,1) 0%, rgba(144,206,161,1) 100%)",
          }}
          onClick={() => {
            //this onClick trigger a search with the current form data on search button click
            dispatch(searchData(basicForm));
             dispatch(getLength());
          }}
        >
          Search
        </Button>
      </Box>
    </Box>
  );
}

export default ResponsiveSearch;
