import React, { useRef, useState } from 'react';
import emailjs from "@emailjs/browser";
import { Box, Button, Flex, Heading, Image, Input, Link, Text, Textarea } from '@chakra-ui/react'
import { BsGithub, BsLinkedin } from 'react-icons/bs';
import { FaMobileAlt } from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi';

const Contact = () => {

  const form = useRef();
  const [done, setDone] = useState(false)
  const [notDone, setNotDone] = useState(false)
  const [formData, setFormData] = useState({});

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
    setDone(false)
    setNotDone(false)
  }

  const sendEmail = (e) => {
    e.preventDefault();

    if (!formData.from_name || !formData.reply_to || !formData.message) {
      setNotDone(true)
    } else {
      emailjs
        .sendForm(
          // "service_d3pb05e",
          // "template_21glk6d",
          // form.current,
          // "94PuNf-lAN2EX85Ky"

          "service_4bgtxc9",
          "template_qpow83e",
          form.current,
          "5kq4glosIyTKn4MHl"
        )

        .then(
          (result) => {
            setDone(true);
            setFormData({})
          },
          (error) => {
            console.log(error.text);
          }
        );
    }
  };

  return (
    <Box p={'10px 0 30px 0'} color={'white'} id='contact' className='bg'>
      <Heading p={'30px 0'} textAlign={'center'} color={'gray.300'}>Contact</Heading>
      
      <form style={{width : '35%', margin : '20px auto'}} ref={form} onSubmit={sendEmail}>
        <Input mb={'10px'} type="text" name="from_name" className="user" placeholder="Name" onChange={handleChange} />
        <Input mb={'10px'} type="email" name="reply_to" className="user" placeholder="Email" onChange={handleChange} />
        <Textarea mb={'10px'} name="message" className="user" placeholder="Message" onChange={handleChange} />
        <span className='not-done' >{notDone && "Kindly fill all the input fields to send a message."}</span>
        <Button w={'100%'} mb={'20px'} _hover={'none'} backgroundImage={'linear-gradient(to right, #01b395, #03bd69)'} fontFamily={'cursive'} type="submit" disabled={done}>Send</Button>
        <span className='done'>{done && "Thanks for contacting me and be sure I have recieved your mail."}</span>
      </form>
      <Flex gap={'15px'} lineHeight={'30px'} textAlign={'center'} w={'85%'} m={'auto'} justifyContent={'space-between'}>
        <Box display={'grid'} placeItems={'center'} w={'24%'} borderRadius={'5px'} p={'10px 40px'} border={'1px outset'}>
          <Link id='contact-github' href='https://github.com/ritesh22201'><BsGithub style={{ margin: 'auto', fontSize: '35px' }} /></Link>
          <Text>Github</Text>
        </Box>
        <Box display={'grid'} placeItems={'center'} w={'24%'} borderRadius={'5px'} p={'10px 40px'} border={'1px outset'}>
          <Link id='contact-linkedin' href='https://www.linkedin.com/in/riteshinfo/'><BsLinkedin style={{ margin: 'auto', fontSize: '35px' }} /></Link>
          <Text>LinkedIn</Text>
        </Box>
        <Box display={'grid'} placeItems={'center'} w={'26%'} borderRadius={'5px'} p={'10px 40px'} border={'1px outset'}>
          <Text><FaMobileAlt style={{ margin: 'auto', fontSize: '35px' }} /></Text>
          <Text id='contact-phone'>+918434022201</Text>
        </Box>
        <Box w={'30%'} borderRadius={'5px'} p={'10px 40px'} border={'1px outset'}>
          <Text><HiOutlineMail style={{ margin: 'auto', fontSize: '45px' }} /></Text>
          <Text id='contact-email'>riteshgoswami22201@gmail.com</Text>
        </Box>
      </Flex>
    </Box>
  )
}

export default Contact;