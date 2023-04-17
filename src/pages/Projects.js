import { React } from "react";
import { Box, VStack, Heading, Image, Text, Link } from "@chakra-ui/react";
import workout2 from "../img/workout2.jpg";
import chart from "../img/chart.jpg";
import noteTaker from "../img/note-taker.png";
import eCommerce from "../img/ecommerce.jpg";
import employeeTracker from "../img/employee-tracker.jpg";
import noPms from "../img/NoPMS-screenshot.png";

const Projects = () => {
  return (
    <VStack spacing={10} alignItems="center">
      <Heading>Projects</Heading>
      <VStack spacing={6} alignItems="center" w="100%">
        {[
          {
            src: workout2,
            alt: "Couple doing a high intensity workout with ropes at the gym",
            title: "Grynd-Fitness App",
            description: "Lorem ipsum",
            repo: "https://github.com/jon-dev092/grynd-app",
            live: "https://jon-dev092.github.io/grynd-app/",
          },
          {
            src: chart,
            alt: "chart displaying finance review and graphs",
            title: "Better have my money",
            description: "Lorem ipsum",
            repo: "https://github.com/marissa-a-darr/project2-collab",
            live: "https://evening-beyond-91031.herokuapp.com/",
          },
          {
            src: noPms,
            alt: "NoPMS project logo",
            title: "NoPMS Project Management System",
            description: "Lorem ipsum",
            repo: "https://github.com/Ale-Miret/NoPMS",
            live: "https://calm-waters-92102.herokuapp.com/",
          },
          {
            src: eCommerce,
            alt: "individual who seems to be online shopping with a smartphone on the go",
            title: "E-Commerce Backend App",
            description: "Lorem ipsum",
            repo: "https://github.com/jon-dev092/E-Commerce-Challenge",
            live: null,
          },
          {
            src: noteTaker,
            alt: "screen shot of deployed note taker tool application",
            title: "Note Taker Tool",
            description: "Lorem ipsum",
            repo: "https://github.com/jon-dev092/note-taker-tool",
            live: "https://note-taker-tool.herokuapp.com/https://note-taker-tool.herokuapp.com/",
          },
          {
            src: employeeTracker,
            alt: "two co-workers focused on a computer screen displaying charts",
            title: "Employee Tracker Backend App",
            description: "Lorem ipsum",
            repo: "https://github.com/jon-dev092/empolyeeTracker",
            live: null,
          },
        ].map(({ src, alt, title, description, repo, live }) => (
          <Box borderWidth="1px" borderRadius="lg" padding={4} boxShadow="md" w="100%">
            <Image src={src} alt={alt} borderRadius="md" marginBottom={4} />
            <Heading as="h2" size="md" marginBottom={2}>
              {title}
            </Heading>
            <Text marginBottom={4}>{description}</Text>
            <Link href={repo} isExternal>
              Github Repo
            </Link>
            {live && (
              <>
                <br />
                <Link href={live} isExternal>
                  Live Application
                </Link>
              </>
            )}
          </Box>
        ))}
      </VStack>
    </VStack>
  );
};

export default Projects;
