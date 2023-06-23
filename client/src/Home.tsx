import React, { useState } from "react";
import App from "./App";
import { Box, Button, Typography, useTheme } from "@mui/material";
import FlexBetween from "@/components/FlexBetween";
import DashboardBox from "./components/DashboardBox";
import AccountBalanceIcon from "@mui/icons-material/AccountBalance";

import ReactDOM from 'react-dom';

const Home = () => {
  const { palette } = useTheme();
  const [showApp, setShowApp] = useState(false);

  
    const handleClick = () => {
        ReactDOM.render(<App />, document.getElementById('root'));
    };

  return (
    <Box>
         <FlexBetween gap="0.75rem">
        <AccountBalanceIcon sx={{ fontSize: "50px" }} />
        <Typography  variant="h2" fontSize="16px">
          Finance Tracker
        </Typography>
      </FlexBetween>
      <Typography variant="h3">
        The Business Fianance Tracker with Artificial Intelegence
      </Typography>
<Box>
    <Typography>"Numbers made easy, AI at your side. Our Finance Tracker: Smart, Fun, and your business's ultimate guide!"</Typography>
</Box>

      <Box>
      <Button onClick={handleClick}>Go to App</Button>

      </Box>
      <Typography >
       @2023 by Kwabena Sarkodieh
      </Typography>
      
    </Box>
  );
};

export default Home;
