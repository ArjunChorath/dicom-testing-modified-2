import { Box } from "@mui/material";
import React from "react";
import Header from "../../Layouts/Header/Header";
import PersonList from "../../Layouts/Main/PatientTable/PersonList";
import "./Dashboard.css";
import SearchBarFilter from "../../Components/SearchComponents/SearchBarFilter";
import PaginationFooter from "../../Layouts/Footer/PaginationFooter";
import usedColors from "../../Assets/Colores/Colores";
import ResponsivePersonList from "../../Layouts/Main/ResponsiveTable/ResponsivePersonList";
import ResponsivePagination from "../../Layouts/Footer/ResponsivePagination";
import ResponsiveSearch from "../../Components/ResponsiveSearch/ResponsiveSearch";

function Dashboard() {
  return (
    <Box className="dashboard" sx={{ bgcolor: usedColors.body }}>
      <Header />
      <ResponsiveSearch />
      <SearchBarFilter />
      <PersonList />

      <PaginationFooter />
      <ResponsivePagination />

      <Box
        sx={{
          display: {
            xs: "flex",
            lg: "none",
          },
        }}
      >
        <ResponsivePersonList />
      </Box>
    </Box>
  );
}

export default Dashboard;
