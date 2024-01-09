import React, { useEffect, useState } from "react";
import "./ResponsivePagination.css";
import { Box, Container, Typography } from "@mui/material";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import { useDispatch, useSelector } from "react-redux";
import {
  getDetails,
  getLength,
  pagiantionValues,
} from "../../Store/ApiDataSlice";

const calculateTotalPages = (totalItems, limit) => {
  return Math.ceil(totalItems / limit);
};

function ResponsivePagination() {
  const dispatch = useDispatch();
  const LengthOfArray = useSelector(
    (state) => state.data.personDetailsLength.length
  );
  const [select, setSelect] = useState({
    skip: 0,
    limit: 5,
  });
  const [totalPages, setTotalPages] = useState(1);

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
  const handleFirstPage = () => {
    setSelect((prevValue) => ({
      ...prevValue,
      skip: 0,
    }));
  };
  return (
    <Box>
      <Container
        sx={{
          width: "100vw",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          bgcolor: "white",
          
        }}
      >
        <Box className="header">
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              flexDirection: "row",
              zIndex: "999",
            }}
          >
            <Box sx={{ display: { xs: "none", sm: "flex" } }}>
              Studies per page
            </Box>
            <select
              name=""
              id=""
              style={{
                borderRadius: " 5px",
                cursor: "pointer",
                minWidth: "2vw",
                height: "2rem",
              }}
              onChange={(event) => {
                setSelect((prevValue) => ({
                  ...prevValue,
                  limit: event.target.value,
                }));
              }}
            >
              <option value="5" defaultValue>
                5
              </option>
              <option value="10">10</option>
              <option value="25">25</option>
            </select>
          </Box>
          <Box>
            <Typography>{`${Math.ceil(
              select.skip / select.limit + 1
            )} of ${totalPages}`}</Typography>
          </Box>
          <Box
            className="rightSide"
            sx={{
              border: "0.5px solid rgb(0, 0, 0)",
              backgroundColor: "white",
              padding: "1px 4px",
              borderRadius: "5px",
              cursor: "pointer",
            }}
          >
            <Box>
              <HomeOutlinedIcon onClick={handleFirstPage} />
            </Box>
            <Typography
              sx={{
                marginLeft: "4px",
                paddingLeft: "4px",
                borderLeft: "0.5px solid black",
              }}
              onClick={handleBack}
            >
              {"<<"}
            </Typography>
            <Typography
              sx={{
                marginLeft: "4px",
                paddingLeft: "4px",
                borderLeft: " 0.5px solid black",
              }}
              onClick={handleNext}
            >
              {">>"}
            </Typography>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}

export default ResponsivePagination;
