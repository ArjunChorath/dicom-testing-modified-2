import { Box, Typography } from "@mui/material";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import ManageSearchOutlinedIcon from "@mui/icons-material/ManageSearchOutlined";
import BookmarkBorderOutlinedIcon from "@mui/icons-material/BookmarkBorderOutlined";
import React, { useState } from "react";
import AdvanceSearch from "../../../Components/AdvanceSearch/AdvanceSearch";
import SavedQuery from "../../../Components/SavedQuery/SavedQuery";

function SideMenu() {
  const [advanceSearch, setAdvanceSearch] = useState(false);
  const [savedQuery, setSavedQuery] = useState(false);
  return (
    <Box
      sx={{
        height: "100vh",
        width: "13vw",
        display: "flex",
        alignItems: "center",
        justifyItems: "center",
        boxShadow:
          "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
        position: "relative",
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
        >
          <SearchOutlinedIcon
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
              Search
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
            onClick={() => {
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
            top: "5rem",
            left: { xs: "5rem", sm: "8rem", md: "12rem" },
            zIndex:"999"
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
            top: "17rem",
            left: { xs: "5rem", sm: "8rem", md: "12rem" },
            zIndex:"999"
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
