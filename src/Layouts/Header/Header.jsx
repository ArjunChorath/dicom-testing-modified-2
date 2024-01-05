import { Box, Drawer } from "@mui/material";
import { ReactComponent as Settings } from "../../Assets/Images/newsvg.svg";
import { ReactComponent as Arrow } from "../../Assets/Images/arrow.svg";
import { ReactComponent as AppLogo } from "../../Assets/Images/appLogo.svg";
import usedColors from "../../Assets/Colores/Colores";
import "./Header.css";
import { useState } from "react";

function Header() {
  const [menu, setMenu] = useState(false);
  return (
    <Box
      sx={{
        bgcolor: usedColors.header,
      }}
      className="header-main"
    >
      <Box
        sx={{
          justifyContent: {
            xs: "center",
            sm: "center",
            md: "center",
            lg: "space-between",
          },
        }}
        className="header-sub"
      >
        <Box className="first-box">
          <Box
            sx={{ display: { xs: "none", sm: "none", md: "none", lg: "flex" } }}
          >
            <AppLogo />
          </Box>
          <Box sx={{ color: "black" }}>Dicom Image Viewer</Box>
        </Box>
        <Box
          sx={{
            display: { xs: "none", sm: "none", md: "none", lg: "flex" },
          }}
          className="second-box"
        >
          <Box>
            <Box sx={{ color: "black" }}>INVESTIGATIONAL USE ONLY</Box>
          </Box>
          <Box className="logos">
            <Settings fill="black" />
            <Arrow />
          </Box>
        </Box>
      </Box>
      <Drawer
        anchor="left"
        open={menu}
        onClose={() => {
          setMenu(false);
        }}
        sx={{ border: "2px solid red", position: "relative" }}
      >
        <Box
          sx={{
            width: "12rem",
            height: "100vh",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Box
            sx={{
              width: "10rem",
              height: "90vh",
              display: "flex",
              alignItems: "flex-start",
              justifyContent: "flex-start",
              flexDirection: "column",
              gap: "3rem",
            }}
          >
            <Box>Basic Search</Box>
            <Box>Advance Search</Box>
            <Box>Saved Qury</Box>
          </Box>
        </Box>
      </Drawer>
    </Box>
  );
}

export default Header;
