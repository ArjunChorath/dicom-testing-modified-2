import { Box, Typography } from "@mui/material";
import React, { useEffect } from "react";
import DeleteIcon from "@mui/icons-material/Delete";
import "./SavedQuery.css";
import { useDispatch, useSelector } from "react-redux";
import { deleteQuery, savedQueryDatas, searchData } from "../../Store/ApiDataSlice";

function SavedQuery() {
  /**
   *SavedQuery used for managing the display od saved queries
   */
  //Defined variables - start
  const savedQuery = useSelector((state) => state.data.savedQuarys); //used to select save queries from redux store using useSelector
  const dispatch = useDispatch();
  //Defined variables - end

  /**
   *this useEffect hook is triggered when the component mounts
   *it dispatch the 'savedQueryDatas' action,which fetches saved queries datas and update redux store
   */
  useEffect(() => {
    dispatch(savedQueryDatas());
  }, [dispatch]);
  return (
    <Box className="main-div">
      <Typography sx={{ pl: "5px", fontWeight: "bold", fontSize: "15px" }}>
        Saved Query's
      </Typography>
      <Box className="child-div">
        {savedQuery.map((value) => {
          return (
            <Box className="query" key={value.id}>
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
                onClick={() => {
                  dispatch(searchData(value));//when this onclick function is triggered it dispatch the 'searchData' action,passing corresponding query data as an arguement
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
                      dispatch(deleteQuery(value.id)); //when this onclick function is triggered it dispatch the 'deleteQuery' action,passing corresponding query ID as an arguement
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
