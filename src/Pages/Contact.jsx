import { Box, Flex, Heading, Image, Link, Text } from '@chakra-ui/react'
import React from 'react';
import { BsGithub, BsLinkedin } from 'react-icons/bs'

const Contact = () => {
  return (
    <Box id='contact' className='bg'>
      <Heading>Contact</Heading>
      <Flex>
        <Box>
          <Link id='contact-github' href='https://github.com/ritesh22201'><BsGithub /></Link>
          <Text>Github</Text>
        </Box>
        <Box>
          <Link id='contact-linkedin' href='https://www.linkedin.com/in/riteshinfo/'><BsLinkedin /></Link>
          <Text>LinkedIn</Text>
        </Box>
        <Box>
          <Text>Mobile Number</Text>
          <Link id='contact-phone' href=''>+918434022201</Link>
        </Box>
        <Box>
          <Text>Email</Text>
          <Link id='contact-email' href=''>riteshgoswami22201@gmail.com</Link>
        </Box>
      </Flex>
    </Box>
  )
}

export default Contact