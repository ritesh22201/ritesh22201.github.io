import { Box, Button, Link, Flex, Divider } from '@chakra-ui/react'
import React from 'react';
import { HashLink } from 'react-router-hash-link';
import './Button.css';
import 'animate.css';

const Navbar = () => {

    const resumeHandler = () => {
        window.open('https://drive.google.com/file/d/12vmGRzVMprilVwXAke-UsZBhbs1Q3ldT/view');
    }

    return (
        <Box position="sticky" top='0' className={'bg'} color={'white'} id='nav-menu' p={'12px 0'} fontSize={'19px'}>
            <Flex m='0 30px' p={'10px'} alignItems={'center'} justifyContent={'space-between'}>
                <Box fontSize='25px' textAlign='start' w={'20%'}>
                    Ritesh
                </Box>
                <Box w={'55%'}>
                    <Flex justifyContent={'space-between'} alignItems={'center'}>
                        <HashLink className='animate__animated animate__pulse' style={{ textDecoration:"none"}} to='/'>Home</HashLink>
                        <HashLink data-mdb-animation-start="onHover"  className='animate__animated animate__pulse' style={{ textDecoration:"none"}} to='/#about'>About</HashLink>
                        <HashLink className='animate__animated animate__pulse' style={{ textDecoration:"none"}} to='/#skills'>Skills</HashLink>
                        <HashLink className='animate__animated animate__pulse' style={{ textDecoration:"none"}} to='/#projects'>Projects</HashLink>
                        <HashLink className='animate__animated animate__pulse' style={{ textDecoration:"none"}} to='/#contact'>Contact</HashLink>
                        <Button onClick={resumeHandler} id='button' className='animate__animated animate__pulse'>Resume</Button>
                    </Flex>
                </Box>
            </Flex>
        </Box>
    )
}

export default Navbar