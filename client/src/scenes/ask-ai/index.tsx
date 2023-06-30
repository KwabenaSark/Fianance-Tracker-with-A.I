import { Box, Typography, useTheme, TextField } from "@mui/material";
import DashboardBox from "@/components/DashboardBox";

import PlaceCenter from "@/components/PlaceCenter";
import FlexBetween from "@/components/FlexBetween";
import { useEffect, useState } from "react";
import Columns from "@/components/Columns";


// import { ChatOpenAI } from "langchain/chat_models/openai";
// import { HumanChatMessage, SystemChatMessage } from "langchain/schema";

// const chat = new ChatOpenAI({ temperature: 0 });

type Props = {};

const AskAi = (props: Props) => {
  const [queryInput, setQueryInput] = useState<string>("");
  const [response, setResponse] = useState<any>(null);
  const { palette } = useTheme();

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setQueryInput(event.target.value);
  };

  useEffect(() => {

    //AI Model
    async function query(data: any) {
      const response = await fetch(
        "https://api-inference.huggingface.co/models/google/flan-t5-base",
        {
          headers: {
            Authorization: "Bearer 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",
          },
          method: "POST",
          body: JSON.stringify(data),
        }
      );

      const result = await response.json();
      setResponse(result );
    }

   

    const context = ""; // Set the initial context here

    if (queryInput !== "") {
      const fullInput = `${context} ${queryInput}`; // Concatenate the context and query input
      query({ inputs: fullInput });
    }
  }, [queryInput]);

  //textfield color
  const inputProps = {
    style: {
      backgroundColor: "#45444d",

      color: palette.grey[100],
      width: "80%",
      borderRadius: "1rem",
      boxShadow:
        "rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px",
    }, // Specify the desired text color here
  };
  //label style
  const inputLabelProps = {
    style: { color: palette.grey[100], fontWeight: "bold" }, // Specify the desired label color here
  };

  return (
    <DashboardBox height="100%">
      <FlexBetween>
        <Box margin="2rem">
          <Typography variant="h3">Intelligent Financial Assistant</Typography>
          <Typography variant="h6">
            powered by a large language model for AI-Driven Chat Interactions
            with the database
          </Typography>
        </Box>
      </FlexBetween>
      <Box height="100%">
        <PlaceCenter>
          <Typography variant="h2" color={palette.grey[300]}>
            {response && <pre>{JSON.stringify(response)}</pre>}
          </Typography>

          <PlaceCenter marginLeft="15%" width="80%">
            <TextField
              fullWidth
              label="Ask A.I"
              id="fullWidth"
              type="text"
              value={queryInput}
              onChange={handleInputChange}
              InputProps={inputProps}
              InputLabelProps={inputLabelProps}
            />
          </PlaceCenter>
        </PlaceCenter>
      </Box>
    </DashboardBox>
  );
};

export default AskAi;
