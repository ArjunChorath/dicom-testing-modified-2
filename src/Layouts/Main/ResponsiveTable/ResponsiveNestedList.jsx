import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import React, { useState } from "react";
import './ResponsiveNestedList.css'
import usedColors from "../../../Assets/Colores/Colores";

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
function ResponsiveNestedLlist({ value }) {
  const [nestedBox, setNestedBox] = useState(false);
  const [viewer, setViewer] = useState(false);
  return (
    <Grid item xs={12} sm={6} md={4} sx={{ }}>
      <Item
        sx={{
          width: { xs: "81vw", sm: "40vw", md: "27vw" },
          position: "relative",
         
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            gap: "1rem",
            
            padding: "10px",
            whiteSpace: "nowrap",
            overflow: "hidden",
            textOverflow: "ellipsis",
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              width: "43vw",
              alignItems: "flex-start",
              justifyContent: "center",
             
            }}
          >
            <StyledText>
              <Box className="textbox">Patientname:</Box>
              <Box className="textbox">{value.patientName.givenName}</Box>
            </StyledText>
            <StyledText>
              <Box className="textbox">StudyDate:</Box>
              <Box className="textbox">12/6/24 </Box>
            </StyledText>

            <StyledText>
              <Box className="textbox">Modality:</Box>
              <Box className="textbox">{value.study.modality}</Box>
            </StyledText>

            <StyledText>
              <Box className="textbox">Instence:</Box>
              <Box className="textbox">345</Box>
            </StyledText>
          </Box>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              width: "43vw",
              alignItems: "flex-start",
              justifyContent: "center",
            }}
          >
            <StyledText>
              <Box className="textbox">PatientMrn:</Box>
              <Box className="textbox"> {value.patientMrn}</Box>
            </StyledText>

            <StyledText>
              <Box className="textbox">Description:</Box>
              <Box className="textbox">{value.patientName.givenName}</Box>
            </StyledText>

            <StyledText>
              <Box className="textbox">Accession:</Box>
              <Box className="textbox">{value.patientName.givenName}</Box>
            </StyledText>

            <Box
              sx={{
                fontSize: "14px",
                textDecoration: "underline",
                color: "black",
              }}
              onClick={() => {
                setNestedBox(!nestedBox);
              }}
            >
              {nestedBox === true ? "Viewless" : "Viewmore"}
            </Box>
          </Box>
        </Box>
        {value.study.series.map((items) => (
          <Grid
            key={items.seriesId}
            item
            xs={12}
            sm={6}
            md={4}
            sx={{
              position: "absolute",
              mr: "10px",
              zIndex: "99",
              minWidth: { xs: "81vw", sm: "40vw", md: "27vw" },
            }}
          >
            {nestedBox === true ? (
              <Paper
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
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "flex-start",
                    justifyContent: "space-between",
                    color: "white",
                  }}
                >
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      width: "43vw",
                      alignItems: "flex-start",
                      justifyContent: "flex-start",
                    }}
                  >
                    <StyledText>
                      <Box className="textbox">Description:</Box>
                      <Box className="textbox">leg</Box>
                    </StyledText>

                    <StyledText>
                      <Box className="textbox">series:</Box>
                      <Box className="textbox">{items.seriesId}</Box>
                    </StyledText>
                    <StyledText>
                      <Box className="textbox"></Box>
                      <Box className="textbox"></Box>
                    </StyledText>
                  </Box>
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "flex-end",
                      justifyContent: "flex-end",
                      width: "43vw",
                    }}
                  >
                    <StyledText>
                      <Box className="textbox">modality:</Box>
                      <Box className="textbox">{items.modality}</Box>
                    </StyledText>
                    <StyledText>
                      <Box className="textbox">Instance:</Box>
                      <Box className="textbox"> {value.patientMrn}</Box>
                    </StyledText>
                    <Box
                      sx={{
                        fontSize: "14px",
                        textDecoration: "underline",
                        color: "skyblue",
                      }}
                      onClick={() => {
                        setViewer(!viewer);
                      }}
                    >
                      {viewer === true ? "Viewless" : "Viewmore"}
                    </Box>
                  </Box>
                </Box>
                {viewer ? (
                  <Box
                    sx={{
                      minHeight: "15vh",
                      bgcolor: "black",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "flex-start",
                      gap: "3rem",
                      flexDirection: "row",
                      overflowX: "scroll",
                      overflowY: "hidden",
                      border: "1px solid #164863",
                      zIndex: "999",
                      mt: "10px",
                    }}
                  >
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
          </Grid>
        ))}
      </Item>
    </Grid>
  );
}

export default ResponsiveNestedLlist;
