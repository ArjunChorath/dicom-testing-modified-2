import { Box, Button, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import {
  getDetails,
  getLength,
  pagiantionValues,
} from "../../Store/ApiDataSlice";
import { useDispatch, useSelector } from "react-redux";

const calculateTotalPages = (totalItems, limit) => {
  return Math.ceil(totalItems / limit);
};

function PaginationFooter() {
  const dispatch = useDispatch();
  const LengthOfArray = useSelector(
    (state) => state.data.personDetailsLength.length
  );

  const [select, setSelect] = useState({
    skip: 0,
    limit: 5,
  });

  const [totalPages, setTotalPages] = useState(1);

  const MenuProps = {
    PaperProps: {
      style: {
        backgroundColor: "#164863",
        color: "white",
        maxHeight: "9rem",
        minWidth: 120,
        fontSize: 10,
        marginTop: "2px",
        border: "1px solid black",
      },
    },
  };

  useEffect(() => {
    dispatch(getLength());
    dispatch(getDetails(select));
    dispatch(pagiantionValues(select));
    const newTotalPages = calculateTotalPages(LengthOfArray, select.limit);
    setTotalPages(newTotalPages);
  }, [dispatch, select, LengthOfArray]);

  const handleNext = () => {
    const nextSkip = select.skip + select.limit;

    if (nextSkip < LengthOfArray) {
      setSelect((prevValue) => ({
        ...prevValue,
        skip: nextSkip,
      }));
    }
  };

  const handleBack = () => {
    const prevSkip = select.skip - select.limit;

    if (prevSkip >= 0) {
      setSelect((prevValue) => ({
        ...prevValue,
        skip: prevSkip,
      }));
    }
  };
  const handleFirstPage=()=>{
    setSelect((prevValue) => ({
      ...prevValue,
      skip: 0,
    }));
  }
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        width: "100vw",
        height: "5vw",
      }}
    >
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          width: "65vw",
          maxHeight: "10vw",
        }}
      >
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexDirection: "row",
          }}
        >
          <Select
            value={select.limit}
            onChange={(event) => {
              setSelect((prevValue) => ({
                ...prevValue,
                limit: event.target.value,
              }));
            }}
            sx={{
              bgcolor: "#E0F4FF",
              borderColor: "black",
              height: "2.5rem",
              minWidth: 120,
            }}
            MenuProps={MenuProps}
          >
            <MenuItem value={5} selected>
              5
            </MenuItem>
            <MenuItem value={10}>10</MenuItem>
            <MenuItem value={25}>25</MenuItem>
            <MenuItem value={50}>50</MenuItem>
          </Select>

          <Typography sx={{ml:"10px"}}>Results per Page</Typography>
        </Box>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexDirection: "row",
            gap: ".5rem",
          }}
        >
          <Typography>{`Page ${Math.ceil(
            select.skip / select.limit + 1)
          }/${totalPages}`}</Typography>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              flexDirection: "row",
              border: "1px solid black",
              borderRadius: "5px",
            }}
          >
            <Button size="small" sx={{ borderRight: "1px solid black" }} onClick={handleFirstPage}>
              {"<<"}
            </Button>
            <Button
              size="small"
              sx={{ borderRight: "1px solid black" }}
              onClick={handleBack}
            >
              {"<Back"}
            </Button>
            <Button size="small" onClick={handleNext}>
              {"Next>"}
            </Button>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default PaginationFooter;
