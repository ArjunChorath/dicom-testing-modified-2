import { Box, Button, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import {
  getDetails,
  getLength,
  pagiantionValues,
} from "../../Store/ApiDataSlice";
import { useDispatch, useSelector } from "react-redux";
import "./PaginationFooter.css";


const calculateTotalPages = (totalItems, limit) => {
  return Math.ceil(totalItems / limit); //function to calculate total number of pages
};

function PaginationFooter() {
  /**
   * PaginationFooter for pagination purpous
   * *used for rendering particular number of elements in the display
   */
  //Defined variables - start
  const dispatch = useDispatch();
  const LengthOfArray = useSelector(
    (state) => state.data.personDetailsLength.length
  ); //selecting the length of 'personDetails' array from the redux store

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
        height: "9rem",
        minWidth: 120,
        fontSize: 10,
        marginTop: "8px",
        border: "1px solid black",
      },
    },
  };
  //Defined variables - end
  /**
   *this useEffect responsible for fetching length of data from redux store
   *dispatches an action 'getDetails' to fetch data based on 'select' object from redux store
   *dispatches an action to update pagination related values in redux store
   */
  useEffect(() => {
    dispatch(getLength());
    dispatch(pagiantionValues(select));
    dispatch(getDetails(select));
    const newTotalPages = calculateTotalPages(LengthOfArray, select.limit);
    setTotalPages(newTotalPages);
  }, [dispatch, select, LengthOfArray]);
  /**
   * handleNext function is an event handler responsible for advancing to the next page of data
   */
  const handleNext = () => {
    const nextSkip = select.skip + select.limit;

    if (nextSkip < LengthOfArray) {
      setSelect((prevValue) => ({
        ...prevValue,
        skip: nextSkip,
      }));
    }
  };
  /**
   * handleBack function is an event handler responsible for navigating to the previous page of data
   */
  const handleBack = () => {
    const prevSkip = select.skip - select.limit;

    if (prevSkip >= 0) {
      setSelect((prevValue) => ({
        ...prevValue,
        skip: prevSkip,
      }));
    }
  }; 
  /**
   * handleFirstPage function is an event handler responsible for navigating to the First page of data
   */
  const handleFirstPage = () => {
    setSelect( 
    (prevValue) => ({
     
      ...prevValue,
      skip: 0,
    }));
    window.location.reload()
  };
  return (
    <Box
      sx={{
        display: { xs: "none", lg: "flex" },
        alignItems: "center",
        justifyContent: "center",
        width: "100vw",
        height: "5vw",
      }}
    >
      <Box className="child-box">
        <Box className="selectbox">
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
          <Typography sx={{ ml: "10px" }}>Results per Page</Typography>
        </Box>
        <Box className="rightside">
          <Typography>{`Page ${Math.ceil(
            select.skip / select.limit + 1
          )}/${totalPages}`}</Typography>
          <Box className="rightSidechild">
            <Button
              sx={{ borderRight: "1px solid black", fontSize: "10px" }}
              onClick={handleFirstPage}
            >
              <HomeOutlinedIcon />
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


