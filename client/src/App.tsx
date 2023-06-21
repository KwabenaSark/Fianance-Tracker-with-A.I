import { Box } from "@mui/material";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { createTheme } from "@mui/material/styles";
import { useMemo } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { themeSettings } from "./theme";
import Navbar from "@/scenes/navbar";
import Dashboard from "@/scenes/dashboard";
import Predictions from "@/scenes/predictions";
import Columns from "./components/Columns";
import Sidebar from "./scenes/sidebar";
import AskAi from "./scenes/ask-ai";
import Report from "./scenes/report";
import Ledger from "./scenes/ledger";

function App() {
  const theme = useMemo(() => createTheme(themeSettings), []);

  return (
    <div className="app">
      <BrowserRouter>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <Navbar />
          <Columns>
            <Box
              sx={{
                width: "9%",
                height: "100%",
                "@media (max-width: 1200px)": {
                  display: "none",
                  width: "0%",
                },
              }}
            >
              <Sidebar />
            </Box>
            <Box
              sx={{
                width: "91%",
                height: "100%",
                padding: "1rem 2rem 4rem 2rem",
                "@media (max-width: 1200px)": {
                  width: "100%",
                },
              }}
            >
              <Routes>
                <Route path="/" element={<Dashboard />} />
                <Route path="/predictions" element={<Predictions />} />
                <Route path="/ask_ai" element={<AskAi />} />
                <Route path="/ledger" element={<Ledger />} />
                <Route path="/report" element={<Report />} />
              </Routes>
            </Box>
          </Columns>
        </ThemeProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
