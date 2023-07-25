import React, { useRef, useState } from 'react';
import emailjs from "@emailjs/browser";
import { Box, Button, Flex, Grid, Heading, Image, Input, Link, Text, Textarea, position, useToast } from '@chakra-ui/react'
import { BsGithub, BsLinkedin } from 'react-icons/bs';
import { FaMobileAlt } from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi';
import BackToTopButton from '../Components/BackToTopButton';

const Contact = () => {

  const toast = useToast();
  const form = useRef();
  const [formData, setFormData] = useState({
    to_name: '',
    from_name: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const sendEmail = (e) => {
    e.preventDefault();

    if (!formData.to_name || !formData.from_name || !formData.message) {
      toast({
        title: 'All fields are required',
        isClosable: true,
        status: 'warning',
        duration: 4000,
        position : 'top'
      })

      return;
    }

    emailjs.sendForm('service_w111gim', 'template_qpow83e', form.current, '5kq4glosIyTKn4MHl')
      .then((result) => {
        if(result){
          toast({
            title: 'Message sent successfully',
            isClosable: true,
            status: 'success',
            duration: 4000,
            position : 'top'
          })
        }
      }, (error) => {
        toast({
          title: error.text,
          isClosable: true,
          status: 'error',
          duration: 4000,
          position : 'top'
        })
      });

    setFormData({
      to_name: '',
      from_name: '',
      message: ''
    })
  };

  return (
    <Box p={'10px 0 30px 0'} color={'white'} id='contact' className='bg'>
      <BackToTopButton />
      <Heading p={'30px 0'} textAlign={'center'} color={'gray.300'} data-aos="fade-right">Contact</Heading>
      <Box w={{ base: '90%', sm: '75%', md: '50%', lg: '45%', xl: '40%' }} m={'auto'}>
        <form style={{ width: '100%', margin: '20px auto' }} ref={form} onSubmit={sendEmail}>
          <Input mb={'10px'} type="text" name="to_name" value={formData.to_name} className="user" placeholder="Name" onChange={(e) => handleChange(e)} />
          <Input mb={'10px'} type="email" name="from_name" value={formData.from_name} className="user" placeholder="Email" onChange={(e) => handleChange(e)} />
          <Textarea mb={'10px'} name="message" className="user" value={formData.message} placeholder="Message" onChange={(e) => handleChange(e)} />
          <Button w={'100%'} mb={'20px'} _hover={'none'} backgroundImage={'linear-gradient(to right, #01b395, #03bd69)'} fontFamily={'cursive'} type="submit">Send</Button>
        </form>
      </Box>
      <Grid w={'90%'} gridTemplateColumns={{ base: 'repeat(1, 1fr)', sm: 'repeat(1, 1fr)', md: 'repeat(2, 1fr)', lg: 'repeat(3, 1fr)', xl: 'repeat(4, 1fr)', '2xl': 'repeat(4, 1fr)' }} gap={'15px'} lineHeight={'30px'} textAlign={'center'} m={'auto'} justifyContent={'space-between'}>
        <Box display={'grid'} placeItems={'center'} borderRadius={'5px'} p={'10px 40px'} border={'1px outset'}>
          <Link id='contact-github' href='https://github.com/ritesh22201' target='_blank'><BsGithub style={{ margin: 'auto', fontSize: '35px' }} /></Link>
          <Text>Github</Text>
        </Box>
        <Box display={'grid'} placeItems={'center'} borderRadius={'5px'} p={'10px 40px'} border={'1px outset'}>
          <Link id='contact-linkedin' href='https://www.linkedin.com/in/riteshinfo/' target='_blank'><BsLinkedin style={{ margin: 'auto', fontSize: '35px' }} /></Link>
          <Text>LinkedIn</Text>
        </Box>
        <Box display={'grid'} placeItems={'center'} borderRadius={'5px'} p={'10px 40px'} border={'1px outset'}>
          <Text><FaMobileAlt style={{ margin: 'auto', fontSize: '35px' }} /></Text>
          <Text id='contact-phone'>+918434022201</Text>
        </Box>
        <Box borderRadius={'5px'} p={'10px 40px'} border={'1px outset'}>
          <Text><HiOutlineMail style={{ margin: 'auto', fontSize: '45px' }} /></Text>
          <Text id='contact-email'>riteshgoswami22201@gmail.com</Text>
        </Box>
      </Grid>
    </Box>
  )
}

export default Contact;