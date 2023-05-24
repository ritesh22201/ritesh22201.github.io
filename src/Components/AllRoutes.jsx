import { Box } from '@chakra-ui/react'
import React from 'react';
import { Route } from 'react-router-dom';
import { Routes } from 'react-router-dom';
import Home from '../Pages/Home';
import About from '../Pages/About';
import Skills from '../Pages/Skills';
import Projects from '../Pages/Projects';
import Contact from '../Pages/Contact';

const AllRoutes = () => {
    return (
        <Box>
            <Routes>
                <Route path="/" element={<Home />} />

                <Route path="/#about" element={<About />} />

                <Route path="/#skills" element={<Skills />} />

                <Route path="/#projects" element={<Projects />} />

                <Route path="/#contact" element={<Contact />} />
            </Routes>
        </Box>
    )
}

export default AllRoutes;