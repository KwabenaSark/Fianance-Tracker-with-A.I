import { Box, Typography, useTheme } from "@mui/material";
import React from "react";
import FlexBetween from "./FlexBetween";

type Props = {
  title: string;

  subtitle?: string;
  icon?: React.ReactNode;
  amount?: any;
};

const ReportBox = ({ icon, title, subtitle, amount }: Props) => {
  const { palette } = useTheme();
  return (
    <FlexBetween color={palette.grey[400]} margin="1.5rem 1rem 0 1rem">
      <FlexBetween>
        {icon}
        <Box width="100%">
          <Typography variant="h4" mb="-0.1rem">
            {title}
          </Typography>
          <Typography variant="h6">{subtitle}</Typography>
          <Typography
            paddingLeft="2.5rem"
            variant="h1"
            mb="1rem"
            color={palette.secondary[500]}
          >
            {amount}
          </Typography>
        </Box>
      </FlexBetween>
    </FlexBetween>
  );
};

export default ReportBox;
