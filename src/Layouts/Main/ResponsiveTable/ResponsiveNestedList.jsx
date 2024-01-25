import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import React, { useState } from "react";
import usedColors from "../../../Assets/Colores/Colores";
import "./ResponsiveNestedList.css";
import VisibilityIcon from "@mui/icons-material/Visibility";

function ResponsiveNestedLlist({ value }) {
  /**
   * ResponsiveNestedLlist used to rendering a table row that provides details about a person's study in responsive nestedlist
   */
  //Defined variables - start
  const [nestedBox, setNestedBox] = useState(false);

  const [viewer, setViewer] = useState(false);
  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: usedColors.table,
    color: "white",
  }));
  const StyledText = styled(Box)({
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
  });
  //Defined variables - end
  return (
    <Grid item xs={12} sm={6} md={4} sx={{}}>
      <Item
        sx={{
          width: { xs: "81vw", sm: "40vw", md: "27vw" },
          position: "relative",
        }}
      >
        <Box
          className="outer_box"
          onClick={() => {
            //toggle visibility of nested content
            setNestedBox(!nestedBox);
          }}
        >
          <Box className="inner_leftside_box">
            <StyledText>
              <Box className="textbox">Patientname:</Box>
              <Box className="textbox">{value.patientName.givenName}</Box>
            </StyledText>
            <StyledText>
              <Box className="textbox">StudyDate:</Box>
              <Box className="textbox">{value.study.studyDate} </Box>
            </StyledText>

            <StyledText>
              <Box className="textbox">Modality:</Box>
              <Box className="textbox">{value.study.modality}</Box>
            </StyledText>

            <StyledText>
              <Box className="textbox">Instence:</Box>
              <Box className="textbox">3455</Box>
            </StyledText>
          </Box>
          <Box className="inner-rightside-box">
            <StyledText>
              <Box className="textbox">PatientMrn:</Box>
              <Box className="textbox"> {value.patientMrn}</Box>
            </StyledText>

            <StyledText>
              <Box className="textbox">Description:</Box>
              <Box className="textbox">{value.study.studyDescription}</Box>
            </StyledText>

            <StyledText>
              <Box className="textbox">Accession:</Box>
              <Box className="textbox">{value.study.accessionNumber}</Box>
            </StyledText>

            <Box className="dropdown_view">
              {nestedBox === true ? "Viewless" : "Viewmore"}
            </Box>
          </Box>
        </Box>
        <Grid
          className="viewmore_blocks"
          item
          xs={12}
          sm={6}
          md={4}
          sx={{
            minWidth: { xs: "81vw", sm: "40vw", md: "27vw" },
          }}
        >
          {value.study.series.map((series) => (
            <Box key={series.seriesId}>
              {nestedBox === true ? (
                <Paper
                  className="viewmore_inner_block"
                  sx={{
                    minHeight: "5vw",
                    bgcolor: "black",
                    mt: "1px",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    p: "10px",
                  }}
                >

                    <Box className="inner_viewmore_block">
                      <Box className="inner_viewmore_leftside_block">
                        <StyledText>
                          <Box className="textbox">Description :</Box>
                          <Box className="textbox">{series.description}</Box>
                        </StyledText>

                        <StyledText>
                          <Box className="textbox">series :</Box>
                          <Box className="textbox">{series.seriesNumber}</Box>
                        </StyledText>
                        <StyledText>
                          <Box className="textbox"></Box>
                          <Box className="textbox"></Box>
                        </StyledText>
                      </Box>
                      <Box className="inner_viewmore_rightside_block">
                        <StyledText>
                          <Box className="textbox">modality :</Box>
                          <Box className="textbox">{series.modality}</Box>
                        </StyledText>
                        <StyledText>
                          <Box className="textbox">Instance :</Box>
                          <Box className="textbox"> {series.instanceCount}</Box>
                        </StyledText>
                        <VisibilityIcon
                          onClick={() => {
                            //used to toggle images in the viewer
                            setViewer(!viewer);
                          }}
                        />
                      </Box>
                  </Box>
                  {viewer ? (
                    <Box className="image_container">
                      <Box sx={{ marginLeft: "10px" }}>
                        <img
                          src="https://img.freepik.com/premium-photo/x-ray-human-skull-black-background_521740-1000.jpg"
                          alt="error"
                          className="imagesize"
                        />
                      </Box>
                      <Box>
                        <img
                          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSWNMwtwkOe0sgcSUl2Yg9cOCl7i0kO3CKg2B0ObWWQeg&s"
                          alt="error"
                          className="imagesize"
                        />
                      </Box>
                      <Box>
                        <img
                          src="https://qph.cf2.quoracdn.net/main-qimg-977ae1c33cd1b2993f9933ed1b87f261-lq"
                          alt="error"
                          className="imagesize"
                        />
                      </Box>
                    </Box>
                  ) : (
                    ""
                  )}
                </Paper>
              ) : (
                ""
              )}
            </Box>
          ))}
        </Grid>
      </Item>
    </Grid>
  );
}

export default ResponsiveNestedLlist;
