import { Box } from "@mui/material";
import React, { useState } from "react";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import ListItemText from "@mui/material/ListItemText";
import Select from "@mui/material/Select";
import Checkbox from "@mui/material/Checkbox";
import { KeyboardArrowUp } from "@mui/icons-material";
import { KeyboardArrowDown } from "@mui/icons-material";
import { useDispatch } from "react-redux";
import { clearfilter, sortingAscending, sortingDescending } from "../Store/ApiDataSlice";

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
      border: "1px solid black",
    },
  },
};
const names = [
  "AR",
  "ASMT",
  "AU",
  "BDUS",
  "BI",
  "BMD",
  "CR",
  "CT",
  "DG",
  "DOC",
  "RTRECORD",
];

const Modality = () => {
  const dispatch=useDispatch()
  const [isClickedModality, setIsClickedModality] = useState(false);
  const [modalityType, setModalityType] = useState([]);
  const [upArrowFill, setUpArrowFill] = useState("blue");
  const [downArrowFill, setDownArrowFill] = useState("blue");

  const upClicked = () => {
    setUpArrowFill("rgb(0,195,255)");
    setDownArrowFill("#090939");
    dispatch(sortingAscending("modality"))
    dispatch(clearfilter());
  };
  const downClicked = () => {
    setUpArrowFill("#090939");
    setDownArrowFill("rgb(0,195,255)");
    dispatch(sortingDescending("modality"))
    dispatch(clearfilter());
  };

  const handleChange = (event) => {
    const {
      target: { value },
    } = event;
    setModalityType(typeof value === "string" ? value.split(",") : value);
  };
  return (
    <div>
      <Box
        sx={{
          display: "flex",
          alignItems: ":center",
          justifyContent: "center",
        }}
      >
        <Box sx={{ display: "flex", flexDirection: "column" }}>
          <Box sx={{ color: "white", marginBottom: "1px", height: "1px" }}>
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
              onClick={upClicked}
              sx={{ color: upArrowFill, paddingLeft: "12px" }}
            ></KeyboardArrowUp>
            <KeyboardArrowDown
              fontSize="xs"
              onClick={downClicked}
              sx={{
                mt: "-8px",
                mb: "2px",
                color: downArrowFill,
                paddingLeft: "12px",
              }}
            ></KeyboardArrowDown>
          </Box>

          <FormControl sx={{ m: 0, width: 130, height: "31px" }}>
            <Select
              sx={{
                height: "32px",
                width: "140px",
                backgroundColor: "#E0F4FF",
                color: "black",
                outline: "none",
                border: `1px solid ${isClickedModality ? "cyan" : "black"}`,
                "& .MuiSvgIcon-root": {
                  color: "grey",
                },
              }}
              onFocus={() => {setIsClickedModality(true); dispatch(clearfilter());}}
              onBlur={() => {setIsClickedModality(false); dispatch(clearfilter());}}
              labelId="demo-multiple-checkbox-label"
              id="demo-multiple-checkbox"
              multiple
              value={modalityType}
              onChange={handleChange}
              renderValue={(selected) => selected.join(", ")}
              MenuProps={MenuProps}
            >
              {names.map((name) => (
                <MenuItem key={name} value={name}>
                  <Checkbox
                    checked={modalityType.indexOf(name) > -1}
                    sx={{ color: "#9BBEC8" }}
                  />
                  <ListItemText primary={name} />
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Box>
      </Box>
    </div>
  );
};

export default Modality;
