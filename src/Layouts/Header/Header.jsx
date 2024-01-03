import { Box, Typography } from "@mui/material";
import { ReactComponent as Settings } from "../../Assets/Images/newsvg.svg";
import { ReactComponent as Arrow } from "../../Assets/Images/arrow.svg";
import { ReactComponent as AppLogo } from "../../Assets/Images/appLogo.svg";
import usedColors from "../../Assets/Colores/Colores";
import "./Header.css";

function Header() {
  /**
   * Header for providing user interface for header section of react page
   */
  return (
    <Box
      sx={{
        bgcolor: usedColors.header,
      }}
      className="header-main"
    >
      <Box
        sx={{
          justifyContent: { xs: "center", sm: "space-between" },
        }}
        className="header-sub"
      >
        <Box className="first-box">
          <Box sx={{ display: { xs: "none", sm: "flex" } }}>
            <AppLogo />
          </Box>
          <Typography sx={{ color: "black" }}>Dicom Image Viewer</Typography>
        </Box>
        <Box
          sx={{
            display: { xs: "none", sm: "flex" },
          }}
          className="second-box"
        >
          <Box>
            <Typography sx={{ color: "black" }}>
              INVESTIGATIONAL USE ONLY
            </Typography>
          </Box>
          <Box className="logos">
            <Settings fill="black" />
            <Arrow />
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default Header;
