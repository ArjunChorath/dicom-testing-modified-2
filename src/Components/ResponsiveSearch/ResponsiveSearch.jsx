import { Box, Button, Input, InputAdornment } from "@mui/material";
import React, { useEffect, useState } from "react";
import SearchIcon from "@mui/icons-material/Search";
import { useDispatch, useSelector } from "react-redux";
import { searchData } from "../../Store/ApiDataSlice";

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
    console.log(basicForm.patientName);
  };
  /**
   the useEffect will rerender every time whenever the value of 'paginationValues' changes
   */
  useEffect(() => {
    console.log("aSedasd", paginationValues);
  }, [paginationValues]);
  return (
    <Box
      sx={{
        display: {
          xs: "flex",
          lg: "none",
        },
        alignItems: "center",
        justifyContent: "center",
        width: "55vw",
        maxHeight: "2rem",
      }}
    >
      <Box
        sx={{
          position: "relative",
          width: "55vw",
        }}
      >
        <Input
          type="text"
          name="patientName"
          disableUnderline={true}
          value={basicForm.patientName}
          onChange={handleForm}
          sx={{
            height: "2rem",
            bgcolor: "#F3F8FF",
            width: "55vw",
            borderRadius: "30px",
          }}
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
            height: "2rem",
            width: { xs: "4.5rem", sm: "5.5rem" },
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
          }}
        >
          Search
        </Button>
      </Box>
    </Box>
  );
}

export default ResponsiveSearch;
