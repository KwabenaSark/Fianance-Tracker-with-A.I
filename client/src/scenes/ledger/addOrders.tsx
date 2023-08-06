import {
  Box,
  Typography,
  useTheme,
  Button,
  Grid,
  TextField,
} from "@mui/material";
import React, { useState } from "react";
import DashboardBox from "@/components/DashboardBox";
import FlexBetween from "@/components/FlexBetween";
import CancelIcon from "@mui/icons-material/Cancel";
import BoxHeader from "@/components/BoxHeader";
import { useGetProductsQuery, useGetTransactionsQuery } from "@/state/api";
import { DataGrid, GridCellParams } from "@mui/x-data-grid";
import AddCircleIcon from "@mui/icons-material/AddCircle";
// import Add from "./add";
import { ChangeEvent } from "react";
import { GridColDef } from "@mui/x-data-grid";

import Ledger, { Switch } from ".";
import Add from "./addProduct";
import InlineGrid from "@/components/InlineGrid";

interface Product {
  _id: string;
  expense: number;
  price: number;
}

interface Transaction {
  _id: string;
  buyer: string;
  amount: number;
  productIds: string[];
}

const AddOrder = () => {
  const { palette } = useTheme();

  //data adding

  const { data: productData } = useGetProductsQuery();
  const { data: transactionData } = useGetTransactionsQuery();

  const [newProduct, setNewProduct] = useState<Product>({
    _id: "",
    expense: 0,
    price: 0,
  });

  const [newTransaction, setNewTransaction] = useState<Transaction>({
    _id: "",
    buyer: "",
    amount: 0,
    productIds: [],
  });

  const handleProductChange = (e: ChangeEvent<HTMLInputElement>): void => {
    setNewProduct((prevProduct) => ({
      ...prevProduct,
      [e.target.name]: e.target.value,
    }));
  };

  const handleTransactionChange = (e: ChangeEvent<HTMLInputElement>): void => {
    setNewTransaction((prevTransaction) => ({
      ...prevTransaction,
      [e.target.name]: e.target.value,
    }));
  };

  const handleAddProduct = (): void => {
    // Call your API function to add the product data
    // For example: addProduct(newProduct);
    // await addProduct(newProduct);
    console.log("New Product:", newProduct);
    setNewProduct({ _id: "", expense: 0, price: 0 });
  };

  const handleAddTransaction = (): void => {
    // Call your API function to add the transaction data
    // For example: addTransaction(newTransaction);
    // await addTransaction(newTransaction);
    console.log("New Transaction:", newTransaction);
    setNewTransaction({ _id: "", buyer: "", amount: 0, productIds: [] });
  };

  //pop up add
  const [state, setState] = useState<Switch>({
    SettingOn: false,
    SettingOff: true,
  });

  function togglePopup() {
    setState((prevState) => ({
      SettingOn: !prevState.SettingOn,
      SettingOff: !prevState.SettingOff,
    }));
  }

  //page reload
  const handleClick = () => {
    window.location.reload();
  };

  return (
    <DashboardBox
      boxShadow="rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px"
      left="30%"
      top="30%"
      height="50%"
      width="50%"
      position="absolute"
      zIndex="100"
    >
      <CancelIcon
        onClick={handleClick}
        sx={{
          margin: ".5rem",
          float: "right",
          fontSize: "40px",
          color: palette.grey[300],
          "&:hover": { color: palette.secondary[200] },
        }}
      />

      <Box>
        <Typography variant="h3" margin="1rem" color={palette.grey[300]}>
          Add Transaction
        </Typography>
        <InlineGrid gap="1rem">
          <Grid item xs={12} color={palette.grey[300]}>
            <TextField
              label="id"
              name="_id"
              value={newTransaction._id}
              onChange={handleTransactionChange}
             
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              label="Buyer"
              name="buyer"
              value={newTransaction.buyer}
              onChange={handleTransactionChange}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              label="Amount"
              name="amount"
              value={newTransaction.amount}
              onChange={handleTransactionChange}
            />
          </Grid>
          <Grid item xs={12}>
            <Button
              variant="contained"
              color="primary"
              onClick={() => {
                handleAddTransaction();
                handleClick();
              }}
            >
              Add Transaction
            </Button>
            {state.SettingOn && <Add />}
          </Grid>
        </InlineGrid>
      </Box>
    </DashboardBox>
  );
};

export default AddOrder;
