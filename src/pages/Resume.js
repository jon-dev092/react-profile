import resume from '../img/resume.png'

// Resume for employers to review
// click the resume on the browser to see the full version
const Resume = () => {
    return ( 
        <div className="resume">
            <h2>Resume</h2>
            <p>Check out my full resume by clicking on it!</p>
            <br />
            <br />
            <a href="https://docs.google.com/document/d/17wFUE_J7G4UNaWl7lPgwT1DmCKKRlc-isAnrJjyq2iU/edit"><img src={resume} alt="jonathan's resume" /></a>
        </div>
     );
}
 
export default Resume;