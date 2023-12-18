import { Box, Button } from "@mui/material";
import IconButton from "@mui/material/IconButton";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowRight";
import React, { useState } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableRow from "@mui/material/TableRow";
import TableHead from "@mui/material/TableHead";
import Collapse from "@mui/material/Collapse";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import "./NestedTable.css";

function NestedTable({ value }) {
  const [open, setOpen] = useState(false);
  const [viewer, setViewer] = useState(false);

  return (
    <Box
      sx={{
        border: open === true ? "1px solid #5acce6" : "none",
        minHeight: "4vh",
        minWidth: "60vw",
        display: "flex",
        alignItems: "center",
        bgcolor: "black",
        justifyContent: "center",
        flexDirection: "column",
      }}
    >
      <TableRow
        onClick={() => setOpen(!open)}
        className="personlist"
        sx={{
          borderBottom: ".5px solid #DDF2FD",
          display: "flex",
          alignItems: "center",
          justifyContent: "flex-start",
          flexDirection: "row",
          minWidth: "65vw",
          maxHeight: "10vh",
          bgcolor: "#427D9D",
        }}
      >
        <TableCell sx={{ border: "none", width: "1rem" }}>
          <IconButton size="small">
            {open ? (
              <KeyboardArrowDownIcon sx={{ color: "white" }} />
            ) : (
              <KeyboardArrowUpIcon sx={{ color: "white" }} />
            )}
          </IconButton>
        </TableCell>
        <TableCell sx={{ color: "white", minWidth: "9rem", border: "none" }}>
          {value.name}
        </TableCell>
        <TableCell sx={{ color: "white", minWidth: "10rem", border: "none" }}>
          {value.mrn}
        </TableCell>
        <TableCell sx={{ color: "white", minWidth: "10rem", border: "none" }}>
          {value.studyDate}
        </TableCell>
        {/* <TableCell sx={{ color: "white", minWidth: "10rem", border: "none" }}>
          {value.studyDate}
        </TableCell> */}
        <TableCell sx={{ color: "white", minWidth: "10rem", border: "none" }}>
          {value.description}
        </TableCell>
        <TableCell sx={{ color: "white", minWidth: "9rem", border: "none" }}>
          {value.modality}
        </TableCell>
        <TableCell sx={{ color: "white", minWidth: "9rem", border: "none" }}>
          {value.accession}
        </TableCell>
        <TableCell
          align="right"
          sx={{
            color: "white",
            minWidth: "5rem",
            border: "none",
            display: "flex",
            alignItems: "center",
            flexDirection: "row",
            justifyContent: "flex-start",
          }}
        >
          <IconButton size="small" sx={{ color: "#9BBEC8" }}>
            <ContentCopyIcon />
          </IconButton>
          {value.instances}
        </TableCell>
      </TableRow>
      <Box
        sx={{
          // height: "10vh",
          // minWidth: "60vw",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column",
        }}
      >
        <TableRow>
          <TableCell
            sx={{ paddingBottom: 0, paddingTop: 0, border: "none" }}
            colSpan={6}
          >
            <Collapse
              in={open}
              timeout="auto"
              unmountOnExit
              sx={{ marginTop: "10px", marginBottom: "10px" }}
            >
              <Table size="small">
                <TableHead>
                  <TableRow
                    sx={{
                      bgcolor: "#427D9D",
                      borderBottom: ".5px solid #DDF2FD",
                    }}
                  >
                    <TableCell
                      sx={{
                        color: "white",
                        width: "10vw",
                        fontWeight: "bold",
                        border: "none",
                      }}
                    >
                      Description
                    </TableCell>
                    <TableCell
                      sx={{
                        color: "white",
                        width: "10vw",
                        fontWeight: "bold",
                        border: "none",
                      }}
                    >
                      Series
                    </TableCell>
                    <TableCell
                      sx={{
                        color: "white",
                        width: "10vw",
                        fontWeight: "bold",
                        border: "none",
                      }}
                    >
                      Modality
                    </TableCell>
                    <TableCell
                      sx={{
                        color: "white",
                        width: "10vw",
                        fontWeight: "bold",
                        border: "none",
                      }}
                    >
                      Instances
                    </TableCell>
                    <TableCell
                      sx={{
                        color: "white",
                        width: "10vw",
                        fontWeight: "bold",
                        border: "none",
                      }}
                    >
                      Viewer
                    </TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  <TableRow>
                    <TableCell
                      sx={{
                        color: "white",
                        width: "10vw",
                        border: "none",
                        borderRight: "1px solid #DDF2FD",
                      }}
                    >
                      {value.desc.description}
                    </TableCell>
                    <TableCell
                      sx={{
                        color: "white",
                        width: "10vw",
                        border: "none",
                        borderRight: "1px solid #DDF2FD",
                      }}
                    >
                      {value.desc.series}
                    </TableCell>
                    <TableCell
                      sx={{
                        color: "white",
                        width: "10vw",
                        border: "none",
                        borderRight: "1px solid #DDF2FD",
                      }}
                    >
                      {value.desc.modality}
                    </TableCell>
                    <TableCell
                      sx={{
                        color: "white",
                        width: "9vw",
                        border: "none",
                        borderRight: "1px solid #DDF2FD",
                        borderLeft: "none",
                      }}
                    >
                      {value.desc.instances}
                    </TableCell>
                    <TableCell
                      sx={{
                        border: "none",
                      }}
                      onClick={() => {
                        setViewer(!viewer);
                      }}
                    >
                      <Button
                        sx={{ color: "white", width: "9vw", border: "none" }}
                      >
                        image
                      </Button>
                    </TableCell>
                  </TableRow>
                </TableBody>
              </Table>
              {viewer ? (
                <Box
                  sx={{
                    minHeight: "15vh",
                    width: "58vw",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "flex-start",
                    gap: "3rem",
                    flexDirection: "row",
                    overflowX: "scroll",
                    overflowY: "hidden",
                    border: "1px solid #164863",
                  }}
                >
                  <Box sx={{  marginLeft: "10px" }}>
                    <img
                      src="https://img.freepik.com/premium-photo/x-ray-human-skull-black-background_521740-1000.jpg"
                      alt="error"
                      className="imagesize"
                    />
                  </Box>
                  <Box >
                    <img
                      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSWNMwtwkOe0sgcSUl2Yg9cOCl7i0kO3CKg2B0ObWWQeg&s"
                      alt="error"
                      className="imagesize"
                    />
                  </Box>
                  <Box >
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
            </Collapse>
          </TableCell>
        </TableRow>
      </Box>
    </Box>
  );
}

export default NestedTable;
