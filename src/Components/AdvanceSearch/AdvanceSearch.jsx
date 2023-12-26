import { Box, Button, Input, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import ListItemText from "@mui/material/ListItemText";
import Select from "@mui/material/Select";
import Checkbox from "@mui/material/Checkbox";
import "./AdvanceSearch.css";
import { useDispatch, useSelector } from "react-redux";
import {
  getModality,
  saveQueryData,
  searchData,
} from "../../Store/ApiDataSlice";

function AdvanceSearch() {
  const name = useSelector((state) => state.data.modalityData);
  const dispatch = useDispatch();

  useEffect(
    () => {
      dispatch(getModality());
    },
    [dispatch],
    name
  );

  const [query, setQuery] = useState(false);
  const [modalityType, setModalityType] = useState([]);
  const [formDetails, setFormDetails] = useState({
    queryName: "",
    patientName: "",
    mrn: "",
    startDate: "",
    endDate: "",
    startTime: "",
    endTime: "",
    discription: "",
    modality: "",
    accession: "",
    instance: "",
  });

  const handleForm = (event) => {
    setFormDetails((prevValue) => ({
      ...prevValue,
      [event.target.name]: event.target.value,
    }));
  };
  const handleChange = (event) => {
    const {
      target: { value },
    } = event;
    setModalityType(typeof value === "string" ? value.split(",") : value);
    setFormDetails((prevValue) => ({
      ...prevValue,
      modality: event.target.value,
    }));
  };
  const clearForm = () => {
    setFormDetails({
      patientName: "",
      mrn: "",
      startDate: "",
      endDate: "",
      startTime: "",
      endTime: "",
      discription: "",
      modality: "",
      accession: "",
      startInstance: "",
      endInstance: "",
    });
  };
  const ITEM_HEIGHT = 50;
  const ITEM_PADDING_TOP = 8;
  const MenuProps = {
    PaperProps: {
      style: {
        backgroundColor: "#164863",
        color: "white",
        maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
        minWidth: 50,
        fontSize: 10,
        marginTop: "10px",
      },
    },
  };
  const MenuProp = {
    PaperProps: {
      style: {
        backgroundColor: "#164863",
        color: "white",
        maxHeight: "9rem",
        minWidth: 130,
        fontSize: 10,
        marginTop: "2px",
        boxShadow: "3",
      },
    },
  };
  return (
    <Box
      sx={{
        width: "20vw",
        minHeight: "62vh",
        bgcolor: "white",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
        border: "1px solid black",
        borderRadius: "5px",
        boxShadow: "5",
        gap: "1rem",
      }}
      name="patientDetails"
    >
      <Box className="form_elements" sx={{mt:"10px"}}>
        <Typography>Patient Name:</Typography>
        <Input
          name="patientName"  
          type="text"
          value={formDetails.patientName}
          className="input_element"
          disableUnderline={true}
          onChange={handleForm}
        ></Input>
      </Box>

      <Box className="form_elements">
        <Typography>MRN:</Typography>
        <Input
          name="mrn"
          type="text"
          className="input_element"
          disableUnderline={true}
          onChange={handleForm}
          value={formDetails.mrn}
        ></Input>
      </Box>

      <Box className="form_elements">
        <Typography>Study Date:</Typography>
        <Input
          name="startDate"
          type="text"
          placeholder="Start date"
          className="input_element"
          onFocus={(e) => (e.target.type = "date")}
          onBlur={(e) => (e.target.type = "text")}
          disableUnderline={true}
          onChange={handleForm}
          value={formDetails.startDate}
        ></Input>
      </Box>
      <Box
        className="form_elements"
        sx={{
          display: "flex",
          justifyContent: "flex-end",
          alignItems: "center",
          width: "18vw",
        }}
      >
        <Input
          name="endDate"
          type="text"
          placeholder="End date"
          className="input_element"
          onFocus={(e) => (e.target.type = "date")}
          onBlur={(e) => (e.target.type = "text")}
          disableUnderline={true}
          onChange={handleForm}
          value={formDetails.endDate}
        ></Input>
      </Box>

      <Box className="form_elements">
        <Typography>Study Time:</Typography>
        <Input
          name="startTime"
          type="text"
          placeholder="Start Time"
          className="input_element"
          disableUnderline={true}
          onFocus={(e) => (e.target.type = "time")}
          onBlur={(e) => (e.target.type = "text")}
          onChange={handleForm}
          value={formDetails.startTime}
        ></Input>
      </Box>
      <Box
        className="form_elements"
        sx={{
          display: "flex",
          justifyContent: "flex-end",
          alignItems: "center",
          width: "18vw",
        }}
      >
        <Input
          name="endTime"
          placeholder="End Time"
          type="text"
          className="input_element"
          disableUnderline={true}
          onFocus={(e) => (e.target.type = "time")}
          onBlur={(e) => (e.target.type = "text")}
          onChange={handleForm}
          value={formDetails.endTime}
        ></Input>
      </Box>

      <Box className="form_elements">
        <Typography>Discription:</Typography>
        <Input
          name="discription"
          type="text"
          className="input_element"
          disableUnderline={true}
          onChange={handleForm}
          value={formDetails.discription}
        ></Input>
      </Box>

      <Box className="form_elements">
        <Typography>Modality:</Typography>
        <FormControl>
          <Select
            className="input_element"
            sx={{
              "& .MuiSvgIcon-root": {
                color: "grey",
              },
            }}
            name="modality"
            multiple
            value={modalityType}
            onChange={handleChange}
            renderValue={(selected) => selected.join(", ")}
            MenuProps={MenuProps}
          >
            {name.map((names) => (
              <MenuItem key={names} value={names}>
                <Checkbox
                  checked={modalityType.indexOf(names) > -1}
                  sx={{ color: "#9BBEC8" }}
                />
                <ListItemText primary={names} />
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </Box>

      <Box className="form_elements">
        <Typography>Accession:</Typography>
        <Input
          name="accession"
          type="text"
          className="input_element"
          disableUnderline={true}
          onChange={handleForm}
          value={formDetails.accession}
        ></Input>
      </Box>

      <Box className="form_elements">
        <Typography>Instances:</Typography>
          <Select
            value={formDetails.instance}
            name="instance"
            onChange={handleForm}
            displayEmpty
            className="input_element"
            MenuProps={MenuProp}
            disableUnderline={true}
          >
            <MenuItem
              value=""
              disabled
              sx={{ height: ".1px", color: "#164863", position: "absolute" }}
            >
              Select...
            </MenuItem>
            <MenuItem value="0-50">0-50</MenuItem>
            <MenuItem value="51-100">51-100</MenuItem>
            <MenuItem value="100+">100+</MenuItem>
          </Select>
      </Box>
      <Box className="form_elements">
        <Box sx={{ display: "flex", gap: "1rem" }}>
          <Button
            variant="contained"
            type="reset"
            onClick={clearForm}
          >
            reset
          </Button>
          <Button
            variant="contained"           
            onClick={() => {
              setQuery(true);
            }}
          >
            save
          </Button>
        </Box>
        <Button
          variant="contained"
          onClick={() => {
            dispatch(searchData(formDetails));
          }}
        >
          search
        </Button>
      </Box>
      {query === true ? (
        <Box className="form_elements" sx={{height:"5rem"}}>
          <Typography>Query Name:</Typography>
          <Input
            name="queryName"
            type="text"
            value={formDetails.queryName}
            className="input_element"
            disableUnderline={true}
            onChange={handleForm}
          ></Input>
          <Button  onClick={() => {
              setQuery(false);  
              clearForm();
            }} sx={{ml:"10px"}}>
            cancel
          </Button>
          <Button
            onClick={() => {
              setQuery(false);
              dispatch(saveQueryData(formDetails));
              clearForm();
            }}
          >
            Save
          </Button>
        </Box>
      ) : (
        ""
      )}
    </Box>
  );
}

export default AdvanceSearch;
