import { useState } from "react";
import { Link } from "react-router-dom";
import AccountBalanceIcon from "@mui/icons-material/AccountBalance";
import SettingsSuggestIcon from "@mui/icons-material/SettingsSuggest";
import { Box, Typography, useTheme, useMediaQuery } from "@mui/material";
import FlexBetween from "@/components/FlexBetween";
import Settiings from "./settiings";


type Props = {};

interface Switch {
  SettingOn: boolean;
  SettingOff: boolean;
}

const Navbar = (props: Props) => {
  const { palette } = useTheme();
  const [selected, setSelected] = useState("dashboard");
  const screenWidth = useMediaQuery("(max-width: 1200px)");
//Settings Button
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
 


  return (
    <>
    <FlexBetween
      gap="1rem"
      marginRight="1rem"
      marginLeft="1rem"
      mb="0.25rem"
      p="0.5rem 0rem"
      color={palette.grey[300]}
      
    
    >
      {/* LEFT SIDE */}
      <FlexBetween gap="0.75rem">
        <AccountBalanceIcon sx={{ fontSize: "30px" }} />
        <Typography  variant="h2" fontSize="16px">
          Finance Tracker
        </Typography>
      </FlexBetween>

      {screenWidth ? (
        <FlexBetween gap="2rem" overflow="scroll">
          <Box sx={{ "&:hover": { color: palette.primary[100] } }}>
            <Link
              to="/"
              onClick={() => setSelected("dashboard")}
              style={{
                color: selected === "dashboard" ? "inherit" : palette.grey[700],
                textDecoration: "inherit",
              }}
            >
              dashboard
            </Link>
          </Box>
          <Box sx={{ "&:hover": { color: palette.primary[100] } }}>
            <Link
              to="/predictions"
              onClick={() => setSelected("predictions")}
              style={{
                color:
                  selected === "predictions" ? "inherit" : palette.grey[700],
                textDecoration: "inherit",
              }}
            >
              predictions
            </Link>
          </Box>
          <Box sx={{ "&:hover": { color: palette.primary[100] } }}>
            <Link
              to="/ask_ai"
              onClick={() => setSelected("ask_ai")}
              style={{
                color: selected === "ask_ai" ? "inherit" : palette.grey[700],
                textDecoration: "inherit",
              }}
            >
              ask ai
            </Link>
          </Box>
          <Box sx={{ "&:hover": { color: palette.primary[100] } }}>
            <Link
              to="/ledger"
              onClick={() => setSelected("ledger")}
              style={{
                color: selected === "ledger" ? "inherit" : palette.grey[700],
                textDecoration: "inherit",
              }}
            >
              ledger
            </Link>
          </Box>
          <Box sx={{ "&:hover": { color: palette.primary[100] } }}>
            <Link
              to="/report"
              onClick={() => setSelected("report")}
              style={{
                color: selected === "report" ? "inherit" : palette.grey[700],
                textDecoration: "inherit",
              }}
            >
              report
            </Link>
          </Box>
        </FlexBetween>
      ) : null}
      
      <SettingsSuggestIcon  sx={{ fontSize: "28px", "&:hover": { color: palette.primary[100] } }}  onClick={togglePopup}  style={{
                color: state.SettingOn ? "inherit" : palette.grey[700],
                textDecoration: "inherit",
                
              }} />
    </FlexBetween>
    <Box>
    { state.SettingOn  && <Settiings />}
  
    </Box>
    </>
  );
};

export default Navbar;
