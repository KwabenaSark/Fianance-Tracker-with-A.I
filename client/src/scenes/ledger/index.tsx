import BoxHeader from "@/components/BoxHeader";
import DashboardBox from "@/components/DashboardBox";
import FlexBetween from "@/components/FlexBetween";
import {
  useGetProductsQuery,
  useGetTransactionsQuery,
} from "@/state/api";
import { Box, useTheme } from "@mui/material";
import { DataGrid, GridCellParams } from "@mui/x-data-grid";
import React, { useState } from "react";
import AddCircleIcon from '@mui/icons-material/AddCircle';

interface Switch {
    openAdd: boolean;
    closeAdd: boolean;
  }
const Ledger = () => {
  const { palette } = useTheme();
//pop up add
  const [state, setState] = useState<Switch>({
    openAdd: false,
    closeAdd: false,
  });

  const open = () => {
    setState({ openAdd: true,closeAdd:false});
  };

  const close = () => {
    setState({ closeAdd: false, openAdd: true });
  };

  const { data: productData } = useGetProductsQuery();
  const { data: transactionData } = useGetTransactionsQuery();

  const productColumns = [
    {
      field: "_id",
      headerName: "id",
      flex: 1,
    },
    {
      field: "expense",
      headerName: "Expense",
      flex: 0.5,
      renderCell: (params: GridCellParams) => `$${params.value}`,
    },
    {
      field: "price",
      headerName: "Price",
      flex: 0.5,
      renderCell: (params: GridCellParams) => `$${params.value}`,
    },
  ];

  const transactionColumns = [
    {
      field: "_id",
      headerName: "id",
      flex: 1,
    },
    {
      field: "buyer",
      headerName: "Buyer",
      flex: 0.67,
    },
    {
      field: "amount",
      headerName: "Amount",
      flex: 0.35,
      renderCell: (params: GridCellParams) => `$${params.value}`,
    },
    {
      field: "productIds",
      headerName: "Count",
      flex: 0.1,
      renderCell: (params: GridCellParams) =>
        (params.value as Array<string>).length,
    },
  ];

  return (
    <>
      <FlexBetween gap="2rem">
        <DashboardBox width="50%" height="90vh">
          <BoxHeader
            title="List of Products"
            sideText={`${productData?.length} products`}
          />
          <Box
            mt="0.5rem"
            p="0 0.5rem"
            height="75%"
            sx={{
              "& .MuiDataGrid-root": {
                color: palette.grey[300],
                border: "none",
              },
              "& .MuiDataGrid-cell": {
                borderBottom: `1px solid ${palette.grey[800]} !important`,
              },
              "& .MuiDataGrid-columnHeaders": {
                borderBottom: `1px solid ${palette.grey[800]} !important`,
              },
              "& .MuiDataGrid-columnSeparator": {
                visibility: "hidden",
              },
            }}
          >
            <DataGrid
              columnHeaderHeight={25}
              rowHeight={35}
              hideFooter={true}
              rows={productData || []}
              columns={productColumns}
            />
          </Box>
          <Box margin="1rem" color={palette.primary[300]}> <AddCircleIcon  onClick={open} sx={{fontSize: "50px" , "&:hover": { color: palette.primary[100] } }} />
           </Box>
        </DashboardBox>
        <DashboardBox width="50%" height="90vh">
          <BoxHeader
            title="Recent Orders"
            sideText={`${transactionData?.length} latest transactions`}
          />
          <Box
            mt="1rem"
            p="0 0.5rem"
            height="80%"
            sx={{
              "& .MuiDataGrid-root": {
                color: palette.grey[300],
                border: "none",
              },
              "& .MuiDataGrid-cell": {
                borderBottom: `1px solid ${palette.grey[800]} !important`,
              },
              "& .MuiDataGrid-columnHeaders": {
                borderBottom: `1px solid ${palette.grey[800]} !important`,
              },
              "& .MuiDataGrid-columnSeparator": {
                visibility: "hidden",
              },
            }}
          >
            <DataGrid
              columnHeaderHeight={25}
              rowHeight={35}
              hideFooter={true}
              rows={transactionData || []}
              columns={transactionColumns}
            />
          </Box>
        </DashboardBox>
      </FlexBetween>
    </>
  );
};

export default Ledger;
