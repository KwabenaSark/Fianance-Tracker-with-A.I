import { Box,Typography,useTheme,Button } from '@mui/material'
import React from 'react'
import DashboardBox from "@/components/DashboardBox";
import FlexBetween from '@/components/FlexBetween';


const Add = () => {
    const { palette } = useTheme();
  return (
 
  
       
       <DashboardBox   boxShadow= "rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px" left= "50%" 
    height="50%" width="50%"position="absolute" zIndex="100">
    
       <Box>
        <FlexBetween>
        <Typography variant="h4" margin="1rem" color={palette.grey[300]}> Themes:</Typography>
        <Box>
            <FlexBetween>
            <Button><Typography>Light</Typography></Button>
            <Button> <Typography>Dark</Typography></Button>
            </FlexBetween>
        </Box>
        </FlexBetween>
       </Box>
    </DashboardBox>
 
   
  
  )
}

export default Add