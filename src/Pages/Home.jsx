import React from 'react';
import image from '../Assets/ritesh_resume_img.jpg';
import Ritesh_Goswami_Resume from '../Assets/Ritesh_Goswami_resume.pdf';

import {
  Box,
  Heading,
  Text,
  Flex,
  Image,
  Link,
  Button,
} from "@chakra-ui/react";
import { useEffect } from "react";
import Typed from "typed.js";
import AOS from "aos";
import "aos/dist/aos.css";

import "../Css/home.css";
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';

const Home = () => {
  useEffect(() => {
    AOS.init({ delay: 300 });
  }, []);

  const openResume = () => {
    window.open('https://drive.google.com/file/d/1ap8ybmhHtW6zwl64GlfcDit9dScN9lWp/view?usp=sharing');
  }

  useEffect(() => {
    const typed = new Typed(".text", {
      strings: ["MERN Stack Developer", "Effective Problem Solver"],
      typeSpeed: 100,
      backSpeed: 100,
      backDelay: 1000,
      loop: true,
      showCursor: false,
    });

    return () => {
      typed.destroy();
    };
  }, []);


  return (
    <>
      <Flex
        flexDirection={{
          base: "column",
          sm: "column",
          md: "column",
          lg: "row",
          xl: "row",
          "2xl": "row",
        }}
        bg={"black"}
        justifyContent={"space-around"}
        alignItems={"center"}
        gap="60px"
        id="home"
        p="40px"
        color={"white"}
        border="none"
      >
        <Box width={{ base: '100%', sm: '100%', md: '100%', lg: '40%', xl: '40%', '2xl': '40%' }}>
          <Box id="home-content">
            <Heading color={'gray.300'} mt="10px" size="lg" as="h3" className="head">
              Hey, I'm
            </Heading>
            <Heading mt="10px" bgGradient={'linear-gradient(to right, gray.300, gray.200)'} bgClip='text' size="2xl" as="h1" id="user-detail-name">
              Ritesh Goswami
            </Heading>
            <Heading mt="10px" size="lg" as="h3">
              <span className="text"></span>
              <span style={{ color: "#03bd69", marginLeft: "3px" }}>|</span>
            </Heading>
            <div className='home-sci'>
              <a href="https://www.linkedin.com/in/riteshinfo/" target='_blank'><FaLinkedin /></a>
              <a href="https://twitter.com/Riteshgoswami3" target='_blank'><FaTwitter /></a>
              <a href="https://github.com/ritesh22201" target='_blank'><FaGithub /></a>
            </div>
            <Link
              mt="10px"
              fontWeight="bold"
              borderRadius="5px"
              backgroundImage="linear-gradient(to right, #01b395, #03bd69)"
              id="resume-link-2"
              href={Ritesh_Goswami_Resume}
              download={true}
              target="_blank"
            >
              <Box className="home-icon">
                <Button
                  mt="30px"
                  id="resume-button-2"
                  onClick={openResume}
                  _hover={'none'}
                  className="home-resume"
                  backgroundImage={'linear-gradient(to right, #01b395, #03bd69)'}
                >
                  Download Resume
                </Button>
              </Box>
            </Link>
          </Box>
        </Box>

        <Image
          src={image}
          className="home-img"
          boxShadow="outline"
          borderColor={"#76446b"}
          alt="myPic"
          width={{ base: '60%', sm: '60%', md: '60%', lg: '33%', xl: '33%', '2xl': '33%' }}
          height="60%"
          borderRadius="50%"
        />
      </Flex>
    </>
  );
};

export default Home;