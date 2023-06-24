import Columns from "@/components/Columns";
import FlexBetween from "@/components/FlexBetween";
import InlineGrid from "@/components/InlineGrid";
import { Box, Typography,Button,useTheme } from "@mui/material";
import React from "react";
import IosShareIcon from "@mui/icons-material/IosShare";


const Balancesheet = () => {
  const { palette} = useTheme();

  //time and date
  function getCurrentDateTime(): { date: string; time: string } {
    const now = new Date();
  
    const dateOptions: Intl.DateTimeFormatOptions = {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    };
    const timeOptions: Intl.DateTimeFormatOptions = {
      hour: 'numeric',
      minute: 'numeric',
      second: 'numeric',
      hour12: false,
    };
  
    const dateFormatter = new Intl.DateTimeFormat('en-US', dateOptions);
    const timeFormatter = new Intl.DateTimeFormat('en-US', timeOptions);
  
    const date = dateFormatter.format(now);
    const time = timeFormatter.format(now);
  
    return { date, time };
  }
  
  // Usage example
  const { date, time } = getCurrentDateTime();
  console.log('Date:', date);
  console.log('Time:', time);
  
  //print
  const handleClick = () => {
    window.print();
   };

  return (
    <Box margin="2rem"  height="51vh">
     
      <Typography 
      variant="h1"  fontWeight="bold" color={palette.grey[300]}>
        Balance Sheet
      </Typography>
      <Typography variant="h6">
        Complete Balance Sheet statement from the ledger
      </Typography>
   
      <Columns gap="2rem" width="100%" flexDirection="column">
        <Box>
          <Typography variant="h4">Date:{date}</Typography>
          <Typography variant="h6">Time:{time}</Typography>
        </Box>

        <Box>
          <Typography variant="h4">Assets:</Typography>
          <FlexBetween>
            <Typography variant="h5">- Total Stock:</Typography>
            <Typography variant="h5">- Total Stock:</Typography>
          </FlexBetween>
        </Box>

        <Box>
          <Typography variant="h4">Liabilities and Equity:</Typography>
          <FlexBetween>
            <Typography variant="h5">- Total Revenue:</Typography>
            <Typography variant="h5"> [totalRevenue]:</Typography>
          </FlexBetween>
          <FlexBetween>
            <Typography variant="h5">- Total Expenses:</Typography>
            <Typography variant="h5"> [totalExpenses]</Typography>
          </FlexBetween>
          <FlexBetween>
            <Typography variant="h5">- Total Profit:</Typography>
            <Typography variant="h5">[totalProfit]</Typography>
          </FlexBetween>
        </Box>

        <Box>
          <FlexBetween>
            <Typography variant="h4">Total Assets:</Typography>
            <Typography variant="h4"> [totalStock]</Typography>
          </FlexBetween>
          <FlexBetween>
            <Typography variant="h4">Total Liabilities and Equity:</Typography>
            <Typography variant="h4">
              {" "}
              [totalRevenue + totalExpenses + totalProfit]
            </Typography>
          </FlexBetween>
        </Box>
      </Columns>
      <Button variant="contained"  sx={{ borderRadius: "15rem", position:"absolute", bottom:"-3rem" }}>
        <IosShareIcon onClick={handleClick}  sx={{ fontSize: "20px" }} />
      </Button>
    </Box>
  );
};

export default Balancesheet;
