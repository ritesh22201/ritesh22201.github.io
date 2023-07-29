import { Box, Flex } from '@chakra-ui/react'
import React from 'react'

const Footer = () => {
  return (
    <Flex color={'gray.300'} fontSize={'20px'} bg={'black'} p={'20px'} alignContent={'center'} justifyContent={'space-between'}>
       <Box fontWeight={'bold'} color={'gray.300'}> R<span style={{color : '#03bd69'}}>G</span></Box>
       <Box>Developed by <span style={{color : '#03bd69'}}>Ritesh Goswami</span></Box>
       <Box></Box>
    </Flex>
  )
}

export default Footer