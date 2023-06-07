import { Box, Button, Link, Flex, Divider } from '@chakra-ui/react'
import React, { useEffect } from 'react';
import { HashLink } from 'react-router-hash-link';
import './Button.css';
import 'animate.css';
import AOS from 'aos';

const Navbar = () => {

    const resumeHandler = () => {
        window.open('https://drive.google.com/file/d/12vmGRzVMprilVwXAke-UsZBhbs1Q3ldT/view');
    }

    useEffect(() => {
        AOS.init({ delay: 300 });
    }, [])

    return (
        <Box position="sticky" top='0' className={'bg'} color={'white'} p={'12px 0'} fontSize={'19px'}>
            <nav id='nav-menu' className='nav-menu'>
                <Flex m='0 30px' p={'10px'} alignItems={'center'} justifyContent={'space-between'}>
                    <Box className='nav-logo' fontSize='25px' textAlign='start' w={'20%'}>
                        Ritesh
                    </Box>
                    <Box w={'55%'}>
                        <Flex justifyContent={'space-between'} alignItems={'center'}>
                            <HashLink data-aos="zoom-in" className='nav-link home' style={{ textDecoration: "none" }} to='/#'>Home</HashLink>
                            <HashLink className='nav-link about' style={{ textDecoration: "none" }} to='/#about'>About</HashLink>
                            <HashLink className='nav-link skills' style={{ textDecoration: "none" }} to='/#skills'>Skills</HashLink>
                            <HashLink className='nav-link projects' style={{ textDecoration: "none" }} to='/#projects'>Projects</HashLink>
                            <HashLink className='nav-link contact' style={{ textDecoration: "none" }} to='/#contact'>Contact</HashLink>
                            <Button p={'7px 17px'} backgroundImage={'linear-gradient(to right, #01b395, #03bd69)'} fontFamily={'cursive'} onClick={resumeHandler} id='resume-button-1' className='nav-link resume'>Resume</Button>
                            {/* <Link fontWeight={'bold'} borderRadius={'5px'} p={'7px 17px'} backgroundImage={'linear-gradient(to right, #01b395, #03bd69)'} fontFamily={'cursive'} id='resume-button-2' href={Ritesh_Goswami_Resume} download={true} target='_blank'> */}
                                {/* <Button>
                                    Resume
                                </Button> */}
                            {/* </Link> */}
                        </Flex>
                    </Box>
                </Flex>
            </nav>
        </Box>
    )
}

export default Navbar