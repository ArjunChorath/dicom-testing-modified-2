import { Box, Typography } from "@mui/material";
import React, { useEffect } from "react";
import DeleteIcon from "@mui/icons-material/Delete";
import "./SavedQuery.css";
import { useDispatch, useSelector } from "react-redux";
import { deleteQuery, savedQueryDatas } from "../../Store/ApiDataSlice";

function SavedQuery() {
  const savedQuery = useSelector((state) => state.data.savedQuarys);
  console.log(savedQuery);
  const dispatch = useDispatch();
  useEffect(
    () => {
      dispatch(savedQueryDatas());
    },
    [dispatch],
    savedQuery
  );
  return (
    <Box
      sx={{
        minWidth: "15vw",
        maxHeight: "30vh",
        display: "flex",
        alignItems: "flex-start",
        flexDirection: "column",
        justifyContent: "center",
        gap: "1.2rem",
      }}
    >
      <Typography sx={{ pl: "5px", fontWeight: "bold", fontSize: "15px" }}>
        Saved Query's
      </Typography>
      <Box
        sx={{
          maxWidth: "14vw",
          height: "20vh",
          display: "flex",
          alignItems: "center",
          flexDirection: "column",
          justifyContent: "flex-start",
          gap: "1.5rem",
        }}
      >
        {savedQuery.map((value) => {
          return (
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                flexDirection: "row",
                justifyContent: "space-between",
                minWidth: "14vw",
                height: "4.5vh",
                border: "1px solid white",
                borderRadius: "7px",
                boxShadow: "5",
              }}
              className="query"
            >
              <Typography
                sx={{
                  pl: "5px",
                  fontWeight: "bold",
                  width: "10vw",
                  whiteSpace: "nowrap",
                  overflow: "hidden",
                  textOverflow: "ellipsis",
                  height: "1.5rem",
                }}
              >
                {value.queryName}
              </Typography>
              <Box
                sx={{
                  pr: "10px",
                  display: "flex",
                  alignItems: "center",
                  flexDirection: "row",
                  justifyContent: "space-between",
                  maxWidth: "5vw",
                  height: "5vh",
                }}
              >
                <Box>
                  <DeleteIcon
                    className="clear"
                    fontSize="medium"
                    onClick={() => {
                      dispatch(deleteQuery(value.id));
                    }}
                  />
                </Box>
              </Box>
            </Box>
          );
        })}
      </Box>
    </Box>
  );
}

export default SavedQuery;
