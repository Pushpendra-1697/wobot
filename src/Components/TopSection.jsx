import { Box, Img, Text } from '@chakra-ui/react';
import React from 'react';

const TopSection = () => {
  return (
    <Box mb='5%' display={'flex'} justifyContent={'center'} alignItems={'center'} flexDirection={'column'}>
      <Img mb='2%' src='./logo.svg' title='Logo' />
      <Text opacity='0.9' mb='2%'  width={'30%'} fontSize={'24px'} fontWeight={'medium'}>It's a delight to have you onboard</Text>
      <Text opacity='0.7' mb='2%'>Help us know you batter.</Text>
      <Text opacity='0.7' width={'35%'}>(This is how we optimize wobot as per your business needs)</Text>
    </Box>
  );
}

export default TopSection;