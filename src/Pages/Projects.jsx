import { Box, Image, Heading, Link, Text, Flex, Grid, Center } from '@chakra-ui/react'
import React, { useEffect } from 'react'
import techcube from '../Assets/tech_cube.png';
import indianEagle from '../Assets/indian_eagle.png'
import { BiFolder, BiCopy } from 'react-icons/bi'
import { FaGithub, FaReact, FaHtml5 } from 'react-icons/fa'
import { TbJson } from 'react-icons/tb'
import { FaCss3Alt } from 'react-icons/fa'
import { SiChakraui, SiJavascript } from 'react-icons/si'
// import {BiLogoHtml5} from 'react-icons/bi'
import AOS from "aos";

const Projects = () => {

  useEffect(() => {
    AOS.init();
  }, [])

  return (
    <Box cursor={"pointer"} textAlign={"center"} id='projects' className='bg'
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
        <Box data-aos="zoom-in" id="project-sec" _hover={{ bg: "#162a33" }} borderRadius={"10px"} p="20px" w="80%" m="40px auto" border={"1px inset"} className='project-card'>
          <Flex justifyContent={"space-evenly"}>
            <Box w="40%" >
              <Flex justifyContent={"space-between"}>
                <BiFolder style={{ fontSize: "40px", color: "#388E3C" }} />
                <Box>
                  <Flex>
                    <Link href="https://github.com/ErGopiVishwakarma/difficult-wire-2490" className='project-github-link'><FaGithub style={{ fontSize: "40px" }} /></Link>
                    <Link href="https://tech-cube-ten.vercel.app/" className='project-deployed-link'> <BiCopy style={{ fontSize: "40px", marginLeft: "5px" }} /></Link>
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
                <Flex textAlign={"left"} alignItems={"center"} >
                  <Text><FaReact style={{ fontSize: "40px", color: "#00B0FF" }} /> </Text>
                  <Text m="0px 20px"><SiChakraui style={{ fontSize: "40px", color: "#3fc3bd" }} /></Text>
                  <Text><TbJson style={{ fontSize: "45px", color: "#2e6ff2" }} /></Text>
                </Flex>
              </Box>
            </Box>
            <Box w="50%">
              <Image w="100%" src={techcube} />
            </Box>
          </Flex>
        </Box>

        <Box id="project-sec" _hover={{ bg: "#162a33" }} borderRadius={"10px"} p="20px" w="80%" m="40px auto" border={"1px inset"} className='project-card'>
          <Flex justifyContent={"space-evenly"}>

            <Box w="40%" >
              <Flex justifyContent={"space-between"}>

                <BiFolder style={{ fontSize: "40px", color: "#388E3C" }} />
                <Box>
                  <Flex>
                    <Link href="https://github.com/ritesh22201/spicy-nerve-9354" className='project-github-link'><FaGithub style={{ fontSize: "40px" }} /></Link>
                    <Link href="https://remarkable-starlight-9a785a.netlify.app/" className='project-deployed-link'> <BiCopy style={{ fontSize: "40px", marginLeft: "5px" }} /></Link>
                  </Flex>
                </Box>

              </Flex>
              <Heading textAlign={"left"} size={'md'} mt="10px" className='project-title'>American Eagle Clone</Heading>
              <Text className='project-description' textAlign={"left"} mt="10px">
                It is a clone of an E-Commerce website called americanEagle.com, which is generally sells apparel products like (shirts, jeans, trousers, etc) for both the genders.
              </Text>
              <Text textAlign={"left"}>Built Admin page.</Text>
              <Text textAlign={"left"}>Developed the product page with add to cart functionality</Text>

              <Box mt="30px" className='project-tech-stack'>
                <Flex textAlign={"left"} >
                  <Text><FaHtml5 style={{ fontSize: "40px", color: "coral" }} /></Text>
                  <Text m="0px 15px"><FaCss3Alt style={{ fontSize: "40px", color: "blue" }} /></Text>
                  <Text><SiJavascript style={{ fontSize: "40px", color: "#FDD835" }} /></Text>
                </Flex>
              </Box>
            </Box>
            <Box w="50%">
              <Image w="100%" src={indianEagle} />
            </Box>
          </Flex>
        </Box>

        <Box data-aos="flip-up" id="project-sec" _hover={{ bg: "#162a33" }} borderRadius={"10px"} p="20px" w="80%" m="40px auto" border={"1px inset"} className='project-card'>
          <Flex justifyContent={"space-evenly"}>

            <Box w="40%" >
              <Flex justifyContent={"space-between"}>

                <BiFolder style={{ fontSize: "40px", color: "#388E3C" }} />
                <Box>
                  <Flex>
                    <Link href="https://github.com/ritesh22201/spicy-nerve-9354" className='project-github-link'><FaGithub style={{ fontSize: "40px" }} /></Link>
                    <Link href="https://remarkable-starlight-9a785a.netlify.app/" className='project-deployed-link'> <BiCopy style={{ fontSize: "40px", marginLeft: "5px" }} /></Link>
                  </Flex>
                </Box>

              </Flex>
              <Heading textAlign={"left"} size={'md'} mt="10px" className='project-title'>American Eagle Clone</Heading>
              <Text className='project-description' textAlign={"left"} mt="10px">
                It is a clone of an E-Commerce website called americanEagle.com, which is generally sells apparel products like (shirts, jeans, trousers, etc) for both the genders.
              </Text>
              <Text textAlign={"left"}>Built Admin page.</Text>
              <Text textAlign={"left"}>Developed the product page with add to cart functionality</Text>

              <Box mt="30px" className='project-tech-stack'>
                <Flex textAlign={"left"} >
                  <Text><FaHtml5 style={{ fontSize: "40px", color: "coral" }} /></Text>
                  <Text m="0px 15px"><FaCss3Alt style={{ fontSize: "40px", color: "blue" }} /></Text>
                  <Text><SiJavascript style={{ fontSize: "40px", color: "#FDD835" }} /></Text>
                </Flex>
              </Box>
            </Box>
            <Box w="50%">
              <Image w="100%" src={indianEagle} />
            </Box>
          </Flex>
        </Box>

        <Box data-aos="flip-up" id="project-sec" _hover={{ bg: "#162a33" }} borderRadius={"10px"} p="20px" w="80%" m="40px auto" border={"1px inset"} className='project-card'>
          <Flex justifyContent={"space-evenly"}>

            <Box w="40%" >
              <Flex justifyContent={"space-between"}>

                <BiFolder style={{ fontSize: "40px", color: "#388E3C" }} />
                <Box>
                  <Flex>
                    <Link href="https://github.com/ritesh22201/spicy-nerve-9354" className='project-github-link'><FaGithub style={{ fontSize: "40px" }} /></Link>
                    <Link href="https://remarkable-starlight-9a785a.netlify.app/" className='project-deployed-link'> <BiCopy style={{ fontSize: "40px", marginLeft: "5px" }} /></Link>
                  </Flex>
                </Box>

              </Flex>
              <Heading textAlign={"left"} size={'md'} mt="10px" className='project-title'>American Eagle Clone</Heading>
              <Text className='project-description' textAlign={"left"} mt="10px">
                It is a clone of an E-Commerce website called americanEagle.com, which is generally sells apparel products like (shirts, jeans, trousers, etc) for both the genders.
              </Text>
              <Text textAlign={"left"}>Built Admin page.</Text>
              <Text textAlign={"left"}>Developed the product page with add to cart functionality</Text>

              <Box mt="30px" className='project-tech-stack'>
                <Flex textAlign={"left"} >
                  <Text><FaHtml5 style={{ fontSize: "40px", color: "coral" }} /></Text>
                  <Text m="0px 15px"><FaCss3Alt style={{ fontSize: "40px", color: "blue" }} /></Text>
                  <Text><SiJavascript style={{ fontSize: "40px", color: "#FDD835" }} /></Text>
                </Flex>
              </Box>
            </Box>
            <Box w="50%">
              <Image w="100%" src={indianEagle} />
            </Box>
          </Flex>
        </Box>

        {/* 
      <Box className='project-card'>
         <Image src='' />
         <Heading size={'md'} className='project-title'></Heading>
         <Text className='project-description'></Text>
         <Box className='project-tech-stack'></Box>
         <Link className='project-github-link'></Link>
         <Link className='project-deployed-link'></Link>
      </Box>   */}
      </Grid>



      {/* <Center>

        <Box bg="" p="10px" className='react-activity-calender'>
          <Box display={"inline-block"}
            padding="10px"
            bgGradient="linear(to-r, #1a9a7c, #5c0c5c)"
            borderRadius={"8px"}
            className="tech-skill-heading"
            data-aos="flip-right"
            marginBottom={{ base: "30px", sm: "50px" }}>
            <Heading>Github Calender</Heading>
          </Box>
          <Flex id="git-stat" flexDirection={{ base: "column", sm: "column", md: "column", lg: "row" }} width="80%" margin="auto" gap={10}>
            <Box margin={"auto"} data-aos="fade-right">
              <Image id='github-streak-stats' src='https://camo.githubusercontent.com/bc015642e9f14128badfaea723888804da3bb8f05e023d3bb43fdcaf23455e0d/68747470733a2f2f6769746875622d726561646d652d73747265616b2d73746174732e6865726f6b756170702e636f6d2f3f757365723d73686172766172696875706172652d333639267468656d653d6461726b26686964655f626f726465723d66616c7365' alt="streak-stat" />
            </Box>
            <Box margin={"auto"} data-aos="fade-right">
              <Image id='github-stats-card' src='https://camo.githubusercontent.com/390b07dc65292a3d6b66a08a793bdf36e96849ba0ff9f913afd2bdd064562938/68747470733a2f2f6769746875622d726561646d652d73746174732e76657263656c2e6170702f6170693f757365726e616d653d73686172766172696875706172652d333639267468656d653d6461726b26686964655f626f726465723d66616c736526696e636c7564655f616c6c5f636f6d6d6974733d66616c736526636f756e745f707269766174653d66616c7365' alt="stat-card" />
            </Box>
            <Box margin={"auto"} data-aos="fade-right">
              <Image id='github-top-langs' src='https://camo.githubusercontent.com/b8c2ccd6e52137d94728375c1de96d158c024375acba887f2593cd55edd578e4/68747470733a2f2f6769746875622d726561646d652d73746174732e76657263656c2e6170702f6170692f746f702d6c616e67732f3f757365726e616d653d73686172766172696875706172652d333639267468656d653d6461726b26686964655f626f726465723d66616c736526696e636c7564655f616c6c5f636f6d6d6974733d66616c736526636f756e745f707269766174653d66616c7365266c61796f75743d636f6d70616374' alt="stat-top-lang" />
            </Box>
          </Flex>
        </Box>
      </Center> */}
    </Box>
  )
}

export default Projects;