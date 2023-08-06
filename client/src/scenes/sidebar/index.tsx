import { useState } from "react";
import { Link } from "react-router-dom";

import { Box, useTheme, Typography } from "@mui/material";
import InlineGrid from "@/components/InlineGrid";
import PlaceCenter from "@/components/PlaceCenter";

type Props = {};

const Sidebar = (props: Props) => {
  const { palette } = useTheme();
  const [selected, setSelected] = useState("dashboard");

  return (

    
     
 <PlaceCenter>
  <InlineGrid gap="2rem" mb="0.25rem" p="0.5rem 0rem" color="white" >

          <Box sx={{ "&:hover": { color: palette.primary[100] } }}>
            <Link
              to="/"
              onClick={() => setSelected("dashboard")}
              style={{
                color: selected === "dashboard" ? "inherit" : palette.grey[700],
                textDecoration: "inherit",
              }}
            ><Typography variant="h2" > Dashboard</Typography>
             
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
              <Typography variant="h2" >Predictions</Typography>
             
            </Link>
          </Box>
          <Box sx={{ "&:hover": { color: palette.primary[100] } }}>
            <Link
              to="/ask_ai"
              onClick={() => setSelected("ask_ai")}
              style={{
                color:
                  selected === "ask_ai" ? "inherit" : palette.grey[700],
                textDecoration: "inherit",
              }}
            >
              <Typography variant="h2" >Ask AI</Typography>
            
            </Link>
          </Box>
          <Box sx={{ "&:hover": { color: palette.primary[100] } }}>
            <Link
              to="/ledger"
              onClick={() => setSelected("ledger")}
              style={{
                color:
                  selected === "ledger" ? "inherit" : palette.grey[700],
                textDecoration: "inherit",
              }}
            >
             <Typography variant="h2" >Ledger</Typography>
            </Link>
          </Box>
          <Box sx={{ "&:hover": { color: palette.primary[100] } }}>
            <Link
              to="/report"
              onClick={() => setSelected("report")}
              style={{
                color:
                  selected === "report" ? "inherit" : palette.grey[700],
                textDecoration: "inherit",
              }}
            >
            <Typography variant="h2" >Report</Typography>
            </Link>
          </Box>
       
  </InlineGrid>
  </PlaceCenter>


  );
};

export default Sidebar;
