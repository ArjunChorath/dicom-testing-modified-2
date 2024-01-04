import { Box } from "@mui/material";
import React from "react";
import Header from "../../Layouts/Header/Header";
import PersonList from "../../Layouts/Main/PatientTable/PersonList";
import "./Dashboard.css";
import SearchBarFilter from "../../Components/SearchComponents/SearchBarFilter";
import PaginationFooter from "../../Layouts/Footer/PaginationFooter";
import usedColors from "../../Assets/Colores/Colores";

function Dashboard() {
  return (
    <Box className="dashboard" overflow="hidden"sx={{ bgcolor: usedColors.body }}>
      <Header />
      <SearchBarFilter />
      {/* <PersonList />
      <PaginationFooter /> */}
    </Box>
  );
}

export default Dashboard;
