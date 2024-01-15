import { Box, Button, Input, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import MenuItem from "@mui/material/MenuItem";
import ListItemText from "@mui/material/ListItemText";
import Select from "@mui/material/Select";
import Checkbox from "@mui/material/Checkbox";
import { useDispatch, useSelector } from "react-redux";
import {
  getModality,
  saveQueryData,
  searchData,
} from "../../Store/ApiDataSlice";
import "./AdvanceSearch.css";

function AdvanceSearch() {
  /**
   * AdvanceSearch is used for complex searches
   */
  //Defined variables - start

  // const name = useSelector((state) => state.data.modalityData);
  const name = ["asd", "asddd"];
  const paginationValues = useSelector((state) => state.data.skipAndLimit);
  const dispatch = useDispatch();
  const [query, setQuery] = useState(false);
  const [modalityType, setModalityType] = useState([]);
  const [formDetails, setFormDetails] = useState({
    queryName: "",
    patientName: "",
    patientMrn: "",
    studyDate: "",
    endDate: "",
    startTime: "",
    endTime: "",
    description: "",
    modality: "",
    accession: "",
    instance: "",
  });
  //Defined variables - end

  /**
   *handleForm is a function that takes @param event as parameter
   *it updates state of form using 'setFormDetails' function
   *also it sets 'skip' and limit in the form state using values from a variable called 'paginationVales'
   */

  const handleForm = (event) => {
    setFormDetails((prevValue) => ({
      ...prevValue,
      [event.target.name]: event.target.value,
      skip: paginationValues.skip,
      limit: paginationValues.limit,
    }));
  };
  /**
   *updates the state of 'modalityType'and the 'formDetails.modality when the selected modality value change'
   *@param event is used to get the value selected by the user
   *it handles both single and multiple modality selection
   */
  const handleChange = (event) => {
    const {
      target: { value },
    } = event;
    setModalityType(typeof value === "string" ? value.split(",") : value);
    setFormDetails((prevValue) => ({
      ...prevValue,
      modality: event.target.value,
      skip: paginationValues.skip,
      limit: paginationValues.limit,
    }));
  };
  /**
   *reset the state of the form to its initial values
   *clearing the input fields
   */
  const clearForm = () => {
    setFormDetails({
      patientName: "",
      patientMrn: "",
      studyDate: "",
      endDate: "",
      startTime: "",
      endTime: "",
      description: "",
      modality: "",
      accession: "",
      instance: "",
      skip: "",
      limit: "",
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
  /**
   *this useEffect hook is triggered when the component mounts
   *it dispatches the 'getModality' action,which fetches modality data and update redux store
   */
  useEffect(() => {
    dispatch(getModality());
  }, [paginationValues, dispatch]);
  return (
    <Box className="advance-main">
      <Box className="advance-child ">
        <Box className="form_elements">
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
          <Typography>patientMrn:</Typography>
          <Input
            name="patientMrn"
            type="text"
            className="input_element"
            disableUnderline={true}
            onChange={handleForm}
            value={formDetails.patientMrn}
          ></Input>
        </Box>

        <Box className="form_elements">
          <Typography>Study Date:</Typography>
          <Input
            name="studyDate"
            type="text"
            placeholder="Start date"
            className="input_element"
            onFocus={(e) => (e.target.type = "date")}
            onBlur={(e) => (e.target.type = "text")}
            disableUnderline={true}
            onChange={handleForm}
            value={formDetails.studyDate}
          ></Input>
        </Box>
        <Box
          className="form_elements"
          sx={{
            display: "flex",
            justifyContent: "flex-end",
            alignItems: "center",
            width: { xs: "14rem", sm: "18rem" },
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
          <Typography>description:</Typography>
          <Input
            name="description"
            type="text"
            className="input_element"
            disableUnderline={true}
            onChange={handleForm}
            value={formDetails.description}
          ></Input>
        </Box>

        <Box className="form_elements">
          <Typography>Modality:</Typography>

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
            <MenuItem value="0-50">0-50</MenuItem>
            <MenuItem value="51-100">51-100</MenuItem>
            <MenuItem value="100">100+</MenuItem>
          </Select>
        </Box>
        <Box
          className="form_elements"
          sx={{ width: { xs: "15rem", sm: "18rem" } }}
        >
          <Box sx={{ display: "flex", gap: { xs: "0", sm: "1rem" } }}>
            <Button variant="contained" type="reset" onClick={clearForm}>
              reset
            </Button>
            {formDetails.patientName || formDetails.patientMrn ? (
              <Button
                variant="contained"
                onClick={() => {
                  //when save button clicked it indicates that user wants to save the query
                  setQuery(true);
                }}
              >
                save
              </Button>
            ) : (
              <Button variant="contained" disabled={true}>
                save
              </Button>
            )}
          </Box>
          <Button
            variant="contained"
            onClick={() => {
              //it triggers the 'searchData'action, passing the current form details as parameters to initialize search
              dispatch(searchData(formDetails));
            }}
          >
            search
          </Button>
        </Box>
        {(formDetails.patientName || formDetails.patientMrn) &&
        query === true ? (
          <Box className="form_elements" sx={{ height: "5rem" }}>
            <Typography>Query Name:</Typography>
            <Input
              name="queryName"
              type="text"
              value={formDetails.queryName}
              className="input_element"
              disableUnderline={true}
              onChange={handleForm}
              required={true}
            ></Input>
            <Button
              onClick={() => {
                //set the state variable 'query' to 'false', cancel the save operation and clear the form
                setQuery(false);
                clearForm();
              }}
              sx={{ ml: "10px" }}
            >
              cancel
            </Button>
            <Button
              onClick={() => {
                //after entering the query name,the 'save' button dispatches 'savequeryData'sets query to 'false' and clears the form
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
    </Box>
  );
}

export default AdvanceSearch;
