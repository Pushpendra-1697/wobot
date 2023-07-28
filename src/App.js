import { Box } from "@chakra-ui/react";
import TopSection from "./Components/TopSection";
import FormSection from "./Components/FormSection";
import BottomSection from "./Components/BottomSection";

function App() {
  return (
    <>
      <Box fontWeight={'medium'} width={'50%'} m='auto' boxShadow="rgba(0, 0, 0, 0.16) 0px 1px 4px" borderRadius={'10px'}>
        <TopSection />
        <FormSection />
      </Box>
      <BottomSection />
    </>
  );
};

export default App;
