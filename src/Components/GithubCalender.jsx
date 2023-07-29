import React from 'react'
import GitHubCalendar from 'react-github-calendar';
import { Image, Box, Heading } from '@chakra-ui/react';

const GithubCalender = () => {

    const gitCalender = (contributions) => {
        const today = new Date();
        const startTimestamp = new Date(
            today.getFullYear(),
            today.getMonth() - 12,
            1
        ).getTime();
        const endTimestamp =
            new Date(today.getFullYear(), today.getMonth() + 1, 1).getTime() - 1;

        return contributions.filter((day) => {
            const contributionTimestamp = new Date(day.date).getTime();

            return (
                contributionTimestamp >= startTimestamp &&
                contributionTimestamp <= endTimestamp
            );
        });
    };



    return (
        <Box cursor={"pointer"} className='react-activity-calender bg' textAlign={"center"} id='projects'
            color={"white"}>
            <Box className='bg' w={'100%'}>

                <Box display={"inline-block"}
                    padding="10px"
                    borderRadius={"8px"}
                    className="tech-skill-heading"
                    data-aos="flip-right"
                    marginBottom={{ base: "30px", sm: "50px" }}>
                    <Heading color={'gray.300'} size={"xl"}>Github Calender</Heading>
                </Box>
                <Box w="90%" m="auto" >
                    <GitHubCalendar username="ritesh22201"
                        blockSize={20}
                        transformData={gitCalender}>Github</GitHubCalendar>

                </Box>
            </Box>
            <Box className='bg' p={'30px'}>
                <Box display={"inline-block"}
                    padding="10px"
                    borderRadius={"8px"}
                    className="tech-skill-heading"
                    data-aos="flip-right"
                    marginBottom={{ base: "30px", sm: "50px" }}>
                    <Heading color={'gray.300'} mt={'30px'} size={"xl"}>Github Streaks</Heading>
                </Box>
                <Box w={{base : '92%', sm : '92%', md : '80%', lg : '50%', xl : '45%', '2xl' : '45%'}} m="auto">
                    <Image m={'auto'} id="github-streak-stats"
                        src="https://github-readme-streak-stats.herokuapp.com/?user=ritesh22201&theme=sea&hide_border=true&border_radius=10&date_format=j%20M%5B%20Y%5D&background=#a084ca"
                        alt="streak-stat" />
                </Box>
            </Box>

            <Box p={'30px'} bg={'black'}>
                <Box display={"inline-block"}
                    padding="10px"
                    borderRadius={"8px"}
                    className="tech-skill-heading"
                    data-aos="flip-right"
                    marginBottom={{ base: "30px", sm: "50px" }}>
                    <Heading mt={'30px'} color={'gray.300'} size={"xl"}>Github Stats-Card</Heading>
                </Box>


                <Box w={{base : '92%', sm : '92%', md : '80%', lg : '50%', xl : '45%', '2xl' : '45%'}} m="auto">
                    <Image m={'auto'} id="github-stats-card"
                        src="https://github-readme-stats.vercel.app/api?username=ritesh22201&show_icons=true&title_color=#4c3575&text_color=#4c3575&icon_color=#4c3575&bg_color=red&border_radius=10&border_color=#4c3575"
                        alt="stat-card" />
                </Box>
            </Box>

            <Box textAlign={'center'} w={'99%'} bg={'black'} p={'30px'} m={'auto'}>
                <Box display={"inline-block"}
                    padding="10px"
                    borderRadius={"8px"}
                    className="tech-skill-heading"
                    data-aos="flip-right"
                    marginBottom={{ base: "30px", sm: "50px" }}>
                    <Heading mt={'30px'} color={'gray.300'} size={"xl"}>Most Used Languages</Heading>
                </Box>
                <Box m={'auto'} w={{base : '92%', sm : '92%', md : '80%', lg : '55%', xl : '55%', '2xl' : '55%'}}>
                    <Image m={'auto'} id="github-top-langs" src="https://github-readme-stats.vercel.app/api/top-langs/?username=ritesh22201&title_color=4C3575&icon_color=#4c3575&text_color=#4c3575&bg_color=#a084ca&show_icons=true" alt='stat-top-lang' />
                </Box>
            </Box>
        </Box>
    )
}

export default GithubCalender;