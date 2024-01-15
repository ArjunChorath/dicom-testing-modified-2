import { Box, Typography } from "@mui/material";
import React, { useEffect } from "react";
import DeleteIcon from "@mui/icons-material/Delete";
import { useDispatch, useSelector } from "react-redux";
import {
  deleteQuery,
  savedQueryDatas,
  searchData,
} from "../../Store/ApiDataSlice";
import "./SavedQuery.css";

function SavedQuery() {
  /**
   *SavedQuery used for managing the display od saved queries
   */
  //Defined variables - start
  const savedQuery = useSelector((state) => state.data.savedQuarys);
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
      <Typography
        sx={{ pl: "5px", fontWeight: "bold", fontSize: "15px", mt: "10px" }}
      >
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
                  //when this onclick function is triggered it dispatch the 'searchData' action,passing corresponding query data as an arguement
                  dispatch(searchData(value));
                }}
              >
                {value.queryName}
              </Typography>
              <Box className="icondiv">
                <Box>
                  <DeleteIcon
                    className="clear"
                    fontSize="medium"
                    onClick={() => {
                      //when this onclick function is triggered it dispatch the 'deleteQuery' action,passing corresponding query ID as an arguement
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
