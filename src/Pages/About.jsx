import { Box, Button, Flex, Heading, Image, Text } from '@chakra-ui/react'
import React from 'react';
import about_img from '../Assets/about1_img.avif';

const About = () => {
  return (
    <Box pb={'40px'} id="about" className="about section bg">
      <Heading data-aos="fade-right" pt={'30px'} mb={'30px'} textAlign={'center'} color={'gray.300'}>About Me</Heading>
      <Flex direction={{base : 'column', sm : 'column', md : 'column', lg : 'row', xl : 'row', '2xl' : 'row'}} alignItems={'center'} gap={'30px'} p={'60px 40px'} w={'85%'} m={'auto'} bg={'#02b87f'}>
        <Image boxShadow='rgba(0, 0, 0, 0.24) 0px 3px 8px' borderRadius={'50%'} border={'1px outset gray'} w={'400px'} src={about_img} alt='img1' />
        <Text fontWeight={'bold'} textAlign={'center'} color={'gray.700'} id='user-detail-intro'>
          Full Stack Web Developer with the ability to learn and
          collaborate in rapidly changing environments and
          compositions. Worked through 1200+ hours of boot
          camp structure, learnt HTML, CSS, Javascript, React.js,Node.js, MongoDB and Typescript. 
          Eager to tackle web development challenges to
          achieve lasting impacts on user experience.
        </Text>
      </Flex>
    </Box>
  )
}

export default About; 
