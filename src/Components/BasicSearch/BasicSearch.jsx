import { KeyboardArrowDown, KeyboardArrowUp } from "@mui/icons-material";
import { Box, Input, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import Button from "@mui/material/Button";
import ClearIcon from "@mui/icons-material/Clear";
import { useDispatch, useSelector } from "react-redux";
import {
  getLength,
  searchData,
  sortingAscending,
  sortingDescending,
} from "../../Store/ApiDataSlice";
import usedColors from "../../Assets/Colores/Colores";
import "./BasicSearch.css";

const arrowArray = [
  {
    patientName: "black",
    patientMrn: "black",
    studyDate: "black",
    description: "black",
    modality: "black",
    accession: "black",
  },
];

function BasicSearch() {
  /**
   * BasicSearch is used for basic searches
   */
  //Defined variables - start
  const dispatch = useDispatch();
  const paginationValues = useSelector((state) => state.data.skipAndLimit);
  const [clear, setClear] = useState(false);
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
  const [arrowUpKey, setArrowUpKey] = useState(arrowArray);
  const [arrowDownKey, setArrowDownKey] = useState(arrowArray);
  //Defined variables - end
  /**
   *handleForm is a function that takes @param event as parameter
   *it updates state of form using 'setBasicForm' function
   *also it sets 'skip' and limit in the form state using values from a variable called 'paginationVales'
   */
  const handleForm = (event) => {
    setClear(true);
    setBasicForm((prevValue) => ({
      ...prevValue,
      [event.target.name]: event.target.value,
      skip: 0,
      limit: paginationValues.limit,
    }));
  };
  const clearForm = () => {
    setBasicForm({
      patientName: "",
      patientMrn: "",
      studyDate: "",
      description: "",
      modality: "",
      accession: "",
      instance: "",
    });
  };
  /**
   the useEffect will rerender every time whenever the value of 'paginationValues' changes
   */
  useEffect(() => {}, [paginationValues]);
  return (
    <Box sx={{ bgcolor: usedColors.main }} className="basic-main">
      <Box
        sx={{ justifyContent: { lg: "space-around", xl: "space-around" } }}
        className="basic-child"
      >
        <Box className="form-element">
          <Box className="form_children">
            <Typography
              sx={{ color: "white" }}
              onClick={() => {
                //reset arrow colors for Patient Name sorting on lebel click
                setArrowUpKey({ patientName: "black" });
                setArrowDownKey({ patientName: "black" });
              }}
            >
              Patient Name
            </Typography>
            <Box className="arrow_keys">
              <KeyboardArrowUp
                fontSize="xs"
                sx={{ color: arrowUpKey.patientName }}
                onClick={() => {
                  //handle ascending sorting for Patient Name on up arrow click
                  setArrowUpKey({
                    patientName: "cyan",
                  });
                  setArrowDownKey({
                    patientName: "black",
                  });
                  dispatch(sortingAscending("givenName"));
                }}
              ></KeyboardArrowUp>
              <KeyboardArrowDown
                fontSize="xs"
                sx={{
                  mt: "-7px",
                  color: arrowDownKey.patientName,
                }}
                onClick={() => {
                  //handle descending sorting for Patient Name on down arrow click
                  setArrowUpKey({
                    patientName: "black",
                  });
                  setArrowDownKey({
                    patientName: "cyan",
                  });
                  dispatch(sortingDescending("givenName"));
                }}
              ></KeyboardArrowDown>
            </Box>
          </Box>
          <Box>
            <Input
              name="patientName"
              type="text"
              className="input_elements"
              disableUnderline={true}
              value={basicForm.patientName}
              onChange={handleForm}
            ></Input>
          </Box>
        </Box>

        <Box className="form-element">
          <Box className="form_children">
            <Typography sx={{ color: "white" }}>MRN</Typography>
            <Box className="arrow_keys">
              <KeyboardArrowUp
                fontSize="xs"
                sx={{ color: arrowUpKey.patientMrn }}
                onClick={() => {
                  setArrowUpKey({
                    patientMrn: "cyan",
                  });
                  setArrowDownKey({
                    patientMrn: "black",
                  });
                  dispatch(sortingAscending("patientMrn"));
                }}
              ></KeyboardArrowUp>
              <KeyboardArrowDown
                fontSize="xs"
                sx={{
                  mt: "-7px",
                  color: arrowDownKey.patientMrn,
                }}
                onClick={() => {
                  //handle ascending sorting for MRN on up arrow click
                  setArrowUpKey({
                    patientMrn: "black",
                  });
                  setArrowDownKey({
                    patientMrn: "cyan",
                  });
                  dispatch(sortingDescending("patientMrn"));
                }}
              ></KeyboardArrowDown>
            </Box>
          </Box>
          <Box>
            <Input
              name="patientMrn"
              type="text"
              className="input_elements"
              disableUnderline={true}
              value={basicForm.patientMrn}
              onChange={handleForm}
            ></Input>
          </Box>
        </Box>

        <Box className="form-element">
          <Box className="form_children">
            <Typography sx={{ color: "white" }}>Study Date</Typography>
            <Box className="arrow_keys">
              <KeyboardArrowDown
                fontSize="xs"
                sx={{
                  mt: "5px",
                  color: "black",
                }}
              ></KeyboardArrowDown>
            </Box>
          </Box>
          <Box>
            <Input
              name="studyDate"
              type="date"
              className="input_elements"
              disableUnderline={true}
              value={basicForm.studyDate}
              onChange={handleForm}
            ></Input>
          </Box>
        </Box>

        <Box className="form-element">
          <Box className="form_children">
            <Typography sx={{ color: "white" }}>Description</Typography>
            <Box className="arrow_keys">
              <KeyboardArrowUp
                fontSize="xs"
                sx={{ color: arrowUpKey.description }}
                onClick={() => {
                  //handle ascending sorting for Description on up arrow click
                  setArrowUpKey({
                    description: "cyan",
                  });
                  setArrowDownKey({
                    description: "black",
                  });
                  dispatch(sortingAscending("studyDescription"));
                }}
              ></KeyboardArrowUp>
              <KeyboardArrowDown
                fontSize="xs"
                sx={{
                  mt: "-7px",
                  color: arrowDownKey.description,
                }}
                onClick={() => {
                  //handle descending sorting for Description on down arrow click
                  setArrowUpKey({
                    description: "black",
                  });
                  setArrowDownKey({
                    description: "cyan",
                  });
                  dispatch(sortingDescending("studyDescription"));
                }}
              ></KeyboardArrowDown>
            </Box>
          </Box>
          <Box>
            <Input
              name="description"
              type="text"
              className="input_elements"
              disableUnderline={true}
              value={basicForm.description}
              onChange={handleForm}
            ></Input>
          </Box>
        </Box>

        <Box className="form-element">
          <Box className="form_children">
            <Typography sx={{ color: "white" }}>Modality</Typography>
            <Box className="arrow_keys">
              <KeyboardArrowUp
                fontSize="xs"
                sx={{ color: arrowUpKey.modality }}
                onClick={() => {
                  //handle ascending sorting for Modality on up arrow click
                  setArrowUpKey({
                    modality: "cyan",
                  });
                  setArrowDownKey({
                    modality: "black",
                  });
                  dispatch(sortingAscending("modality"));
                }}
              ></KeyboardArrowUp>
              <KeyboardArrowDown
                fontSize="xs"
                sx={{
                  mt: "-7px",
                  color: arrowDownKey.modality,
                }}
                onClick={() => {
                  //handle descending sorting for Modality on down arrow click
                  setArrowUpKey({
                    modality: "black",
                  });
                  setArrowDownKey({
                    modality: "cyan",
                  });
                  dispatch(sortingDescending("modality"));
                }}
              ></KeyboardArrowDown>
            </Box>
          </Box>
          <Box>
            <Input
              name="modality"
              type="text"
              className="input_elements"
              disableUnderline={true}
              value={basicForm.modality}
              onChange={handleForm}
            ></Input>
          </Box>
        </Box>

        <Box className="form-element">
          <Box className="form_children">
            <Typography sx={{ color: "white" }}>Accession</Typography>
            <Box className="arrow_keys">
              <KeyboardArrowUp
                fontSize="xs"
                sx={{ color: arrowUpKey.accession }}
                onClick={() => {
                  //handle ascending sorting for Accession on up arrow click
                  setArrowUpKey({
                    accession: "cyan",
                  });
                  setArrowDownKey({
                    accession: "black",
                  });
                  dispatch(sortingAscending("accessionNumber"));
                }}
              ></KeyboardArrowUp>
              <KeyboardArrowDown
                fontSize="xs"
                sx={{
                  mt: "-7px",
                  color: arrowDownKey.accession,
                }}
                onClick={() => {
                  //handle descending sorting for Accession on down arrow click
                  setArrowUpKey({
                    accession: "black",
                  });
                  setArrowDownKey({
                    accession: "cyan",
                  });
                  dispatch(sortingDescending("accessionNumber"));
                }}
              ></KeyboardArrowDown>
            </Box>
          </Box>
          <Box>
            <Input
              name="accession"
              type="text"
              className="input_elements"
              disableUnderline={true}
              value={basicForm.accession}
              onChange={handleForm}
            ></Input>
          </Box>
        </Box>

        <Box className="form-element">
          <Box className="form_children">
            <Typography sx={{ color: "white" }}>Instances</Typography>
          </Box>
        </Box>
      </Box>
      {clear === true ? (
        <Box sx={{ position: "absolute", top: "1rem", right: "20rem" }}>
          <Button
            variant="outlined"
            startIcon={<ClearIcon />}
            sx={{
              width: "10rem",
              height: "3rem",
              borderRadius: "25px",
              color: "black",
              borderColor: " black",
            }}
            onClick={() => {
              //clear form and reset filter state on clear filter button click
              clearForm();
              setClear(false);
            }}
          >
            Clear Filter
          </Button>
        </Box>
      ) : (
        <Box />
      )}
      <Box
        sx={{
          position: "absolute",
          top: { lg: "6.5rem", xl: "6.5rem" },
          right: { lg: "5rem", xl: "11rem" },
        }}
      >
        <Button
          variant="contained"
          sx={{
            bgcolor: "white",
            color: "black",
            border: "1px solid black",
            "&:hover": {
              backgroundColor: "#164863",
              color: "white",
            },
          }}
          onClick={() => {
            //this onClick trigger a search with the current form data on search button click
            dispatch
            (searchData(basicForm));
            dispatch(getLength());
          }}
        >
          Search
        </Button>
      </Box>
    </Box>
  );
}

export default BasicSearch;
