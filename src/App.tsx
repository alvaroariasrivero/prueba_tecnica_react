import { Box } from "@mui/material";
import React, {useEffect, useState} from "react";
import Navbar from "./components/Navbar";
import Router from "./Router";
import "normalize.css";

interface Props {}
const App: React.FC<Props> = (props) => {

  
  return (
    <Box>
      <Navbar />
      <Router />
    </Box>
  );
};
export default App;
