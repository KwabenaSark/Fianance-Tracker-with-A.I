import React, { useEffect, useState } from "react";
import App from "../App";
import { Box, Button, Typography, useTheme } from "@mui/material";
import FlexBetween from "@/components/FlexBetween";
import DashboardBox from "../components/DashboardBox";
import AccountBalanceIcon from "@mui/icons-material/AccountBalance";
import zIndex from "@mui/material/styles/zIndex";
import Columns from "@/components/Columns";
import PlaceCenter from "@/components/PlaceCenter";
import InlineGrid from "@/components/InlineGrid";

const Home = () => {
  const { palette } = useTheme();
  const [showApp, setShowApp] = useState(false);

  const handleClick = () => {};

  //popup

  const [showPopup, setShowPopup] = useState(true);
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  useEffect(() => {
    setShowPopup(true);

    //couldnt decide if i should let this page be temporary or permanent (for now permanent)

    // const popupCount = localStorage.getItem("popupCount");
    // if (popupCount) {
    //   const count = parseInt(popupCount);
    //   if (count >= 3) {
    //     setShowPopup(false);
    //   } else {
    //     localStorage.setItem("popupCount", (count + 1).toString());
    //   }
    // } else {
    //   localStorage.setItem("popupCount", "1");
    // }







    const handleResize = () => {
      setScreenWidth(window.innerWidth);
    };
  
    window.addEventListener('resize', handleResize);
  
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const handleDismiss = () => {
    setShowPopup(false);
  };

  if (!showPopup) {
    return null;
  }

  return (
    <Box
      boxShadow="rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px"
      className="popup"
      sx={{
       
        position: "absolute",
        zIndex: "100",
        backgroundColor: "#1f2026",
        borderRadius: "1rem",
        width: "100%",
        height: "100vh",
        overflow: screenWidth <= 650 ? "auto" : "none",
        
      }}
      // style={{  display: "grid" placeItem: "center" }}
    >
      <Box>
        <Box>
          <FlexBetween gap="0.75rem" width="10.5rem" marginLeft="5%" marginTop="2%" color={palette.grey[300]}>
            <div className="card">
            <AccountBalanceIcon sx={{ fontSize: "30px" }} /></div>
            <Typography variant="h2" fontWeight="bold" fontSize="16px">
              Finance Tracker
            </Typography>
          </FlexBetween>

          <InlineGrid width="55%" height="100%" gap="1rem" margin="5%" textAlign="left">
            <Typography
              variant="h3"
              fontWeight="bolder"
              color={palette.grey[300]}
            >
              The Business Fianance Tracker <br />{" "}
              <Typography
                variant="h3"
                fontWeight="bold"
                color={palette.grey[500]}
              >
                with Artificial Inteligence
              </Typography>
            </Typography>

            <Box>
              <Typography color={palette.grey[500]}>
                Numbers made easy, AI at your side. Our Finance Tracker: Smart,
                Fun, and your business's ultimate guide!
              </Typography>
            </Box>

            <Box>
              <Button
               
                sx={{
                  "&:hover": {  backgroundColor: "#0ebfa0" },
                  fontWeight:"bold",
                  borderRadius: ".5rem",
                  color: palette.grey[100],
                  backgroundColor: "#1F2026",
                  border:"1px solid grey",
                  boxShadow:
                    "rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px",
                }}
                onClick={handleDismiss}
              >
                Get Started
              </Button>

              <Box
                sx={{
                  backgroundColor: "#2d2d34",
                  borderRadius: "1rem",
                   
                   width: screenWidth <= 650 ? "100%" : "50%",
                }}
              >
                <Typography color={palette.grey[500]} margin="5%">
                  Experiences constant updates and improvements as I strive to
                  provide you with the best.While you're here, don't miss the
                  opportunity to check out my impressive{" "}
                  <a target="_blank" className="ShamelessPlug" href="https://github.com/KwabenaSark/Bookshop-Management-System#readme" style={{color:"#c29044"}}>Bookshop Management system</a>—a well-rounded
                  solution for seamless project management.
                </Typography>
              </Box>
            </Box>

            <Typography
              color={palette.grey[500]}
              fontSize="13px"
              marginRight="70%"
             
            >
              @2023 by Kwabena Sarkodieh
            </Typography>
            
          </InlineGrid>
        </Box>
      </Box>
    </Box>
  );
};

export default Home;
