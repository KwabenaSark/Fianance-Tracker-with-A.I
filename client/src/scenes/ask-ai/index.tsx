import { Box, Typography} from "@mui/material";
import DashboardBox from "@/components/DashboardBox";

import PlaceCenter from "@/components/PlaceCenter";
import FlexBetween from "@/components/FlexBetween";
// import { ChatOpenAI } from "langchain/chat_models/openai";
// import { HumanChatMessage, SystemChatMessage } from "langchain/schema";

// const chat = new ChatOpenAI({ temperature: 0 });

type Props = {};

const AskAi = (props: Props) => {

  

  return (
<DashboardBox height="100%">
    <FlexBetween>
<Box margin= "2rem">
          <Typography variant="h3">Intelligent Financial Assistant</Typography>
          <Typography variant="h6">
           powered by a large language model for AI-Driven Chat Interactions with the database
          </Typography>
        </Box>
        </FlexBetween>
     <Box height="100%">
       <PlaceCenter><input></input></PlaceCenter> 
     </Box>


</DashboardBox>
    



  );
};

export default AskAi;
