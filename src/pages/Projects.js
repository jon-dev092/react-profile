// import { React } from "react";
// import '../styles/projects.css'
// import workout2 from '../img/workout2.jpg'
// import chart from '../img/chart.jpg'
// import noteTaker from '../img/note-taker.png'
// import eCommerce from '../img/ecommerce.jpg'
// import employeeTracker from '../img/employee-tracker.jpg'
// import noPms from '../img/NoPMS-screenshot.png'

// // list of projects with images, descriptions and links to visable applications
// const Projects = () => {
//     return (
//         <div className="projects">
//             <h1>Projects</h1>
//             <div>
//                 <div>
//                     <img src={workout2} alt="Couple doing a high intensity workout with ropes at the gym" />
//                     <h2>Grynd-Fitness App</h2>
//                     <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quaerat assumenda veniam nemo amet labore, enim et obcaecati eligendi excepturi commodi in dolore molestias error repellendus expedita voluptatem. Explicabo, harum quidem.</p>
//                     <a href="https://github.com/jon-dev092/grynd-app">Github Repo</a>
//                     <br />
//                     <a href="https://jon-dev092.github.io/grynd-app/">Live Application</a>
//                 </div>
//                 <br />
//                 <br />
//                 <div>
//                     <img src={chart} alt="chart displaying finance review and graphs" />
//                     <h2>Better have my money</h2>
//                     <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam dolor corporis soluta quos excepturi dicta, ea dignissimos in architecto reiciendis accusamus neque libero fugit autem nesciunt dolore est natus molestiae similique, veritatis officiis? Animi officiis delectus, rerum perspiciatis facilis porro quisquam ipsa obcaecati non similique consequatur blanditiis itaque reiciendis natus.</p>
//                     <a href="https://github.com/marissa-a-darr/project2-collab">Github Repo</a>
//                     <br />
//                     <a href="https://evening-beyond-91031.herokuapp.com/">Live Application</a>
//                 </div>
//                 <br />
//                 <br />
//                 <img src={noPms} alt="NoPMS project logo" />
//                     <h2>NoPMS Project Management System</h2>
//                     <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam dolor corporis soluta quos excepturi dicta, ea dignissimos in architecto reiciendis accusamus neque libero fugit autem nesciunt dolore est natus molestiae similique, veritatis officiis? Animi officiis delectus, rerum perspiciatis facilis porro quisquam ipsa obcaecati non similique consequatur blanditiis itaque reiciendis natus.</p>
//                     <a href="https://github.com/Ale-Miret/NoPMS">Github Repo</a>
//                     <br />
//                     <a href="https://calm-waters-92102.herokuapp.com/">Live Application</a>
//                 <br />
//                 <br />
//                 <div>
//                     <img src={eCommerce} alt=" individual who seems to be online shopping with a smartphone on the go" />
//                     <h2>E-Commerce Backend App</h2>
//                     <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eligendi, illum. Quidem expedita deleniti consequuntur, reiciendis impedit, minus recusandae quia repellat hic natus excepturi, nemo beatae. Officia quisquam quidem iste doloremque quis dicta eos in dolore aperiam! Tenetur, dolorem consectetur repellendus modi beatae ducimus harum voluptate quidem aperiam quas, dolores fugiat.</p>
//                     <a href="https://github.com/jon-dev092/E-Commerce-Challenge">Github Repo</a>
//                 </div>
//                 <br />
//                 <br />
//                 <div>
//                     <img src={noteTaker} alt="screen shot of deployed note taker tool application" />
//                     <h2>Note Taker Tool</h2>
//                     <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae adipisci quis ipsam dignissimos nesciunt saepe, cupiditate sed impedit dolores fugit illo, ipsa nobis? Ducimus quo ad provident nisi excepturi ex harum iste neque. Adipisci, optio suscipit hic id corrupti ratione eveniet sequi aliquid pariatur? Autem adipisci numquam ad omnis eius.</p>
//                     <a href="https://github.com/jon-dev092/note-taker-tool">Github Repo</a>
//                     <br />
//                     <a href="https://note-taker-tool.herokuapp.com/https://note-taker-tool.herokuapp.com/">Live Application</a>
//                 </div>
//                 <br />
//                 <br />
//                 <div>
//                     <img src={employeeTracker} alt="two co-workers focused on a computer screen displaying charts" />
//                     <h2>Employee Tracker Backend App</h2>
//                     <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa dolor, eos reprehenderit ea iusto tenetur nostrum libero? Assumenda fugiat nostrum quidem officia autem dignissimos obcaecati illum magnam, earum nemo amet corrupti iure reprehenderit. Nesciunt porro dolor consequatur eveniet sed reprehenderit cum provident, perspiciatis illo iste repudiandae vitae labore, molestiae dolores.</p>
//                     <a href="https://github.com/jon-dev092/empolyeeTracker">Github Repo</a>
//                 </div>
//             </div>
//         </div>
//     );
// }

// export default Projects;

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
    <VStack spacing={10}>
      <Heading>Projects</Heading>
        <VStack spacing={6} alignItems="center" w="100%">
            <Box>
            <Image src={workout2} alt="Couple doing a high intensity workout with ropes at the gym" />
            <Heading as="h2" size="md">Grynd-Fitness App</Heading>
            <Text>Lorem ipsum</Text>
            <Link href="https://github.com/jon-dev092/grynd-app" isExternal>Github Repo</Link>
            <br />
            <Link href="https://jon-dev092.github.io/grynd-app/" isExternal>
                Live Application
            </Link>
            </Box>

            <Box>
            <Image src={chart} alt="chart displaying finance review and graphs" />
            <Heading as="h2" size="md">Better have my money</Heading>
            <Text>Lorem ipsum</Text>
            <Link href="https://github.com/marissa-a-darr/project2-collab" isExternal>Github Repo</Link>
            <br />
            <Link href="https://evening-beyond-91031.herokuapp.com/" isExternal>Live Application</Link>
            </Box>

            <Box>
            <Image src={noPms} alt="NoPMS project logo" />
            <Heading as="h2" size="md">NoPMS Project Management System</Heading>
            <Text>Lorem ipsum</Text>
            <Link href="https://github.com/Ale-Miret/NoPMS" isExternal>Github Repo</Link>
            <br />
            <Link href="https://calm-waters-92102.herokuapp.com/" isExternal>Live Application</Link>
            </Box>

            <Box>
            <Image src={eCommerce} alt=" individual who seems to be online shopping with a smartphone on the go" />
            <Heading as="h2" size="md">E-Commerce Backend App</Heading>
            <Text>Lorem ipsum</Text>
            <Link href="https://github.com/jon-dev092/E-Commerce-Challenge" isExternal>Github Repo</Link>
            </Box>

            <Box>
            <Image src={noteTaker} alt="screen shot of deployed note taker tool application" />
            <Heading as="h2" size="md">Note Taker Tool</Heading>
            <Text>Lorem ipsum</Text>
            <Link href="https://github.com/jon-dev092/note-taker-tool" isExternal>Github Repo</Link>
            <br />
            <Link href="https://note-taker-tool.herokuapp.com/https://note-taker-tool.herokuapp.com/" isExternal>Live Application</Link>
            </Box>

            <Box>
            <Image src={employeeTracker} alt="two co-workers focused on a computer screen displaying charts" />
            <Heading as="h2" size="md">Employee Tracker Backend App</Heading>
            <Text>Lorem ipsum</Text>
            <Link href="https://github.com/jon-dev092/empolyeeTracker" isExternal>Github Repo</Link>
            </Box>
        </VStack>
    </VStack>
);
};

export default Projects;