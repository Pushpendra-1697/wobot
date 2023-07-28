import { Box, Img, Text } from '@chakra-ui/react';
import React from 'react';

const TopSection = () => {
  return (
    <Box pt='3%' mb='5%' display={'flex'} justifyContent={'center'} alignItems={'center'} flexDirection={'column'}>
      <Img mb='2%' src='./logo.svg' title='Logo' />
      <Text lineHeight={'30px'} opacity='0.9' mb='2%'  width={'40%'} fontSize={'27px'}>It's a delight to have <Text ml='18%'>you onboard</Text></Text>
      <Text opacity='0.7' mb='2%'>Help us know you batter.</Text>
      <Text lineHeight={'19px'} opacity='0.7' width={'35%'}>(This is how we optimize wobot as <Text ml='18%'>per your business needs)</Text></Text>
    </Box>
  );
}

export default TopSection;