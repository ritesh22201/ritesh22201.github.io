import { Box, Image, Heading, Link, Text, Flex, Grid, Center } from '@chakra-ui/react'
import React, { useEffect } from 'react'
import techcube from '../Assets/tech_cube.png';
import myntra from '../Assets/myntra-landing.png'
import dashDonation from '../Assets/dashDonation.png'
import todos from '../Assets/fullStackTodos.png'
import { BiFolder, BiCopy, BiLogoFirebase } from 'react-icons/bi'
import { FaGithub, FaReact, FaHtml5 } from 'react-icons/fa'
import { TbJson, TbWorld } from 'react-icons/tb'
import { FaCss3Alt } from 'react-icons/fa'
import { SiChakraui, SiFirebase, SiJavascript, SiMongodb, SiNodedotjs, SiRazorpay, SiRedux, SiTypescript } from 'react-icons/si'
import AOS from "aos";

const Projects = () => {

  useEffect(() => {
    AOS.init();
  }, [])

  return (
    <Box cursor={"pointer"} textAlign={"center"} id='projects' bg={'black'}
      color={"white"}
    >
      <Heading
        className="projects"
        display={"inline-block"}
        padding="10px"
        borderRadius={"8px"}
        color={'gray.300'}
        data-aos="fade-right">My Projects</Heading>

      <Grid>
        <Box data-aos="flip-up" id="project-sec" _hover={{ bg: "#162a33" }} borderRadius={"10px"} p="20px" w="80%" m="40px auto" border={"1px inset"} className='project-card'>
          <Flex gap={'30px'} alignItems={'center'} justifyContent={"space-evenly"} direction={{ base: 'column-reverse', sm: 'column-reverse', md: 'column-reverse', lg: 'row', xl: 'row', '2xl': 'row' }}>
            <Box w={{ base: '100%', sm: '100%', md: '100%', lg: '100%', xl: '100%', '2xl': '100%' }} >
              <Flex justifyContent={"space-between"}>
                <BiFolder style={{ fontSize: "40px", color: "" }} />
                <Box>
                  <Flex>
                    <Link target='_blank' href="https://github.com/ritesh22201/Myntra.com-clone" className='project-github-link'><FaGithub style={{ fontSize: "40px" }} /></Link>
                    <Link target='_blank' href="https://myntra-clone-rho.vercel.app/" className='project-deployed-link'> <TbWorld style={{ fontSize: "40px", marginLeft: "5px" }} /></Link>
                  </Flex>
                </Box>
              </Flex>
              <Heading textAlign={"left"} size={'md'} mt="10px" className='project-title'>Myntra.com Clone</Heading>
              <Text className='project-description' textAlign={"left"} mt="10px">
                A clone of the popular online fashion and lifestyle e-commerce platform, Myntra.com, built with React. This project is designed to showcase my skills in web development, particularly front-end technologies, and demonstrate my ability to recreate a complex web application like Myntra.
              </Text>
              <Text mt='10px' textAlign={"left"}>Data fetched from JSON server <br />React.js | Redux | Firebase | Razorpay | JSON Server</Text>

              <Box mt="30px" className='project-tech-stack'>
                <Flex justifyContent={'space-between'} textAlign={"left"} alignItems={"center"} >
                  <Text><FaReact style={{ fontSize: "40px", color: "#00B0FF" }} /> </Text>
                  <Text><SiRedux style={{ fontSize: "40px", color: "#764abc" }} /></Text>
                  <Text><SiFirebase style={{ fontSize: "40px", color: "#fcca3f" }} /></Text>
                  <Text><SiRazorpay style={{ fontSize: "40px", color: "#3395ff" }} /></Text>
                  <Text><TbJson style={{ fontSize: "50px", color: "#2e6ff2" }} /></Text>
                </Flex>
              </Box>
            </Box>
            <Box h='290px' w={'100%'}>
              <Image w="100%" src={myntra} />
            </Box>
          </Flex>
        </Box>
        <Box data-aos="flip-up" id="project-sec" _hover={{ bg: "#162a33" }} borderRadius={"10px"} p="20px" w="80%" m="40px auto" border={"1px inset"} className='project-card'>
          <Flex gap={'30px'} justifyContent={"space-evenly"} direction={{ base: 'column-reverse', sm: 'column-reverse', md: 'column-reverse', lg: 'row', xl: 'row', '2xl': 'row' }}>

            <Box w={{ base: '100%', sm: '100%', md: '100%', lg: '100%', xl: '100%', '2xl': '100%' }} >
              <Flex justifyContent={"space-between"}>

                <BiFolder style={{ fontSize: "40px", color: "#388E3C" }} />
                <Box>
                  <Flex>
                    <Link target='_blank' href="https://github.com/ritesh22201/melted-lace-627" className='project-github-link'><FaGithub style={{ fontSize: "40px" }} /></Link>
                    <Link target='_blank' href="https://dash-donation-three.vercel.app/" className='project-deployed-link'> <TbWorld style={{ fontSize: "40px", marginLeft: "5px" }} /></Link>
                  </Flex>
                </Box>

              </Flex>
              <Heading textAlign={"left"} size={'md'} mt="10px" className='project-title'>Dash Donation(Charity Hero Clone)</Heading>
              <Text className='project-description' textAlign={"left"} mt="10px">
                Dash Donation is a charitable (Non profitable organization) website which provides food, medicines, education and relief for victims of Ukraine war. It runs with the help of many partner organizations which work together.
              </Text>
              <Text textAlign={"left"}>Built backend side of all the pages except admin side</Text>
              <Text textAlign={"left"}>Developed the payment page ui and functionality</Text>

              <Box w={'100%'} mt="30px" className='project-tech-stack'>
                <Flex w={'100%'} justifyContent={'space-between'} >
                  <Text><FaReact style={{ fontSize: "40px", color: "#00B0FF" }} /></Text>
                  <Text><SiRedux style={{ fontSize: "40px", color: "#764abc" }} /></Text>
                  <Text><SiNodedotjs style={{ fontSize: "40px", color: "#539e43" }} /></Text>
                  <Text><SiMongodb style={{ fontSize: "40px", color: "#4caa3d" }} /></Text>
                </Flex>
              </Box>
            </Box>
            <Box w={{ base: '100%', sm: '100%', md: '100%', lg: '100%', xl: '100%', '2xl': '100%' }}>
              <Image w="100%" src={dashDonation} />
            </Box>
          </Flex>
        </Box>
        <Box data-aos="flip-up" id="project-sec" _hover={{ bg: "#162a33" }} borderRadius={"10px"} p="20px" w="80%" m="40px auto" border={"1px inset"} className='project-card'>
          <Flex gap={'30px'} justifyContent={"space-evenly"} direction={{ base: 'column-reverse', sm: 'column-reverse', md: 'column-reverse', lg: 'row', xl: 'row', '2xl': 'row' }}>
            <Box w={{ base: '100%', sm: '100%', md: '100%', lg: '100%', xl: '100%', '2xl': '100%' }} >
              <Flex justifyContent={"space-between"}>
                <BiFolder style={{ fontSize: "40px", color: "" }} />
                <Box>
                  <Flex>
                    <Link target='_blank' href="https://github.com/ritesh22201/melodious-rabbit3105" className='project-github-link'><FaGithub style={{ fontSize: "40px" }} /></Link>
                    <Link target='_blank' href="https://full-stack-todos.vercel.app/login" className='project-deployed-link'> <TbWorld style={{ fontSize: "40px", marginLeft: "5px" }} /></Link>
                  </Flex>
                </Box>
              </Flex>
              <Heading textAlign={"left"} size={'md'} mt="10px" className='project-title'>Full Stack Todo App</Heading>
              <Text className='project-description' textAlign={"left"} mt="10px">
                A full-stack todo app with all the required functionalities. Built with the Tech-Stacks like (React.js, Redux.js and TypeScript) for Front-end, (Node.js and Express.js) for Back-end, MongoDB for data base and Chakra UI for User Interface library.
              </Text>
              <Text textAlign={"left"}>Data fetched from MongoDB server <br /> Different routes created with react-router</Text>

              <Box mt="30px" className='project-tech-stack'>
                <Flex justifyContent={'space-between'} textAlign={"left"} alignItems={"center"} >
                  <Text><FaReact style={{ fontSize: "40px", color: "#00B0FF" }} /> </Text>
                  <Text><SiRedux style={{ fontSize: "40px", color: "#764abc" }} /></Text>
                  <Text><SiTypescript style={{ fontSize: "40px", color: "#0074c9" }} /></Text>
                  <Text><SiNodedotjs style={{ fontSize: "40px", color: "#539e43" }} /></Text>
                  <Text><SiMongodb style={{ fontSize: "40px", color: "#4caa3d" }} /></Text>
                </Flex>
              </Box>
            </Box>
            <Box w={{ base: '100%', sm: '100%', md: '100%', lg: '100%', xl: '100%', '2xl': '100%' }}>
              <Image w="100%" src={todos} />
            </Box>
          </Flex>
        </Box>

        <Box data-aos="flip-up" id="project-sec" _hover={{ bg: "#162a33" }} borderRadius={"10px"} p="20px" w="80%" m="40px auto" border={"1px inset"} className='project-card'>
          <Flex gap={'30px'} justifyContent={"space-evenly"} direction={{ base: 'column-reverse', sm: 'column-reverse', md: 'column-reverse', lg: 'row', xl: 'row', '2xl': 'row' }}>
            <Box w={{ base: '100%', sm: '100%', md: '100%', lg: '100%', xl: '100%', '2xl': '100%' }} >
              <Flex justifyContent={"space-between"}>
                <BiFolder style={{ fontSize: "40px", color: "" }} />
                <Box>
                  <Flex>
                    <Link target='_blank' href="https://github.com/ErGopiVishwakarma/difficult-wire-2490" className='project-github-link'><FaGithub style={{ fontSize: "40px" }} /></Link>
                    <Link target='_blank' href="https://tech-cube-ergopivishwakarma.vercel.app/" className='project-deployed-link'> <TbWorld style={{ fontSize: "40px", marginLeft: "5px" }} /></Link>
                  </Flex>
                </Box>
              </Flex>
              <Heading textAlign={"left"} size={'md'} mt="10px" className='project-title'>Tech Cube</Heading>
              <Text className='project-description' textAlign={"left"} mt="10px">
                Tech cube is an E-commerce website which sells electronic gadgets and products such as mobile, laptop, watch, TV etc.
              </Text>
              {/* <Text textAlign={"left"}>Website contains both light mode and dark mode which user can use accordingly</Text> */}
              <Text textAlign={"left"}>LightAndDarkMode</Text>
              <Text textAlign={"left"}>Data fetched from json-server <br /> Different routes created with react-router</Text>

              <Box mt="30px" className='project-tech-stack'>
                <Flex justifyContent={'space-between'} textAlign={"left"} alignItems={"center"} >
                  <Text><FaReact style={{ fontSize: "40px", color: "#00B0FF" }} /> </Text>
                  <Text><SiRedux style={{ fontSize: "40px", color: "#764abc" }} /></Text>
                  <Text><SiChakraui style={{ fontSize: "40px", color: "#3fc3bd" }} /></Text>
                  <Text><TbJson style={{ fontSize: "45px", color: "#2e6ff2" }} /></Text>
                </Flex>
              </Box>
            </Box>
            <Box w={{ base: '100%', sm: '100%', md: '100%', lg: '100%', xl: '100%', '2xl': '100%' }}>
              <Image w="100%" src={techcube} />
            </Box>
          </Flex>
        </Box>
      </Grid>
    </Box>
  )
}

export default Projects;