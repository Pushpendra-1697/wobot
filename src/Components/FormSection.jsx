import { Box, Button, Input, Select, Text } from '@chakra-ui/react';
import React from 'react'

const FormSection = () => {
  let LocationArr = ["1-20", "21-50", '51-200', '201-500', '500+'];
  return (
    <Box w={'70%'} m='auto'>

      <form>
        {/* form fields */}
        <label>
          Your name
          <Input mt='1%' opacity={'0.7'} placeholder='e.g. Jhon Smith' />
        </label>
        <br />
        <br />
        <label>
          Company name
          <Input mt='1%' opacity={'0.7'} placeholder='e.g. Alpha Inc.' />
        </label>
        <br />
        <br />
        <label>
          Industry
          <Select mt='1%' opacity={'0.7'}>
            <option value={''}>Select</option>
          </Select>
        </label>
        <br />
        <label>
          Number of locations
          <Box mt='1%' display={'flex'} justifyContent={'space-between'}>
            {LocationArr.map((ele) =>
              ele === "51-200" ? <Text p={'2px 10px'} borderRadius={'1px'} bg='blue.500' color={'white'}>{ele}</Text> :
                <Text p={'2px 10px'} borderRadius={'1px'} bg='blackAlpha.100'>{ele}</Text>
            )}
          </Box>
        </label>
        <br />
        <br />
        <Input mb={'8%'} fontSize={'16.8px'} bg='blue.500' color={'white'} type='submit' value={'Get Started'} />
      </form>
    </Box>
  );
}

export default FormSection;