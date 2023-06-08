import { Box, Button, Flex, Heading, Image, Text } from '@chakra-ui/react'
import React from 'react';
import about_img from '../Assets/about1_img.avif';

const About = () => {
  return (
    <Box pb={'40px'} id="about" className="about section bg">
      <Heading pt={'30px'} mb={'30px'} textAlign={'center'} color={'gray.300'}>About Me</Heading>
      <Flex alignItems={'center'} gap={'30px'} p={'60px 40px'} w={'85%'} m={'auto'} bg={'#02b87f'}>
        <Image boxShadow= 'rgba(0, 0, 0, 0.24) 0px 3px 8px' borderRadius={'50%'} border={'1px outset gray'} w={'400px'} src={about_img} alt='img1' />
        <Text fontWeight={'bold'} textAlign={'center'} color={'gray.700'} id='user-detail-intro'>
          My name is Ritesh Goswami, I'm a full-stack developer with a great passion for programming. I am passionate about delivering solutions that add to people's lives and at the same time challenge me. I develop websites and applications using HTML, CSS, and JavaScript. I am familiar with developing layouts that they provide me. I'm always improving myself with each project I get my hands on. I am a dedicated person who pursues his dreams, hardworking and results oriented, I always seek to achieve my best version.
        </Text>
      </Flex>
    </Box>
  )
}

export default About