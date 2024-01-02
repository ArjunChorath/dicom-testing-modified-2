import { Box, Typography } from "@mui/material";
import { useState } from "react";
import { ReactComponent as Settings } from "../../Assets/Images/newsvg.svg";
import { ReactComponent as Arrow } from "../../Assets/Images/arrow.svg";
import { ReactComponent as AppLogo } from "../../Assets/Images/appLogo.svg";
import usedColors from "../../Assets/Colores/Colores";
import "./Header.css";

function Header() {
  const [dropDown, setDropDown] = useState(false);
  return (
    <Box
      sx={{
        height: "3.5rem",
        width: "100vw",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        bgcolor: usedColors.header,
        position: "relative",
      }}
    >
      <Box
        sx={{
          height: "3rem",
          width: "100vw",
          color: "white",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          flexDirection: "row",
          gap: "1rem",
        }}
      >
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            marginLeft: "10px",
            flexDirection: "row",
            fontSize: "20px",
            gap: "10px",
            color: "black",
          }}
        >
          <AppLogo />
          Trenser
        </Box>
        <Box
          sx={{
            height: "3rem",
            width: "50vw",
            display: "flex",
            alignItems: "center",
            justifyContent: "flex-end",
            gap: "1rem",
            flexDirection: "row",
            color: "lightblue",
          }}
        >
          <Box
            sx={{
              height: "3rem",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Typography sx={{ color: "black" }}>
              INVESTIGATIONAL USE ONLY
            </Typography>
          </Box>
          <Box
            sx={{
              height: "3rem",
              width: "2rem",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              marginRight: "10px",
              color: "black",
            }}
            onClick={() => setDropDown(!dropDown)}
          >
            <Settings fill="black" />
            <Arrow />
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default Header;
