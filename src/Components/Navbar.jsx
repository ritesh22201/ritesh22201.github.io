import { Box, Button, Link, Flex, Divider } from '@chakra-ui/react'
import React, { useEffect } from 'react';
import { useColorMode, useColorModeValue, IconButton, useDisclosure, VStack, HStack } from '@chakra-ui/react';
import { FaMoon, FaSun } from 'react-icons/fa';
// import { Link } from 'react-router-dom';
import { BiMenu, BiMenuAltLeft } from 'react-icons/bi';
import {
    Drawer,
    DrawerBody,
    DrawerFooter,
    DrawerHeader,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
} from '@chakra-ui/react'
import { HashLink } from 'react-router-hash-link';
import Ritesh_Goswami_Resume from '../Assets/Ritesh_Goswami_resume.pdf';
import './Button.css';
import 'animate.css';
import AOS from 'aos';

const Navbar = () => {
    const { onClose, onOpen, isOpen } = useDisclosure();

    useEffect(() => {
        AOS.init({ delay: 300 });
    }, [])

    return (
        <Box boxShadow='rgba(0, 0, 0, 0.24) 0px 3px 8px' position="sticky" zIndex={'overlay'} top='0' className='bg' color={'white'} p={'12px 0'} fontSize={'19px'}>
            <nav id='nav-menu' className='nav-menu'>
                <Flex m='0 30px' p={'10px'} alignItems={'center'} justifyContent={'space-between'}>
                    <Box color={'gray.300'} fontWeight={'extrabold'} className='nav-logo' fontSize='30px' textAlign='start' w={'30%'}>
                        R<span style={{color : '#03bd69'}}>G</span>
                    </Box>
                    <Flex p={'10px'} justifyContent={'space-between'} mt={'10px'} alignItems={'center'}>
                        <Box
                            display={{ base: 'flex', sm: 'flex', md: 'flex', lg: 'none', xl: 'none', '2xl': 'none' }}
                            w={'10'}
                            fontFamily={'sans-serif'}
                            h={'10'}
                            color={'#03bd69'}
                            fontSize={'30px'}
                            size={'20px'}
                            onClick={onOpen}
                        >
                            <BiMenu />
                        </Box>
                        <Drawer isOpen={isOpen} onClose={onClose} placement='right'>
                            <DrawerOverlay />
                            <DrawerContent>
                                <DrawerCloseButton color={'white'} />
                                <DrawerHeader color={'gray.300'} fontWeight={'extrabold'} bg='#171518'>R<span style={{color : '#03bd69'}}>G</span></DrawerHeader >
                                <DrawerBody fontFamily={'cursive'} color={'white'} bg='#171518'>
                                    <VStack alignItems={'start'}>
                                        <Button onClick={onClose} variant={'ghost'} colorScheme='gray'>
                                            <HashLink className='nav-link home' style={{ textDecoration: "none", fontFamily : 'sans-serif' }} to='/#'>Home</HashLink>
                                        </Button>
                                        <Button onClick={onClose} variant={'ghost'} colorScheme='gray'>
                                            <HashLink className='nav-link about' style={{ textDecoration: "none", fontFamily : 'sans-serif' }} to='/#about'>About</HashLink>
                                        </Button>
                                        <Button onClick={onClose} variant={'ghost'} colorScheme='gray'>
                                            <HashLink className='nav-link skills' style={{ textDecoration: "none", fontFamily : 'sans-serif' }} to='/#skills'>Skills</HashLink>
                                        </Button>
                                        <Button onClick={onClose} variant={'ghost'} colorScheme='gray'>
                                            <HashLink className='nav-link projects' style={{ textDecoration: "none", fontFamily : 'sans-serif' }} to='/#projects'>Projects</HashLink>
                                        </Button>
                                        <Button onClick={onClose} variant={'ghost'} colorScheme='gray'>
                                            <HashLink className='nav-link contact' style={{ textDecoration: "none", fontFamily : 'sans-serif' }} to='/#contact'>Contact</HashLink>
                                        </Button>
                                    </VStack>
                                    <HStack w={'full'} justifyContent={'space-evenly'} pos={'absolute'} bottom={'5'} left={'0'}>
                                        <Link fontWeight={'bold'} borderRadius={'5px'} fontFamily= 'sans-serif' backgroundImage={'linear-gradient(to right, #01b395, #03bd69)'} className='nav-link resume' id='resume-button-1' href={Ritesh_Goswami_Resume} download={true} target='_blank'>
                                            <Button backgroundImage={'linear-gradient(to right, #01b395, #03bd69)'} _hover={'none'}>
                                                Resume
                                            </Button>
                                        </Link>
                                    </HStack>
                                </DrawerBody>
                            </DrawerContent>
                        </Drawer>
                    </Flex>
                    <Flex w={'55%'} alignItems={'center'} justifyContent={'space-between'} display={{ base: 'none', sm: 'none', md: 'none', lg: 'flex', xl: 'flex', '2xl': 'flex' }}>
                        <HashLink className='nav-link home' style={{ textDecoration: "none" }} smooth to='/#'>Home</HashLink>
                        <HashLink className='nav-link about' style={{ textDecoration: "none" }} smooth to='/#about'>About</HashLink>
                        <HashLink className='nav-link skills' style={{ textDecoration: "none" }} smooth to='/#skills'>Skills</HashLink>
                        <HashLink className='nav-link projects' style={{ textDecoration: "none" }} smooth to='/#projects'>Projects</HashLink>
                        <HashLink className='nav-link contact' style={{ textDecoration: "none" }} smooth to='/#contact'>Contact</HashLink>
                        <Link fontWeight={'bold'} borderRadius={'5px'} backgroundImage={'linear-gradient(to right, #01b395, #03bd69)'} fontFamily={'cursive'} className='nav-link resume' id='resume-button-1' href={Ritesh_Goswami_Resume} download={true} target='_blank'>
                            <Button backgroundImage={'linear-gradient(to right, #01b395, #03bd69)'} _hover={'none'}>
                                Resume
                            </Button>
                        </Link>
                    </Flex>
                </Flex>
            </nav>
        </Box>
    )
}

export default Navbar