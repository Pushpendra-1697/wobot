import { Box, Img } from "@chakra-ui/react";
import TopSection from "./Components/TopSection";
import FormSection from "./Components/FormSection";
import BottomSection from "./Components/BottomSection";

function App() {

  return (
    <Box bg='blackAlpha.100'>
      <Img ml='5%' pt={['12%', '12%', '3%']} src='./logo.svg' title='Logo' />
      <Box bg='white' fontWeight={'medium'} width={{ base: '90%', sm: '90%', md: '70%', xl: '50%', "2xl": '50%' }} m='auto' boxShadow="rgba(0, 0, 0, 0.16) 0px 1px 4px" borderRadius={'10px'}>
        <TopSection />
        <FormSection />
      </Box>
      <BottomSection />
    </Box>
  );
};

export default App;
