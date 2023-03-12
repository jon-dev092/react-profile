import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Navbar from "./components/Navbar";
import AboutMe from './pages/AboutMe';
import Contact from './pages/Contact';
import Projects from './pages/Projects';
import Resume from './pages/Resume';
import NotFound from './pages/NotFound';
import Footer from './components/Footer';


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
            <Route path='*'>
              <NotFound /> 
            </Route>
          </Switch>
        </div>
        <Footer />    
      </div>
    </Router>
  );
}

export default App;
