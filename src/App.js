import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ChakraProvider, Flex, Box } from "@chakra-ui/react";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import AboutMe from "./pages/AboutMe";
import Contact from "./pages/Contact";
import Projects from "./pages/Projects";
import Resume from "./pages/Resume";

function App() {
  return (
    <ChakraProvider>
      <Router>
        <Flex direction="column" minH="100vh" fontFamily="Quicksand" textAlign="center">
          <Navbar />
          <Box flex="1" maxWidth="600px" mx="auto" px={4} py={8}>
            <Routes>
              <Route exact path="/react-profile" element={<AboutMe />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/resume" element={<Resume />} />
            </Routes>
          </Box>
          <Footer />
        </Flex>
      </Router>
    </ChakraProvider>
  );
}

export default App;
