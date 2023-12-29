import { KeyboardArrowDown, KeyboardArrowUp } from "@mui/icons-material";
import { Box, Input, Typography } from "@mui/material";
import React, { useState } from "react";
import Button from "@mui/material/Button";
import ClearIcon from "@mui/icons-material/Clear";
import "./BasicSearch.css";
import { useDispatch } from "react-redux";
import {
  searchData,
  sortingAscending,
  sortingDescending,
} from "../../Store/ApiDataSlice";

const ary = [
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
  const dispatch = useDispatch();
  const [clear, setClear] = useState(false);
  const [basicForm, setBasicForm] = useState({
    patientName: "",
    patientMrn: "",
    studyDate: "",
    description: "",
    modality: "",
    accession: "",
    instance: "",
  });
  const [arrowUpKey, setArrowUpKey] = useState(ary);
  const [arrowDownKey, setArrowDownKey] = useState(ary);
  const handleForm = (event) => {
    setClear(true);
    setBasicForm((prevValue) => ({
      ...prevValue,
      [event.target.name]: event.target.value,
    }));
    console.log(basicForm.patientName);
  };
  const clearForm = () => {
    setBasicForm({
      patientName: "",
      patientMrn: "",
      studyDate: "",
      description: "",
      modality: "",
      accession: "",
    });
  };
  return (
    <Box
      sx={{
        width: "65vw",
        height: "10vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "flex-start",
        flexDirection: "row",
        gap: "2.7rem",
      }}
    >
      <Box className="form-element">
        <Box className="form_children">
          <Typography
            sx={{ color: "white" }}
            onClick={() => {
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
                setArrowUpKey({
                  patientName: "cyan",
                });
                setArrowDownKey({
                  patientName: "black",
                });
                dispatch(sortingAscending("patientName"));
              }}
            ></KeyboardArrowUp>
            <KeyboardArrowDown
              fontSize="xs"
              sx={{
                mt: "-7px",
                color: arrowDownKey.patientName,
              }}
              onClick={() => {
                setArrowUpKey({
                  patientName: "black",
                });
                setArrowDownKey({
                  patientName: "cyan",
                });
                dispatch(sortingDescending("patientName"));
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
          <Typography sx={{ color: "white" }}>Discription</Typography>
          <Box className="arrow_keys">
            <KeyboardArrowUp
              fontSize="xs"
              sx={{ color: arrowUpKey.description }}
              onClick={() => {
                setArrowUpKey({
                  description: "cyan",
                });
                setArrowDownKey({
                  description: "black",
                });
                dispatch(sortingAscending("description"));
              }}
            ></KeyboardArrowUp>
            <KeyboardArrowDown
              fontSize="xs"
              sx={{
                mt: "-7px",
                color: arrowDownKey.description,
              }}
              onClick={() => {
                setArrowUpKey({
                  description: "black",
                });
                setArrowDownKey({
                  description: "cyan",
                });
                dispatch(sortingDescending("description"));
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
                setArrowUpKey({
                  accession: "cyan",
                });
                setArrowDownKey({
                  accession: "black",
                });
                dispatch(sortingAscending("accession"));
              }}
            ></KeyboardArrowUp>
            <KeyboardArrowDown
              fontSize="xs"
              sx={{
                mt: "-7px",
                color: arrowDownKey.accession,
              }}
              onClick={() => {
                setArrowUpKey({
                  accession: "black",
                });
                setArrowDownKey({
                  accession: "cyan",
                });
                dispatch(sortingDescending("accession"));
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
      {clear === true ? (
        <Box sx={{ position: "absolute", top: "2rem", right: "20rem" }}>
          <Button
            variant="outlined"
            startIcon={<ClearIcon />}
            sx={{
              width: "10rem",
              height: "3rem",
              borderRadius: "25px",
              color: "black",
              borderColor: "black",
            }}
            onClick={() => {
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
      <Box>
        <Button
          variant="contained"
          sx={{
            position: "absolute",
            bottom: "1.2rem",
            right: "12rem",
            bgcolor: "#E0F4FF",
            color: "black",
            "&:hover": {
              backgroundColor: "#164863",
              color: "white",
            },
          }}
          onClick={() => {
            dispatch(searchData(basicForm));
          }}
        >
          Search
        </Button>
      </Box>
    </Box>
  );
}

export default BasicSearch;
