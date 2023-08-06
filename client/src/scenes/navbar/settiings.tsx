import { Box, Typography, useTheme, Button } from "@mui/material";
import React, { useState } from "react";
import DashboardBox from "@/components/DashboardBox";
import FlexBetween from "@/components/FlexBetween";

const Settiings = () => {
  const { palette } = useTheme();

  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isLightMode, setIsLightMode] = useState(false);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
    console.log("she ready");
  };

  const toggleTheme1 = () => {
    setIsLightMode(!isLightMode);
    console.log("he ready");
  };

  let Mode: string;
  if (!isLightMode) {
    Mode = "Light";
  } else {
    Mode = "Dark";
  }

  return (
    // backgroundColor: isLightMode
    // ? theme.palette.background.lightMode
    // : isDarkMode
    // ? theme.palette.background.darkMode
    // : theme.palette.background.light,

    <DashboardBox
      sx={{
        backgroundColor: isLightMode
          ? (theme: any) => theme.palette.background.lightMode
          : isDarkMode
          ? (theme: any) => theme.palette.background.light
          : (theme: any) => theme.palette.background.light,
      }}
      boxShadow="rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px"
      left="50%"
      height="50%"
      width="50%"
      position="absolute"
      zIndex="100"
    >
      <Box margin="2rem">
        <Typography
          variant="h2"
          sx={{
            color: isLightMode ? "black" : "white",
          }}
        >
          {" "}
          Settings
        </Typography>
      </Box>
      <Box>
        <FlexBetween>
          <Typography
            variant="h4"
            margin="1rem"
           
            sx={{
              color: isLightMode ? palette.grey[800] : palette.grey[300],
            }}
          >
            {" "}
            Themes:
          </Typography>
          <Box>
            <FlexBetween>
              <Button onClick={toggleTheme1}>
                <Typography>{Mode}</Typography>
              </Button>
            </FlexBetween>
          </Box>
        </FlexBetween>
      </Box>
    </DashboardBox>
  );
};

export default Settiings;
