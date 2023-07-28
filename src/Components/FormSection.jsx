import { Box, Input, Select, Text } from '@chakra-ui/react';
import React from 'react';

const FormSection = () => {
  let LocationArr = ["1-20", "21-50", '51-200', '201-500', '500+'];
  return (
    <Box w={['80%', '80%', '65%']} m='auto'>
      <form>
        {/* form fields */}
        <label>
          Your name
          <Input mt={['3%', '3%', '1%']} opacity={'0.7'} placeholder='e.g. Jhon Smith' />
        </label>
        <br />
        <br />
        <label>
          Company name
          <Input mt={['3%', '3%', '1%']} opacity={'0.7'} placeholder='e.g. Alpha Inc.' />
        </label>
        <br />
        <br />
        <label>
          Industry
          <Select mt={['3%', '3%', '1%']} opacity={'0.7'}>
            <option value={''}>Select</option>
            <option value={'FinTech'}>FinTech</option>
            <option value={'IT'}>IT</option>
            <option value={'EdTech'}>EdTech</option>
            <option value={'Software Development'}>Software Development</option>
          </Select>
        </label>
        <br />
        <label>
          Number of locations
          <Box mt={['3%', '3%', '1%']} display={'flex'} justifyContent={'space-between'}>
            {LocationArr.map((ele, index) =>
              ele === "51-200" ? <Text key={index} p={['1px 4px', '1px 4px', '2px 10px']} borderRadius={'1px'} bg='blue.500' color={'white'}>{ele}</Text> :
                <Text key={index} p={['1px 4px', '1px 4px', '2px 10px']} borderRadius={'1px'} bg='blackAlpha.100'>{ele}</Text>
            )}
          </Box>
        </label>
        <br />
        <br />
        <Input mb={['15%', '15%', '8%']} fontSize={'16.8px'} bg='blue.500' color={'white'} type='submit' value={'Get Started'} />
      </form>
    </Box>
  );
}

export default FormSection;