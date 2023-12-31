import ReportBox from "@/components/ReportBox";
import DashboardBox from "@/components/DashboardBox";
import FlexBetween from "@/components/FlexBetween";
import {
  Box,
  Button,
  useMediaQuery,
  useTheme,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import PaidIcon from "@mui/icons-material/Paid";
import Columns from "@/components/Columns";
import MoneyOffIcon from "@mui/icons-material/MoneyOff";
import SellIcon from "@mui/icons-material/Sell";
import AccountBalanceWalletIcon from "@mui/icons-material/AccountBalanceWallet";
import Balancesheet from "./balancesheet";
import Profit from "./profit";
import { useMemo } from "react";
import { useGetKpisQuery } from "@/state/api";
import {
  useGetProductsQuery
 } from "@/state/api";

interface Switch {
  showBalanceSheet: boolean;
  showProfitAndLoss: boolean;
}

function Report() {
  const { palette } = useTheme();
  const [state, setState] = useState<Switch>({
    showBalanceSheet: false,
    showProfitAndLoss: false,
  });
  const isSmallScreen = useMediaQuery("(max-width: 685px)");

  const handleBalanceSheetClick = () => {
    setState({ showBalanceSheet: true, showProfitAndLoss: false });
  };

  const handleProfitAndLossClick = () => {
    setState({ showBalanceSheet: false, showProfitAndLoss: true });
  };

  //totals calc
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

  const totalStock = useMemo(() => {
    if (data) {
      return data.reduce((sum, entry) => sum + entry.totalStock, 0);
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





  return (
    <Box gap="2rem">
      <Box>
        <FlexBetween
          gap="1rem"
          flexDirection={isSmallScreen ? "column" : "row"}
        >
          <DashboardBox width={isSmallScreen ? "100%" : "calc(25% - 1rem)"}>
            <ReportBox
              icon={<PaidIcon sx={{ fontSize: "28px" }} />}
              title="Total Income"
              subtitle="Gross profit"
              amount={
                <Typography
                  paddingLeft="2.5rem"
                  variant="h1"
                  mb="1rem"
                  color={palette.tertiary[500]}
                >
                  {totalRevenue}
                </Typography>
              }
            ></ReportBox>
          </DashboardBox>
          <DashboardBox width={isSmallScreen ? "100%" : "calc(25% - 1rem)"}>
            {" "}
            <ReportBox
              icon={<MoneyOffIcon sx={{ fontSize: "28px" }} />}
              title="Total Expenses"
              subtitle="liability"
              amount={totalProfit}
            ></ReportBox>
          </DashboardBox>
          <DashboardBox width={isSmallScreen ? "100%" : "calc(25% - 1rem)"}>
            {" "}
            <ReportBox
              icon={<SellIcon sx={{ fontSize: "28px" }} />}
              title="Total Stock"
              subtitle="inventory"
              amount={ totalProductPrice.toFixed(0)}
            ></ReportBox>
          </DashboardBox>
          <DashboardBox width={isSmallScreen ? "100%" : "calc(25% - 1rem)"}>
            {" "}
            <ReportBox
              icon={<AccountBalanceWalletIcon sx={{ fontSize: "28px" }} />}
              title="Total Revenue "
              subtitle="net sales"
              amount={
                <Typography
                  paddingLeft="2.5rem"
                  variant="h1"
                  mb="1rem"
                  color={palette.primary[500]}
                >
                  {totalExpenses}
                </Typography>
              }
            ></ReportBox>
          </DashboardBox>
        </FlexBetween>
      </Box>
      <Box>
        <Columns justifyContent="flex-end" margin="2rem" gap="2rem">
          <Button
            onClick={handleBalanceSheetClick}
            sx={{
              borderRadius: "1rem",
              color: palette.grey[900],
              backgroundColor: palette.grey[700],
              boxShadow: "0.1rem 0.1rem 0.1rem 0.1rem rgba(0,0,0,.4)",
            }}
          >
            <Typography margin="1rem" variant="h3" mb="1rem" color="white">
              Balance Sheet
            </Typography>
          </Button>
          <Button
            onClick={handleProfitAndLossClick}
            sx={{
              borderRadius: "1rem",
              color: palette.grey[900],
              backgroundColor: palette.grey[700],
              boxShadow: "0.1rem 0.1rem 0.1rem 0.1rem rgba(0,0,0,.4)",
            }}
          >
            <Typography margin="1rem" variant="h3" mb="1rem" color="white">
              Profit and Loss
            </Typography>
          </Button>
        </Columns>
      </Box>
      <DashboardBox height="100%">
        {state.showBalanceSheet && <Balancesheet />}
        {state.showProfitAndLoss && <Profit />}
      </DashboardBox>
    </Box>
  );
}

export default Report;
