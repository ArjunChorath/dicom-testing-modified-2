import { Box, Typography } from "@mui/material";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import ManageSearchOutlinedIcon from "@mui/icons-material/ManageSearchOutlined";
import BookmarkBorderOutlinedIcon from "@mui/icons-material/BookmarkBorderOutlined";
import React, { useState } from "react";
import AdvanceSearch from "../../../Components/AdvanceSearch/AdvanceSearch";
import SavedQuery from "../../../Components/SavedQuery/SavedQuery";

function SideMenu() {
  /**
   * SideMenu component is for user interface element for side navigation menu
   * it proviedes a convenient navigation menufor useres to access diffrent functionalities
   */
  //Defined variables - start
  const [advanceSearch, setAdvanceSearch] = useState(false);
  const [savedQuery, setSavedQuery] = useState(false);
  //Defined variables - end
  return (
    <Box
      sx={{
        height: "100vh",
        width: "13vw",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        boxShadow:
          "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
        position: "relative",
        bgcolor: "white",
      }}
    >
      <Box
        sx={{
          height: "90vh",
          width: "13vw",
          bgcolor: "white",
          display: "flex",
          alignItems: "center",
          justifyContent: "flex-start",
          flexDirection: "column",
        }}
      >
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexDirection: "column",
            height: "10vh",
            width: "13vw",
            "&:hover": {
              bgcolor: "#F5F7F8",
            },
          }}
        >
          <HomeOutlinedIcon
            sx={{ fontSize: { xs: "25px", sm: "30px", md: "35px" } }}
            varient="outlined"
            onClick={() => {
              //reload the page when home icon is clicked
              window.location.reload();
            }}
          />
          <Box
            sx={{
              width: "12vw",
              height: "1rem",
              textOverflow: "ellipsis",
              overflow: "hidden",
              whiteSpace: "nowrap",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Typography
              sx={{ fontSize: { xs: "8px", sm: "12px", md: "15px" } }}
            >
              Home
            </Typography>
          </Box>
        </Box>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexDirection: "column",
            height: "10vh",
            width: "13vw",
            "&:hover": {
              bgcolor: "#F5F7F8",
            },
          }}
          onClick={() => {
            //toggle the visibility of 'advanceSearch' component
            setAdvanceSearch(!advanceSearch);
            setSavedQuery(false);
          }}
        >
          <ManageSearchOutlinedIcon
            sx={{ fontSize: { xs: "25px", sm: "30px", md: "35px" } }}
            varient="outlined"
          />
          <Box
            sx={{
              width: "12vw",
              height: "1rem",
              textOverflow: "ellipsis",
              overflow: "hidden",
              whiteSpace: "nowrap",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Typography
              sx={{ fontSize: { xs: "8px", sm: "12px", md: "15px" } }}
            >
              Advance Search
            </Typography>
          </Box>
        </Box>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexDirection: "column",
            height: "10vh",
            width: "13vw",
            "&:hover": {
              bgcolor: "#F5F7F8",
            },
          }}
        >
          <BookmarkBorderOutlinedIcon
            sx={{ fontSize: { xs: "25px", sm: "30px", md: "35px" } }}
            varient="outlined"
          />
          <Box
            sx={{
              width: "12vw",
              height: "1rem",
              textOverflow: "ellipsis",
              overflow: "hidden",
              whiteSpace: "nowrap",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
            onClick={() => {//toggles the visibility of the 'savedQuery' component
              setSavedQuery(!savedQuery);
              setAdvanceSearch(false);
            }}
          >
            <Typography
              sx={{ fontSize: { xs: "8px", sm: "12px", md: "15px" } }}
            >
              Saved Query's
            </Typography>
          </Box>
        </Box>
      </Box>
      {advanceSearch === true ? (
        <Box
          sx={{
            position: "absolute",
            top: "4rem",
            left: { xs: "5rem", sm: "8rem", md: "12rem" },
            zIndex: "999",
          }}
        >
          <AdvanceSearch />
        </Box>
      ) : (
        ""
      )}
      {savedQuery === true ? (
        <Box
          sx={{
            position: "absolute",
            top: "10rem",
            left: { xs: "5rem", sm: "8rem", md: "12rem" },
            zIndex: "999",
          }}
        >
          <SavedQuery />
        </Box>
      ) : (
        ""
      )}
    </Box>
  );
}

export default SideMenu;
