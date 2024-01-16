import { Box, Typography } from "@mui/material";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import ManageSearchOutlinedIcon from "@mui/icons-material/ManageSearchOutlined";
import BookmarkBorderOutlinedIcon from "@mui/icons-material/BookmarkBorderOutlined";
import React, { useState } from "react";
import AdvanceSearch from "../../../Components/AdvanceSearch/AdvanceSearch";
import SavedQuery from "../../../Components/SavedQuery/SavedQuery";
import "./SideMenu.css"
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
    <Box className="outer_block">
      <Box className="inner_block">
        <Box className="home_icon">
          <HomeOutlinedIcon
            sx={{ fontSize: { xs: "25px", sm: "30px", md: "35px" } }}
            varient="outlined"
            onClick={() => {
              //reload the page when home icon is clicked
              window.location.reload();
            }}
          />
          <Box className="home_icon_text">
            <Typography
              sx={{ fontSize: { xs: "8px", sm: "12px", md: "15px" } }}
            >
              Home
            </Typography>
          </Box>
        </Box>
        <Box
          className="advance_search_icon"
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
          <Box className="advance_search_icon_text">
            <Typography
              sx={{ fontSize: { xs: "8px", sm: "12px", md: "15px" } }}
            >
              Advance Search
            </Typography>
          </Box>
        </Box>
        <Box className="saved_query_icon">
          <BookmarkBorderOutlinedIcon
            sx={{ fontSize: { xs: "25px", sm: "30px", md: "35px" } }}
            varient="outlined"
          />
          <Box
            className="saved_query_icon_text"
            onClick={() => {
              //toggles the visibility of the 'savedQuery' component
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
        <Box className="adv_search_toggle"
          sx={{left: { xs: "5rem", sm: "8rem", md: "12rem" }, }}>
          <AdvanceSearch />
        </Box>
      ) : (
        ""
      )}
      {savedQuery === true ? (
        <Box className="saved_query_toggle"
          sx={{ left: { xs: "5rem", sm: "8rem", md: "12rem" },}}>
          <SavedQuery />
        </Box>
      ) : (
        ""
      )}
    </Box>
  );
}

export default SideMenu;
