import React from "react";
import { Box } from "@mui/material";
import { Paper } from "@mui/material";
import { Outlet } from "react-router-dom";

export default function ResumeLayout() {
  const customStyle = {
    margin: "10px",
    height: "auto",
    width: "90%",
    padding: "10px",
    backgroundColor: "#fff",
  };
  const containerStyle = {
    marginTop: "20",
    display: "flex",
    justifyContent: "center",
  };
  return (
    <Box style={containerStyle}>
      <Paper elevation={3} style={customStyle}>
        <Outlet />
      </Paper>
    </Box>
  );
}
