import { Box } from "@mui/material";
import React from "react";
import Header from "../../Layouts/Header/Header";
import PersonList from "../../Layouts/Main/PatientTable/PersonList";
import "./Dashboard.css";
import SearchBarFilter from "../../Components/SearchComponents/SearchBarFilter";
import PaginationFooter from "../../Layouts/Footer/PaginationFooter";
import usedColors from "../../Assets/Colores/Colores";
import ResponsivePersonList from "../../Layouts/Main/ResponsiveTable/ResponsivePersonList";

function Dashboard() {
  return (
    <Box className="dashboard" sx={{ bgcolor: usedColors.body }}>
      <Header />
      <SearchBarFilter />
      <PersonList />
      <Box sx={{width:"99vw",height:"3rem",display:"flex",alignItems:"center",justifyContent:"center"}}>
        <PaginationFooter />
      </Box>
      <Box
        sx={{
          display: {
            xs: "flex",
            sm: "flex",
            md: "flex",
            lg: "none",
            xl: "none",
          },
        }}
      >
        <ResponsivePersonList />
      </Box>
    </Box>
  );
}

export default Dashboard;
