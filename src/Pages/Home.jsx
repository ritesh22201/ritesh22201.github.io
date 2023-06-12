import { Box, Heading, Flex, Image, Button, Link } from '@chakra-ui/react'
import React from 'react'
import '../Components/Button.css';
import image from '../Assets/ritesh_resume_img.jpg';
import Ritesh_Goswami_Resume from '../Assets/Ritesh-Goswami-Resume.pdf';

const Home = () => {

  return (
    <Box p={'60px 0 40px 0'} id='home' color='white' bg={'black'} >
      <Flex justifyContent={'space-around'} alignItems={'center'}>
        <Box>
          <Heading color={'gray.300'} mb={'20px'} fontSize={'25px'}>Hi, I'M</Heading>
          <Heading id='user-detail-name' bgGradient={'linear-gradient(to right, #01b395, #03bd69)'} bgClip='text' mb={'20px'} fontSize={'50px'}>RITESH GOSWAMI</Heading>
          <Heading color={'gray.300'} mb={'40px'} fontSize={'25px'}>FULL STACK WEB DEVELOPER</Heading>
          {/* <Link fontWeight={'bold'} borderRadius={'5px'} p={'7px 17px'} backgroundImage={'linear-gradient(to right, #01b395, #03bd69)'} fontFamily={'cursive'} id='resume-button-2' href={Ritesh_Goswami_Resume} download={true} target='_blank'>Download Resume</Link> */}
          <Link fontWeight={'bold'} borderRadius={'5px'} backgroundImage={'linear-gradient(to right, #01b395, #03bd69)'} fontFamily={'cursive'} id='resume-button-2' href={Ritesh_Goswami_Resume} download={true} target='_blank'>
            <Button backgroundImage={'linear-gradient(to right, #01b395, #03bd69)'} _hover={'none'}>
              Download Resume
            </Button>
          </Link>
        </Box>
        <Box>
          <Image w={'350px'} borderRadius={'50%'} className='home-img' src={image} alt='profile image' />
        </Box>
      </Flex>
    </Box>
  )
}

export default Home;