import ProfilePic from "../img/IMG_2246.JPG"

// home page where my about me is displayed
const AboutMe = () => {
    return ( 
        <div className="aboutme">
            <h2>About Me</h2>
            <img src={ProfilePic} alt="Jonathan at the marine corps ball with his wife Alejandra" />
            <p>Central Florida based Front-end Developer looking to learn new skills and build a passion for coding. 
                I come from a back-ground in military marine avitaion ordinance aswell as hold a degree in welding technology. 
                My aim is to bring my leadership skills and dilligent work ethic into the field of technology where I can create software that changes the lives of individuals all over the globe. 
                I hold many interests that comprise from anything related to martial arts, gaming, movies/music, and ofcourse technology. 
                I hope to continue to persue the best version of myself except also be a passionate computer programmer. Examples of my work can be found on the "Projects" tab on top!</p>
        </div>
     );
}

export default AboutMe;
