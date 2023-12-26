import { KeyboardArrowDown, KeyboardArrowUp } from "@mui/icons-material";
import { Box, Input, Typography } from "@mui/material";
import React, { useState } from "react";
import Button from "@mui/material/Button";
import ClearIcon from "@mui/icons-material/Clear";
import "./BasicSearch.css";
import { useDispatch } from "react-redux";
import {
  getDetails,
  searchData,
  sortingAscending,
  sortingDescending,
} from "../../Store/ApiDataSlice";

function BasicSearch() {
  const dispatch = useDispatch();
  const [clear, setClear] = useState(false);
  const [basicForm, setBasicForm] = useState({
    patientName: "",
    mrn: "",
    startDate: "",
    endDate: "",
    discription: "",
    modality: "",
    accession: "",
  });
  const [arrowUpKey, setArrowUpKey] = useState({
    patientName: "black",
    mrn: "black",
    startDate: "black",
    discription: "black",
    modality: "black",
    accession: "black",
  });
  const [arrowDownKey, setArrowDownKey] = useState({
    patientName: "black",
    mrn: "black",
    startDate: "black",
    discription: "black",
    modality: "black",
    accession: "black",
  });
  const handleForm = (event) => {
    setClear(true);
    setBasicForm((prevValue) => ({
      ...prevValue,
      [event.target.name]: event.target.value,
    }));
  };
  const clearForm = () => {
    setBasicForm({
      patientName: "",
      mrn: "",
      startDate: "",
      discription: "",
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
                dispatch(sortingAscending("name"));
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
                dispatch(sortingDescending("name"));
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
              sx={{ color: arrowUpKey.mrn }}
              onClick={() => {
                setArrowUpKey({
                  mrn: "cyan",
                });
                setArrowDownKey({
                  mrn: "black",
                });
                dispatch(sortingAscending("mrn"));
              }}
            ></KeyboardArrowUp>
            <KeyboardArrowDown
              fontSize="xs"
              sx={{
                mt: "-7px",
                color: arrowDownKey.mrn,
              }}
              onClick={() => {
                setArrowUpKey({
                  mrn: "black",
                });
                setArrowDownKey({
                  mrn: "cyan",
                });
                dispatch(sortingDescending("mrn"));
              }}
            ></KeyboardArrowDown>
          </Box>
        </Box>
        <Box>
          <Input
            name="mrn"
            type="text"
            className="input_elements"
            disableUnderline={true}
            value={basicForm.mrn}
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
            name="startDate"
            type="date"
            className="input_elements"
            disableUnderline={true}
            value={basicForm.startDate}
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
              sx={{ color: arrowUpKey.discription }}
              onClick={() => {
                setArrowUpKey({
                  discription: "cyan",
                });
                setArrowDownKey({
                  discription: "black",
                });
                dispatch(sortingAscending("description"));
              }}
            ></KeyboardArrowUp>
            <KeyboardArrowDown
              fontSize="xs"
              sx={{
                mt: "-7px",
                color: arrowDownKey.discription,
              }}
              onClick={() => {
                setArrowUpKey({
                  discription: "black",
                });
                setArrowDownKey({
                  discription: "cyan",
                });
                dispatch(sortingDescending("description"));
              }}
            ></KeyboardArrowDown>
          </Box>
        </Box>
        <Box>
          <Input
            name="discription"
            type="text"
            className="input_elements"
            disableUnderline={true}
            value={basicForm.discription}
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
              color: "white",
              borderColor: "white",
            }}
            onClick={() => {
              clearForm();
              dispatch(getDetails());
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
