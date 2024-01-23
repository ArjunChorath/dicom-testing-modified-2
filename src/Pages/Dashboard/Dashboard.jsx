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
import { NoData } from "../../Components/NoData/NoData";
import { useSelector } from "react-redux";


function Dashboard() {
  const nodata=useSelector(state=>state.data.nodata)
  return (
    <Box className="dashboard" sx={{ bgcolor: usedColors.body }}>
      <Header />
      <SearchBarFilter />
      {nodata === false ? <PersonList /> : <NoData />}
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
