import { Box, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import { useDispatch, useSelector } from "react-redux";
import {
  deleteQuery,
  savedQueryDatas,
  searchData,
  saveQueryData,
} from "../../Store/ApiDataSlice";
import "./SavedQuery.css";

function SavedQuery() {
  const savedQuery = useSelector((state) => state.data.savedQuarys);
  const dispatch = useDispatch();

  const [isEditing, setIsEditing] = useState(false);
  const [editedQuery, setEditedQuery] = useState(null);

  useEffect(() => {
    dispatch(savedQueryDatas());
  }, [dispatch]);

  const handleSave = () => {
    if (editedQuery) {
      dispatch(saveQueryData(editedQuery)); // Assuming saveQueryData expects the edited query data
      setIsEditing(false);
      setEditedQuery(null);
    }
  };

  return (
    <Box className="main-div">
      <Typography
        sx={{ pl: "5px", fontWeight: "bold", fontSize: "15px", mt: "10px" }}
      >
        Saved Query's
      </Typography>
      <Box className="child-div">
        {savedQuery.map((value) => (
          <Box className="query" key={value.id}>
            {isEditing && editedQuery && editedQuery.id === value.id ? (
              <input
                type="text"
                value={editedQuery.queryName}
                onChange={(e) =>
                  setEditedQuery({ ...editedQuery, queryName: e.target.value })
                }
              />
            ) : (
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
                  dispatch(searchData(value));
                }}
              >
                {value.queryName}
              </Typography>
            )}

            <Box className="icondiv">
              {isEditing && editedQuery && editedQuery.id === value.id && (
                <button onClick={handleSave}>Save</button>
              )}
              {!isEditing && (
                <DeleteIcon
                  className="clear"
                  fontSize="medium"
                  onClick={() => {
                    dispatch(deleteQuery(value.id));
                  }}
                />
              )}
              <EditIcon
                onClick={() => {
                  setIsEditing(true);
                  setEditedQuery(value);
                }}
              />
            </Box>
          </Box>
        ))}
      </Box>
    </Box>
  );
}

export default SavedQuery;
