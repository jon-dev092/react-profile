import { Box, Heading, Image, Text } from "@chakra-ui/react";
import ProfilePic from "../img/IMG_2246.JPG";

const AboutMe = () => {
    return (
        <Box className="aboutme">
            <Heading as="h2" size="xl" marginBottom={4}>
                About Me
            </Heading>
            <Image
                src={ProfilePic}
                alt="Jonathan at the marine corps ball with his wife Alejandra"
                borderRadius="full"
                boxSize="200px"
                objectFit="cover"
                marginBottom={4}
            />
            <Text fontSize="lg" lineHeight="1.5" marginBottom={4}>
                Central Florida based Front-end Developer looking to learn new skills and build a passion for coding. I come from a background in military marine aviation ordinance as well as hold a degree in welding technology. My aim is to bring my leadership skills and diligent work ethic into the field of technology where I can create software that changes the lives of individuals all over the globe. I hold many interests that comprise from anything related to martial arts, gaming, movies/music, and of course technology. I hope to continue to pursue the best version of myself except also be a passionate computer programmer. Don't hesitate to contact me by navigating to the "Contact Me" tab on top to send me an email; further examples of my work can be found on the "Projects" tab as well.
            </Text>
        </Box>
    );
};

export default AboutMe;
