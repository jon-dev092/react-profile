import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Navbar from "./components/Navbar";
import Footer from './components/Footer';
import AboutMe from './pages/AboutMe';
import Contact from './pages/Contact';
import Projects from './pages/Projects';
import Resume from './pages/Resume';

// Renders order of pages and theyre content to be posted in my main index.js 
// Uses Switch from react to set components to be viewed at all times and pages apart 
function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className='content'>
          <Switch>
            <Route exact path='/'>
              <AboutMe /> 
            </Route>
            <Route path='/projects'>
              <Projects /> 
            </Route>
            <Route path='/contact'>
              <Contact /> 
            </Route>
            <Route path='/resume'>
              <Resume /> 
            </Route>
          </Switch>
        </div>
        <Footer />    
      </div>
    </Router>
  );
}

export default App;
