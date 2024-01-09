import { Box } from "@mui/material";
import { ReactComponent as Settings } from "../../Assets/Images/newsvg.svg";
import { ReactComponent as Arrow } from "../../Assets/Images/arrow.svg";
import { ReactComponent as AppLogo } from "../../Assets/Images/appLogo.svg";
import usedColors from "../../Assets/Colores/Colores";
import ResponsiveSearch from "../../Components/ResponsiveSearch/ResponsiveSearch";
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
      <Box className="header-sub">
        <Box className="first-box">
          <Box sx={{ display: { xs: "none", lg: "flex" } }}>
            <AppLogo />
          </Box>
          <Box
            sx={{
              color: "black",
            }}
          >
            Dicom Image Viewer
          </Box>
        </Box>
        <Box
          sx={{
            display: { xs: "none", lg: "flex" },
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
        <Box sx={{ mr: "10px" }}>
          <ResponsiveSearch />
        </Box>
      </Box>
    </Box>
  );
}

export default Header;
