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
        <Box position="sticky" top='0' className={'bg'} color={'white'} p={'12px 0'} fontSize={'19px'}>
            <nav id='nav-menu' className='nav-menu'>
                <Flex m='0 30px' p={'10px'} alignItems={'center'} justifyContent={'space-between'}>
                    <Box className='nav-logo' fontSize='25px' textAlign='start' w={'20%'}>
                        Ritesh
                    </Box>
                    <Box w={'55%'}>
                        <Flex justifyContent={'space-between'} alignItems={'center'}>
                            <HashLink className='nav-link home' style={{ textDecoration: "none" }} to='/'>Home</HashLink>
                            <HashLink className='nav-link about' style={{ textDecoration: "none" }} to='/#about'>About</HashLink>
                            <HashLink className='nav-link skills' style={{ textDecoration: "none" }} to='/#skills'>Skills</HashLink>
                            <HashLink className='nav-link projects' style={{ textDecoration: "none" }} to='/#projects'>Projects</HashLink>
                            <HashLink className='nav-link contact' style={{ textDecoration: "none" }} to='/#contact'>Contact</HashLink>
                            <Button onClick={resumeHandler} id='button' className='nav-link resume'>Resume</Button>
                        </Flex>
                    </Box>
                </Flex>
            </nav>
        </Box>
    )
}

export default Navbar