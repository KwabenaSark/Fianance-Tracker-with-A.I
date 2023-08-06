import { Box, Typography, Button, useTheme } from "@mui/material";
import React, { useMemo } from "react";
import FlexBetween from "@/components/FlexBetween";
import Columns from "@/components/Columns";
import IosShareIcon from "@mui/icons-material/IosShare";
import { useGetKpisQuery, useGetProductsQuery } from "@/state/api";

const Profit = () => {
  const { palette } = useTheme();

  //time and date
  function getCurrentDateTime(): { date: string; time: string } {
    const now = new Date();

    const dateOptions: Intl.DateTimeFormatOptions = {
      year: "numeric",
      month: "long",
      day: "numeric",
    };
    const timeOptions: Intl.DateTimeFormatOptions = {
      hour: "numeric",
      minute: "numeric",
      second: "numeric",
      hour12: false,
    };

    const dateFormatter = new Intl.DateTimeFormat("en-US", dateOptions);
    const timeFormatter = new Intl.DateTimeFormat("en-US", timeOptions);

    const date = dateFormatter.format(now);
    const time = timeFormatter.format(now);

    return { date, time };
  }

  // Usage example
  const { date, time } = getCurrentDateTime();
  console.log("Date:", date);
  console.log("Time:", time);

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
  const tot = totalProductPrice + totalRevenue;
  const totalAsset:any = tot.toFixed(0);

  const equity = totalAsset - totalProfit;
  const totalLia = totalProfit + equity;

  return (
    <Box margin="2rem" height="48vh">
      <Typography variant="h1" fontWeight="bold" color={palette.grey[300]}>
        Profit and Loss{" "}
      </Typography>
      <Typography variant="h6">
        Complete Profit and Loss statement from ledger
      </Typography>

      <Columns gap="2rem" width="100%" flexDirection="column">
        <Box>
          <Typography variant="h4">Date:{date}</Typography>
          <Typography variant="h6">Time:{time}</Typography>
        </Box>

        <Box>
          <Typography variant="h4">Total Income:</Typography>
          <FlexBetween>
            <Typography variant="h5">- Gross profit::</Typography>
            <Typography variant="h5">{totalRevenue}</Typography>
          </FlexBetween>
        </Box>

        <Box>
          <Typography variant="h4">Expenses:</Typography>
          <FlexBetween>
            <Typography variant="h5">- Total Expenses: </Typography>
          <Typography variant="h5"> {totalProfit}</Typography>
          </FlexBetween>
        </Box>

        <Box>
          <FlexBetween>
            <Typography variant="h4">Net Profit:</Typography>
          </FlexBetween>
          <FlexBetween>
            <Typography variant="h5">- Total Profit:</Typography>
            <Typography variant="h4">
            {totalExpenses}
            </Typography>
          </FlexBetween>
        </Box>
      </Columns>
      <Button
        variant="contained"
        sx={{ borderRadius: "15rem", position: "absolute", bottom: "-1.8rem" }}
      >
        <IosShareIcon onClick={handleClick} sx={{ fontSize: "20px" }} />
      </Button>
    </Box>
  );
};

export default Profit;
