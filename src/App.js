// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
// import { ChakraProvider, Flex, Box } from '@chakra-ui/react'


// import Navbar from "./components/Navbar";
// import Footer from './components/Footer';
// import AboutMe from './pages/AboutMe';
// import Contact from './pages/Contact';
// import Projects from './pages/Projects';
// import Resume from './pages/Resume';

// // Renders order of pages and theyre content to be posted in my main index.js 
// // Uses Switch from react to set components to be viewed at all times and pages apart 
// function App() {
//   return (
//     <ChakraProvider>
//       <Router>
//         <div className="App">
//           <Navbar />
//           <div className='content'>
//             <Routes>
//               <Route exact path='/react-profile' element={<AboutMe />} />
//               <Route path='/projects' element={<Projects />} />
//               <Route path='/contact'element={<Contact />} />
//               <Route path='/resume'element={<Resume />} />
//             </Routes>
//           </div>
//           <Footer />    
//         </div>
//       </Router>
//     </ChakraProvider>
//   );
// }

// export default App;


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
