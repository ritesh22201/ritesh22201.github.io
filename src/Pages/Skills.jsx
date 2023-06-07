import React from "react";
import { Box, Grid, Heading, Image } from "@chakra-ui/react";
import html from "../Assets/TechStacks/html-5.png";
import css from "../Assets/TechStacks/css-3.png";
import js from "../Assets/TechStacks/js2.png";
import react from "../Assets/TechStacks/reactjs.webp";
import redux1 from '../Assets/TechStacks/redux1.png'
import chakra from '../Assets/TechStacks/chakra.jpg'
import npm from '../Assets/TechStacks/npm.png'
import vscode from '../Assets/TechStacks/vscode5.png'
import postman from '../Assets/TechStacks/postman-logo-0087CA0D15-seeklogo.com.png'
import node from '../Assets/TechStacks/nodejs.png'
import { FaNodeJs, FaReact } from "react-icons/fa";
import { SiChakraui, SiRedux } from "react-icons/si";

const Skills = () => {

  return (
    <Box
      id="skills"
      bg={"black"}
      color={"white"}
      textAlign={"center"}
      p={"30px"}
    >
      <Heading
        className="tech-stacks"
        display={"inline-block"}
        padding="10px"
        borderRadius={"8px"}
        data-aos="fade-right"
       
      >
        Skills
      </Heading>
      <Grid
        templateColumns={{ base: "repeat(4,1fr)", lg: "repeat(5,1fr)" }}
        rowGap="60px"
        margin="50px auto"
        alignItems={{ base: "center", sm: "center", md: "center" }}
        marginLeft="10%"
      >
        <Box
          id="html"
          p="10px"
          width={{ base: "90%", sm: "60%", md: "40%", lg: "40%" }}
          className="skills-card"
          
        >
          <Image m="auto" width="100%" src={html} className="skills-card-img" />
          <Heading size={"md"} color={"#ba5870"} className='skills-card-name' ></Heading>
        </Box>
        <Box
          id="css"
          p="10px"
          width={{ base: "90%", sm: "60%", md: "40%", lg: "40%" }}
          className="skills-card"
        >
          <Image m="auto" width="100%" src={css} className="skills-card-img" />
          <Heading className='skills-card-name' ></Heading>
        </Box>
        <Box
          id="js"
          p="10px"
          width={{ base: "90%", sm: "60%", md: "40%", lg: "40%" }}
          className="skills-card"
        >
          <Image m="auto"  width="100%" src={js} className="skills-card-img" />
         <Heading className='skills-card-name' ></Heading>
        </Box>
        <Box
          id="react"
          p="10px"
          width={{ base: "90%", sm: "60%", md: "40%", lg: "40%" }}
          className="skills-card"
        >
          {/* <Image m="auto" width="100%" src={react} className="skills-card-img" /> */}
          <FaReact className="skills-card-img" fontSize={'65px'} color="#00b0ff"/>
          <Heading className='skills-card-name' ></Heading>
        </Box>
        <Box  id="redux"
          p="10px"
          width={{ base: "90%", sm: "60%", md: "40%", lg: "40%" }} className="skills-card">
          {/* <Image m="auto" width="100%" src={redux1} className="skills-card-img" /> */}
          <SiRedux className="skills-card-img" fontSize={'65px'} color="#764abc"/>
          <Heading className="skills-card-name"></Heading>
        </Box>
        <Box id="chakra"
          p="10px" width={{ base: "90%", sm: "60%", md: "40%", lg: "40%" }} className="skills-card">
          {/* <Image  m="auto" width="100%" src={chakra} className="skills-card-img" /> */}
          <SiChakraui className="skills-card-img" fontSize={'65px'} color="#3fc3bd" />
          <Heading className="skills-card-name"></Heading>
        </Box>
        <Box id="npm"
          p="10px" width={{ base: "90%", sm: "60%", md: "40%", lg: "40%" }} className="skills-card">
          <Image m="auto" width="100%" src={npm} className="skills-card-img" />
          <Heading className="skills-card-name"></Heading>
        </Box>

        <Box id="vscode"
          p="10px" width={{ base: "90%", sm: "60%", md: "40%", lg: "40%" }} className="skills-card">
          <Image  m="auto" width="100%" src={vscode} className="skills-card-img" />
          <Heading className="skills-card-name"></Heading>
        </Box>
        <Box id="postman"
          p="10px" width={{ base: "90%", sm: "60%", md: "40%", lg: "40%" }} className="skills-card">
          <Image  m="auto" width="100%" src={postman} className="skills-card-img" />
          <Heading className="skills-card-name"></Heading>
        </Box>

        <Box id="node"
          p="10px" width={{ base: "90%", sm: "60%", md: "40%", lg: "40%" }} className="skills-card">
          {/* <Image  m="auto" width="100%" src={node} className="skills-card-img" /> */}
          <FaNodeJs className="skills-card-img" fontSize={'65px'} color="#539e43" />
          <Heading className="skills-card-name"></Heading>
        </Box>
      </Grid>
    </Box>
  );
};

export default Skills;