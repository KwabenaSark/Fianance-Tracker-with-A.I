import Columns from "@/components/Columns";
import FlexBetween from "@/components/FlexBetween";
import { Box, Typography,Button,useTheme } from "@mui/material";
import React, { useMemo } from "react";
import IosShareIcon from "@mui/icons-material/IosShare";
import { useGetKpisQuery, useGetProductsQuery } from "@/state/api";
import { GridCellParams } from "@mui/x-data-grid";


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


   //calculations metrics
   const { data } = useGetKpisQuery();

   const totalRevenue = useMemo(() => {
     if (data) {
       return data.reduce((sum, entry) => sum + entry.totalRevenue, 0);
     }
     return 0;
   }, [data]);
 
   const totalProfit = useMemo(() => {
     if (data) {
       return data.reduce((sum, entry) => sum + entry.totalProfit, 0);
     }
     return 0;
   }, [data]);
 
   const totalExpenses = useMemo(() => {
     if (data) {
       return data.reduce((sum, entry) => sum + entry.totalExpenses, 0);
     }
     return 0;
   }, [data]);
 
   // Calculate sum of product prices
   const { data: productData } = useGetProductsQuery();
   const productPrices = productData?.map((product) => product.price) || [];
   const totalProductPrice = productPrices.reduce(
     (acc, price) => acc + price,
     0
   );
  
 
   console.log("Total Revenue:", totalRevenue);
   console.log("Total Profit:", totalProfit);
   console.log("Total Expenses:", totalExpenses);
   console.log("Total Stock:", totalProductPrice);
  //  console.log("Total Stock:", totalStock);
  const tot = totalProductPrice + totalRevenue

const totalAsset:any = tot.toFixed(0);

const equity =  totalAsset - totalProfit;
const totalLia = totalProfit + equity ;
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
           {/* for future ajustement put this on the left side */}
            <Typography  variant="h5"> {totalProductPrice.toFixed(0)}</Typography>
          
          </FlexBetween>
          <Box>
          <FlexBetween>
            <Typography variant="h5">- Total Profit:</Typography>
            <Typography variant="h5">{totalRevenue}</Typography>
          </FlexBetween>
          </Box>
        </Box>

        <Box>
          <Box>
          <Typography variant="h4">Liabilities and Equity:</Typography>
          </Box>
          <Box>
          <FlexBetween>
            <Typography variant="h5">- Total Expenses:</Typography>
            <Typography variant="h5">{ totalProfit}</Typography>
          </FlexBetween>
          <FlexBetween>
            <Typography variant="h5">- Total Equity:</Typography>
            <Typography variant="h5">{ equity}</Typography>
          </FlexBetween>
          </Box>
         
        </Box>

        <Box>
          <FlexBetween>
            <Typography variant="h4">Total Assets:</Typography>
            <Typography variant="h4"> {totalAsset}</Typography>
          </FlexBetween>
          <FlexBetween>
            <Typography variant="h4">Total Liabilities:</Typography>
            <Typography variant="h4">
              {" "}
             
              {  totalLia} 
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
