import { Box } from "@mui/material";
import React from "react";
import Header from "../../Layouts/Header/Header";

import PersonList from "../../Layouts/Main/PersonList";
import './Dashboard.css'
import SearchBarFilter from "../../SearchComponents/SearchBarFilter";
import PaginationFooter from "../../Layouts/Footer/PaginationFooter";


function Dashboard() {
  return (
    <Box className="dashboard">
      <Header />
      <SearchBarFilter/>
      <PersonList/>
      <PaginationFooter/>
    </Box>
  );
}

export default Dashboard;
