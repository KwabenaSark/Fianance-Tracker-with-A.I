import { Box, Typography, useTheme, Button } from "@mui/material";
import React, { useState } from "react";
import DashboardBox from "@/components/DashboardBox";
import FlexBetween from "@/components/FlexBetween";
import CancelIcon from "@mui/icons-material/Cancel";
import Ledger, {Switch} from ".";

const Add = () => {
  const { palette } = useTheme();
//cancel
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
      window.location.reload();}
  
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
            
            margin:".5rem",
            float:"right",
            fontSize: "40px",
            color:palette.grey[300],
            "&:hover": { color: palette.secondary[200] },
          }}
        />

        <Box>

<Typography variant="h3" margin="1rem" color={palette.grey[300]}>
            
            ADD
            </Typography>
              <Button onClick={handleClick}>
                <Typography>Done</Typography>
              </Button>
            
              {state.SettingOn && <Add />}
      </Box>
      
    </DashboardBox>
  );
};

export default Add;
