import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import React from "react";
import "./ResponsivePersonList.css";
import usedColors from "../../../Assets/Colores/Colores";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: usedColors.table,
  padding: theme.spacing(1),
  color: "white",
}));
const StyledText = styled(Box)({
  display: "flex",
  flexDirection: "row",
  justifyContent: "flex-start",
  alignItems: "center",
  whiteSpace: "nowrap",
  overflow: "hidden",
  textOverflow: "ellipsis",
});
function ResponsiveNestedLlist({ value }) {
  console.log(value);
  return (
    <Grid item xs={12} sm={6} md={4}>
      <Item>
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Box sx={{ display: "flex", flexDirection: "column" }}>
            <StyledText>
              <Box className="text-box" fontWeight="bold">
                Patientname:
              </Box>
              <Box className="text-box">{value.patientName.givenName}</Box>
            </StyledText>
            <StyledText>
              <Box className="text-box">StudyDate:</Box>
              <Box className="text-box">12/6/24 </Box>
            </StyledText>

            <StyledText>
              <Box className="text-box">Modality:</Box>
              <Box className="text-box">{value.study.modality}</Box>
            </StyledText>

            <StyledText>
              <Box className="text-box">Instence:</Box>
              <Box className="text-box">345</Box>
            </StyledText>
          </Box>
          <Box sx={{ display: "flex", flexDirection: "column" }}>
            <StyledText>
              <Box className="text-box">PatientMrn:</Box>
              <Box className="text-box">{value.patientName.givenName}</Box>
            </StyledText>

            <StyledText>
              <Box className="text-box">Description:</Box>
              <Box className="text-box">{value.patientName.givenName}</Box>
            </StyledText>

            <StyledText>
              <Box className="text-box">Accession:</Box>
              <Box className="text-box">{value.patientName.givenName}</Box>
            </StyledText>

            <Box sx={{ fontSize: "14px", textDecoration:"underline" }}>viewmore</Box>
          </Box>
        </Box>
      </Item>
    </Grid>
  );
}

export default ResponsiveNestedLlist;
